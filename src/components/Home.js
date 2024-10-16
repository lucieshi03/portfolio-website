import React from 'react';

const Home = () => {
  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Hi, I'm Lucie Shi</h1>
      <p style={styles.text}>A computer science student passionate about coding and technology.</p>
    </section>
  );
};

const styles = {
  section: { padding: '100px', textAlign: 'center', color: '#fff' },
  title: { fontSize: '48px', fontWeight: 'bold' },
  text: { fontSize: '18px', maxWidth: '600px', margin: '20px auto' }
};

export default Home;
