import Image from 'next/image';
import Link from 'next/link';

import styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <a className={styles.navbar__home}>
                    <Image
                        src="/icons/dog.svg"
                        alt="lovely dog"
                        width={20}
                        height={20}
                        className={styles.navbar__image}
                    />
                    <span>shanPhyoe</span>
                </a>
            </Link>
            <Link href="/about">
                <a className={styles.navbar__link}>About</a>
            </Link>
            <Link href="/work">
                <a className={styles.navbar__link}>Work</a>
            </Link>
            <Link href="/contact">
                <a className={styles.navbar__link}>Contact</a>
            </Link>
        </nav>
    );
};

export default Navbar;
