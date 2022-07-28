import Image from 'next/image';

import styles from './project.module.scss';

const Project = ({
    title,
    imagePath,
    description,
    stack,
    websiteLink,
    gitRepoLink,
}) => {
    return (
        <div className={styles.project}>
            <div className={styles.project__image}>
                <Image src={imagePath} alt={title} layout="fill" />
            </div>
            <div className={styles.project__content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.project__stack}>
                    <div>STACK</div>
                    <p>{stack}</p>
                </div>
                <a
                    href={gitRepoLink}
                    target="_blank"
                    role="button"
                    rel="noreferrer noopenner"
                    className={styles.project__link}
                >
                    GIT Repo
                </a>
                <a
                    href={websiteLink}
                    target="_blank"
                    role="button"
                    rel="noreferrer noopenner"
                    className={styles.project__link}
                >
                    Live Website
                </a>
            </div>
        </div>
    );
};

export default Project;
