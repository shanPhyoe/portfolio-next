import ImageSlideshow from '../components/ImageSlideshow';
import SkillList from '../components/SkillList';

import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.home__slideshow}>
                <ImageSlideshow />
            </div>
            <div className={styles['home__header-textbox']}>
                <span>Hello, my name is</span>
                <h1>Ye Wai Shan Phyoe,</h1>
                <h2>a Web Developer.</h2>
            </div>
            <div className={styles.home__skills}>
                <h3>Skills</h3>
                <div className={styles['home__skills-content']}>
                    <SkillList name="HTML" />
                    <SkillList name="CSS" />
                    <SkillList name="Sass" />
                    <SkillList name="Javascript" />
                    <SkillList name="React" />
                    <SkillList name="Redux" />
                    <SkillList name="Next" />
                    <SkillList name="Node" />
                    <SkillList name="Express" />
                    <SkillList name="MongoDB" />
                    <SkillList name="Firebase" />
                    <SkillList name="Figma" />
                </div>
            </div>
        </div>
    );
}
