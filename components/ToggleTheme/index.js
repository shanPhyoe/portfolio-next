import { useEffect, useState } from 'react';

import Image from 'next/image';

import styles from './theme.module.scss';

const ToggleTheme = () => {
    const [activeTheme, setActiveTheme] = useState('dark');
    const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
    }, [activeTheme]);

    return (
        <div
            className={`${styles.container} ${
                activeTheme === 'light'
                    ? styles['container--light']
                    : styles['container--dark']
            }`}
            onClick={() => setActiveTheme(inactiveTheme)}
            role="toggle"
        >
            {activeTheme === 'dark' ? (
                <Image
                    src="/icons/sun.svg"
                    width={20}
                    height={20}
                    alt="day mode"
                />
            ) : (
                <Image
                    src="/icons/moon.svg"
                    width={20}
                    height={20}
                    alt="night mode"
                />
            )}
        </div>
    );
};

export default ToggleTheme;
