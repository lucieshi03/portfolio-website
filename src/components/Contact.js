import React, {useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("Failed to send message. Please try again later.");
    }
  };
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Get in Touch</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={styles.input}
        />
        <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={styles.input}
        />
        <textarea
        name="message"
        placeholder="Write me a message! :)"
        value={formData.message}
        onChange={handleChange}
        required
        style={styles.textarea}
        />
        <button type="submit" style={styles.submitButton}>Send Message</button>
      </form>
      <a href="https://www.linkedin.com/in/lucie-shi-65022922b/" style={styles.link}>Linkedin</a>
      <a href="https://github.com/lucieshi03" style={styles.link}>GitHub</a>
      <a>shilucie313@gmail.com</a>
    </section>
  );
};

const styles = {
  section: { padding: '100px', textAlign: 'center', color: '#fff' },
  title: { fontSize: '36px', fontWeight: 'bold' },
  text: { fontSize: '18px', marginBottom: '20px' },
  link: { display: 'block', margin: '10px 0', color: '#61dafb', fontSize: '18px' },
  form: { display: "flex", flexDirection: "column", maxWidth: "400px", border: "1px solid #ccc" },
  input: { padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" },
  textarea: { padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc", height: "100px" },
  button: { padding: "10px", borderRadius: "5px", backgroundColor: "#61dafb", border: "none", cursor: "pointer" }
};

export default Contact;
