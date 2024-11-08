import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Get in Touch</h2>
      <a href="https://www.linkedin.com/in/lucie-shi-65022922b/" style={styles.link}>Linkedin</a>
      <a>shilucie313@gmail.com</a>
    </section>
  );
};

const styles = {
  section: { padding: '100px', textAlign: 'center', color: '#fff' },
  title: { fontSize: '36px', fontWeight: 'bold' },
  text: { fontSize: '18px', marginBottom: '20px' },
  link: { display: 'block', margin: '10px 0', color: '#61dafb', fontSize: '18px' }
};

export default Contact;
