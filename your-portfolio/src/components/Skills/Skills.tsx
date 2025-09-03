import styles from './Skills.module.css';

const skillsData = [
  'Java', 'Python', 'JavaScript', 'React','TypeScript', 'Spring Boot', 'MongoDB', 'MySQL','Postgres SQL','NodeJS', 'Git', 'Docker', 'CSS'
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Core Technologies</h2>
      <div className={styles.container}>
        {skillsData.map((skill, index) => (
          <div className={styles.skillItem} key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;