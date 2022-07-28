import Image from 'next/image';

import styles from '../styles/About.module.scss';

const About = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.about}>
                <div className={styles.about__content}>
                    <div className={styles.about__about}>
                        <h3>About</h3>
                        <p>
                            I am a passionate full stack developer located in
                            Myanmar. I have a serious passion for creating
                            animations, web responsiveness and UI effects.
                        </p>
                        <p>
                            Persistent problem solver, quick learner and
                            well-organised person with high attention to details
                            and web responsiveness.
                        </p>
                    </div>
                    <div className={styles.about__love}>
                        <h3 className={styles[`about__love-header`]}>
                            <span>I</span>
                            <Image
                                src="/icons/heart.svg"
                                width={16}
                                height={16}
                                alt="love"
                            />
                        </h3>
                        <p>
                            Interactive Webs, Dogs, Coffee, Art, Music, Anime,
                            Playing Guitar, Video Games.
                        </p>
                    </div>
                </div>
                <div className={styles.about__chowchow}></div>
            </div>
        </div>
    );
};

export default About;
