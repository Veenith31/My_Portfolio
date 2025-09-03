import  { useCallback } from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 
import styles from './Hero.module.css';

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // This initializes the tsparticles engine
    await loadSlim(engine);
  }, []);

  const particleOptions = {
    background: {
      color: {
        value: "transparent", // Use transparent to show the CSS background
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#a0a0a0", // Color of the particles
      },
      links: {
        color: "#a0a0a0", // Color of the lines connecting particles
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 1, // Speed of the particles
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50, // Number of particles
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: "circle" as const,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Particles component is placed here */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
        className={styles.particles}
      />
      
      {/* Your existing sidebars and content */}
      <div className={styles.leftSidebar}>
        {/* ... (keep your social links SVG here) ... */}
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.title}>Veenith Kumar S</h1>
        <p className={styles.subtitle}>
          A creative and driven Full-Stack Developer with a passion for building intelligent, user-friendly applications.
        </p>
        <a href="mailto:veeniths31@gmail.com" className={styles.ctaButton}>
          Say Hello
        </a>
      </div>

      <div className={styles.rightSidebar}>
        {/* ... (keep your email link here) ... */}
      </div>
    </section>
  );
};

export default Hero;