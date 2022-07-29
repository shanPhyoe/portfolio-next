import { useState } from 'react';

import DogPaw from '../../public/icons/dog-paw.svg';

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
                <DogPaw className={styles['skill-list__icon']} />
            </div>
            <span>{name}</span>
        </div>
    );
};

export default SkillList;
