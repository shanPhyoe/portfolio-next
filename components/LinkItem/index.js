import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './linkItem.module.scss';

const LinkItem = ({ href, name }) => {
    const router = useRouter();

    const active = router.asPath === href;
    return (
        <Link href={href}>
            <a
                className={`${styles.link} ${
                    active ? styles['link--active'] : ''
                }`}
            >
                {name}
            </a>
        </Link>
    );
};

export default LinkItem;
