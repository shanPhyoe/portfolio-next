import Image from 'next/image';

import styles from './imageSlideshow.module.scss';

const ImageSlideshow = () => {
    return (
        <div className={styles.slideshow}>
            <div className={styles.slideshow__image}>
                <Image
                    src="/images/hotel alucia.png"
                    alt="hotel alucia"
                    layout="fill"
                />
            </div>
            <div className={styles.slideshow__image}>
                <Image
                    src="/images/ryus greeneries.png"
                    alt={`ryu\'s greeneries`}
                    layout="fill"
                />
            </div>
            <div className={styles.slideshow__image}>
                <Image
                    src="/images/fx-tetra.png"
                    alt="fx-tetra"
                    layout="fill"
                />
            </div>
            <div className={styles.slideshow__image}>
                <Image
                    src="/images/goldflow.png"
                    alt="gold flow"
                    layout="fill"
                />
            </div>
            <div className={styles.slideshow__image}>
                <Image
                    src="/images/hotel alucia.png"
                    alt="hote alucia"
                    layout="fill"
                />
            </div>
            <div className={styles.slideshow__image}>
                <Image
                    src="/images/ryus greeneries.png"
                    alt={`ryu\'s greeneries`}
                    layout="fill"
                />
            </div>
            <div className={styles.slideshow__image}>
                <Image
                    src="/images/fx-tetra.png"
                    alt="fx-tetra"
                    layout="fill"
                />
            </div>
            <div className={styles.slideshow__image}>
                <Image
                    src="/images/goldflow.png"
                    alt="gold flow"
                    layout="fill"
                />
            </div>
        </div>
    );
};

export default ImageSlideshow;
