import Email from '../public/icons/email.svg';
import Phone from '../public/icons/phone.svg';
import GitHub from '../public/icons/github.svg';
import LinkedIn from '../public/icons/linkedin.svg';

import styles from '../styles/Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.contact}>
                <h3>Contact</h3>
                <p>
                    I&#39;m interested in job opportunities and I would like to
                    hear from you. Also, if you have any questions or just want
                    to say hi, please ring my bells, and I will get back to you
                    as soon as possible.
                </p>
                <a
                    className={styles.contact__item}
                    href="mailto:shan.phyoe97@gmail.com"
                >
                    <Email className={styles.contact__icon} />
                    <span>shan.phyoe97@gmail.com</span>
                </a>
                <a
                    className={styles.contact__item}
                    href="https://github.com/shanPhyoe"
                    target="_blank"
                    rel="noopenner noreferrer"
                >
                    <GitHub className={styles.contact__icon} />
                    <span>shanPhyoe</span>
                </a>
                <a
                    className={styles.contact__item}
                    href="https://www.linkedin.com/in/shan-phyoe/"
                    target="_blank"
                    rel="noopenner noreferrer"
                >
                    <LinkedIn className={styles.contact__icon} />
                    <span>Shan Phyoe</span>
                </a>
                <a className={styles.contact__item} href="tel:+959445185009">
                    <Phone className={styles.contact__icon} />
                    <span>+959 445 185 009</span>
                </a>
            </div>
        </div>
    );
};

export default Contact;
