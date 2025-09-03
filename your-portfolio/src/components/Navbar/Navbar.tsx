import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#hero" className={styles.logo}>VK</a>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;