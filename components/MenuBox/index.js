import { useState, useRef } from 'react';
import { useClickAway } from 'react-use';

import MenuIcon from '../../public/icons/menu.svg';

import LinkItem from '../LinkItem';

import styles from './menuBox.module.scss';

const MenuBox = () => {
    const [linksShown, setLinksShown] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setLinksShown(false));

    return (
        <div className={styles.menubox}>
            <div
                className={styles['menubox__button']}
                onClick={() => setLinksShown(!linksShown)}
            >
                <MenuIcon className={styles['menubox__icon']} />
            </div>
            <div
                className={`${styles.menubox__links} ${
                    linksShown ? styles['menubox__links--active'] : ''
                }`}
                ref={ref}
            >
                <div onClick={() => setLinksShown(false)}>
                    <LinkItem href="/about" name="About" />
                </div>
                <div onClick={() => setLinksShown(false)}>
                    <LinkItem href="/work" name="Work" />
                </div>
                <div onClick={() => setLinksShown(false)}>
                    <LinkItem href="/contact" name="Contact" />
                </div>
            </div>
        </div>
    );
};

export default MenuBox;
