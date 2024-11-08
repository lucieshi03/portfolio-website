import React from 'react';

const Home = () => {
  return (
    <div>
      <nav style={styles.navBar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="#projects" style={styles.navLink}>Projects</a>
          </li>
          <li style={styles.navItem}>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </li>
        </ul>
      </nav>

      <section style={styles.section}>
        <div style={styles.content}>
          <h1 style={styles.title}>Lucie Shi</h1>
          <div style={styles.underline} />
          <p style={styles.subtitle}>Computer Science student</p>
          <p style={styles.smallText}>@ McGill University</p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  navBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#000',
    padding: '10px 20px',
    zIndex: 10,
  },
  navList: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  navItem: {
    margin: '0 30px',
  },
  navLink: {
    color: '#eee',
    textDecoration: 'none',
    fontSize: '16px',
  },
  section: {
    height: '95vh',
    padding: '20px',
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'left',
  },
  content: {
    marginLeft: '20px',
  },
  title: {
    fontSize: '72px',
    fontWeight: 'bold',
    color: '#000',
  },
  underline: {
    width: '100%',
    height: '5px',
    background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)',
    backgroundSize: '200% 100%',
    animation: 'wave 2s infinite linear',
    marginTop: '5px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#000',
    margin: '0 0 5px 0',
  },
  smallText: {
    fontSize: '14px',
    color: '#000',
  },
};

// Add keyframes for the wave animation
const waveAnimation = document.createElement('style');
waveAnimation.innerHTML = `
  @keyframes wave {
    0% { background-position: 0% 0%; }
    100% { background-position: 200% 0%; }
  }
`;
document.head.appendChild(waveAnimation);

export default Home;
