import React, { useState, useRef } from 'react';

const Home = () => {
  const [input, setInput] = useState('');
  const [dynamicOutput, setDynamicOutput] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const inputRef = useRef(null); // UseRef to manage focus

  const handleInputChange = (e) => setInput(e.target.value);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      let newOutput = '';
      if (input === 'ls') {
        newOutput = `\n- EyeMouse: 1st place winner at CodeJam!! (Nov. 2024)\n- HeartMap: Heart Disease Detection (Nov. 2024)\n- Smart: To-Do List with Machine Learning Integration (Jul. 2024)\n>>Type "cat [name of the project]"`;
      } else if (input === 'help') {
        newOutput = 'Type "ls" to see my projects or type "talk" to see my contacts.';
      } else if (input === 'talk') {
        newOutput = (
          <div>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/lucie-shi-65022922b/" target="_blank" rel="noopener noreferrer">Linkedin link</a></p>
            <p>GitHub: <a href="https://github.com/lucieshi03" target="_blank" rel="noopener noreferrer">GitHub link</a></p>
            <p>Email: <a href="mailto:shilucie313@gmail.com">shilucie313@gmail.com</a></p>
          </div>
        );
      } else if (input === 'clear') {
        newOutput = '';
        setIsStarted(false);
      } else if (input === 'cat EyeMouse') {
        newOutput = 'EYEMOUSE: EyeMouse uses face tracking and hand gesture recognition for cursor and keyboard control.';
      } else {
        newOutput = '\nCommand not found. Type "ls" for projects or "talk" for contacts.';
      }

      setDynamicOutput(newOutput);
      setIsStarted(true);
      setInput(''); // Reset input field
      inputRef.current.focus(); // Ensure focus stays on the input field after resetting
    }
  };

  return (
    <div>
      {/* Window Tab Header */}
      <div style={styles.windowHeader}>
        <div style={styles.logo}>LS</div>
        <div style={styles.windowControls}>
          <button style={styles.controlButton}>–</button>
          <button style={styles.controlButton}>□</button>
          <button style={styles.controlButton}>X</button>
        </div>
      </div>

      {/* Terminal Window */}
      <section style={styles.section}>
        <div style={styles.terminalContainer}>
          <div style={styles.terminalOutput}>
            <h1>Hello!</h1>
            
            {/* Render the monkey and initial text only if isStarted is false */}
            {!isStarted && (
              <>
                <p style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {`      __
 w  c(..)o   (
  \\__(-)    __)
      /\\   (
     /(_)___)
     w /|
      | \\
      m  m`}
                </p>
                <p>My name is Lucie Shi and I am a computer science student @ McGill University.</p>
                <p>Type 'help' to get started!</p>
              </>
            )}
            <p>{dynamicOutput}</p>
          </div>
          <div style={styles.inputLine}>
            <span style={styles.commandPrompt}>C:\Users\Visitor&gt;</span>
            <input
              ref={inputRef} // Set ref here
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleCommand}
              style={styles.commandInput}
            />
          </div>
        </div>
        <div style={styles.scrollPrompt}>
          <p style={styles.scrollText}>Scroll down for more</p>
          <div style={styles.arrow}>v</div>
        </div>
      </section>
    </div>
  );
};


const styles = {
  scrollPrompt: {
    position: 'absolute',
    bottom: '20px',
    textAlign: 'center',
    width: '100%',
    color: '#fff',
    fontFamily: 'monospace',
    animation: 'fadeIn 1s infinite',
  },
  scrollText: {
    marginBottom: '0px',
    fontSize: '14px',
    letterSpacing: '1px',
    opacity: 0.6,
  },
  arrow: {
    fontSize: '16px',
    opacity: 0.6,
    animation: 'bounce 1s infinite',
  },
  windowHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    color: '#fff',
    padding: '10px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    borderBottom: '2px solid #444',
    marginBottom: '10px',
    fontFamily: 'monospace',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  windowControls: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  controlButton: {
    background: '#333',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    margin: '0 5px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  section: {
    height: '90vh',
    padding: '20px 20px 0 20px',
    backgroundColor: 'black',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'left',
    overflow: 'hidden',
  },
  terminalContainer: {
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    padding: '20px',
    backgroundColor: 'black',
    width: '80%',
    margin: '0 auto',
    height: '100%',
    flexGrow: 1,
    overflowY: 'auto',
    paddingBottom: '30px',
  },
  terminalOutput: {
    marginBottom: '5px',
  },
  inputLine: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: '10px',
  },
  commandPrompt: {
    color: '#0f0',
    marginRight: '10px',
  },
  commandInput: {
    background: 'transparent',
    color: '#fff',
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '16px',
    paddingLeft: '20px',
  }
};

export default Home;
