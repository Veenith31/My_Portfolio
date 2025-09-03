
import styles from './About.module.css';

 import profilePhoto from '../../assets/profile-photo.jpeg';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
         <img src={profilePhoto} alt="Veenith Kumar S" className={styles.profilePhoto} /> 
        <div className={styles.aboutText}>
          <p>
            Hello! I'm Veenith, a software developer with a Master's in Computer Applications. My journey in tech is driven by a fascination with solving complex problems and building applications that are not only functional but also intelligent and intuitive.
          </p>
          <p>
            I have a strong foundation in both front-end and back-end technologies, with a particular interest in the practical applications of AI and machine learning. From developing AI-powered chatbots to building full-stack web solutions, I enjoy every aspect of the development process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;