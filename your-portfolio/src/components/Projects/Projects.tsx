import styles from './Projects.module.css';

const projectData = [
  {
    title: 'Gen AI Powered Summarizer',
    description: 'An AI-powered web app for intelligent content summarization, featuring smart search and Gemini 2.0 integration.',
    tags: ['Java', 'Spring Boot', 'React', 'Python', 'MongoDB'],
  },
  {
    title: 'AI Appointment Booking Agent',
    description: 'An intelligent Telegram bot for scheduling salon appointments using natural language processing.',
    tags: ['Python', 'Telegram Bot API', 'AI'],
  },
  {
    title: 'RAG Chatbot',
    description: 'A WhatsApp-style chatbot using LangChain and Google Gemini to provide context-aware responses.',
    tags: ['LangChain', 'FAISS', 'Gemini 2.0'],
  },
  {
    title: 'Task Distribution Tool',
    description: 'A comprehensive task distribution system built with the MERN stack that allows administrators to manage agents and efficiently distribute tasks among them through CSV file uploads.',
    tags: ['MERN'],
  },
  {
    title: 'Movie-Review-Platform',
    description: 'MovieFlix is a feature-rich, full-stack web application built with the MERN stack except MongoDB Express, React, Node.js, PostgreSQL that allows users to discover, review, and discuss their favorite films. It provides a seamless and interactive experience for movie enthusiasts to engage with a community of like-minded individuals.',
    tags:['PostgreSQL', 'React', 'NodeJS', 'Express' ]
}
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.grid}>
        {projectData.map((project, index) => (
          <div className={styles.card} key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;