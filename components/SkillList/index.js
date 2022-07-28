import { useState } from 'react';

import Image from 'next/image';

import styles from './skillList.module.scss';

const SkillList = ({ name }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);

        setTimeout(() => {
            setIsHovering(false);
        }, 1000);
    };

    return (
        <div className={styles['skill-list']} onMouseEnter={handleMouseEnter}>
            <div
                className={`$styles['skill-list__image] ${
                    isHovering ? styles['skill-list__image--active'] : ''
                }`}
            >
                <Image
                    src="/icons/dog-paw.svg"
                    width={18}
                    height={18}
                    alt="dog paw"
                />
            </div>
            <span>{name}</span>
        </div>
    );
};

export default SkillList;
