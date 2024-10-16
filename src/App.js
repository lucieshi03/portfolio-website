import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div style={styles.app}>
      <Home />
      <Projects />
      <Contact />
    </div>
  );
};

const styles = {
  app: { backgroundColor: '#000', fontFamily: "'Montserrat', sans-serif" }
};

export default App;
