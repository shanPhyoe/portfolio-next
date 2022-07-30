import Image from 'next/image';
import Link from 'next/link';
import LinkItem from '../LinkItem';

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
            <div className={styles.navbar__links}>
                <LinkItem href="/about" name="About" />
                <LinkItem href="/work" name="Work" />
                <LinkItem href="/contact" name="Contact" />
            </div>
        </nav>
    );
};

export default Navbar;
