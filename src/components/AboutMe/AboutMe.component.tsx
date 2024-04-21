import styles from './AboutMe.module.css';
export const AboutMe = () => {
    const aboutMeDescriptionStyle = styles.aboutMeDescription;

    return (
        <>
            <div className={styles.aboutMeBlock}>
                <img alt="about me" className={styles.aboutMeAvatar} src="me.jpg" />
                <div>
                    <h2 className={styles.aboutMeHeader}>About me</h2>
                    <p className={aboutMeDescriptionStyle}>
                        Hi! My name is Dmytro and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies
                        like React, HTML, CSS, JavaScript and Git version control system.
                    </p>
                    <p className={aboutMeDescriptionStyle}>
                        This page was developed during the course &apos;
                        <a href="https://www.mastersacademy.education/frontend-react-it">
                            <u>Intro to React</u>
                        </a>
                        &apos; from Masters Academy in 2024.
                    </p>
                    <p className={aboutMeDescriptionStyle}>
                        This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my
                        own small project for the portfolio.
                    </p>
                    <p className={aboutMeDescriptionStyle}>
                        You can contact me via{' '}
                        <a href="https://github.com/jaxin007">
                            <u>My Personal GitHub</u>
                        </a>{' '}
                        and check out my GitHub.
                    </p>
                </div>
            </div>
        </>
    );
};
