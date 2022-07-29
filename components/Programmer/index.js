import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../../lib/model';

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const MeAndDog = () => {
    const refContainer = useRef();
    const [loading, setLoading] = useState(true);
    const [renderer, setRenderer] = useState();
    const [_camera, setCamera] = useState();
    const [target] = useState(new THREE.Vector3(-0.7, 1.2, 0));
    const [initialCameraPosition] = useState(new THREE.Vector3(0, 0, 0));
    const [scene] = useState(new THREE.Scene());
    const [_controls, setControls] = useState();

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer;
        if (container && renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;

            renderer.setSize(scW, scH);
        }
    }, [renderer]);

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const { current: container } = refContainer;
        if (container && !renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(scW, scH);
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(renderer.domElement);
            setRenderer(renderer);

            const scale = 2;
            const camera = new THREE.OrthographicCamera(
                -scale / 2,
                scale / 2,
                scale / 2,
                -scale / 2,
                1,
                1000
            );
            // camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            setCamera(camera);

            const ambientLight = new THREE.AmbientLight(0xffffff, 1);
            scene.add(ambientLight);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.autoRotate = true;
            controls.autoRotateSpeed = 3;
            controls.target = target;
            setControls(controls);

            loadGLTFModel(scene, '/programmer.glb', {
                receiveShadow: true,
                castShadow: true,
            }).then(() => {
                animate();
                setLoading(false);
            });

            let req = null;
            let frame = 0;
            const animate = () => {
                req = requestAnimationFrame(animate);

                frame = frame <= 100 ? frame + 1 : frame;

                if (frame <= 100) {
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

                    camera.position.y = 5;
                    camera.position.x =
                        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
                    camera.position.z = 10;
                    camera.lookAt(target);
                } else {
                    controls.update();
                }

                renderer.render(scene, camera);
            };

            return () => {
                console.log('unmount');
                cancelAnimationFrame(req);
                renderer.dispose();
            };
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false);
        return () => {
            window.removeEventListener('resize', handleWindowResize, false);
        };
    }, [renderer, handleWindowResize]);

    return (
        <div
            ref={refContainer}
            style={{
                background: 'transparent',
                height: '40rem',
                width: '40rem',
            }}
            title="Owner of 3D object: Jan Bláha, from Link: https://sketchfab.com/3d-models/programmer-153d901c16494fd8bc5d376c39a1fa44"
        >
            {loading && <p>Loading</p>}
        </div>
    );
};

export default MeAndDog;
