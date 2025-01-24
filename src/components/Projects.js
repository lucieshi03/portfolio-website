import React, { useState } from 'react';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projectList = [
    {
      name: 'EyeMouse (1st place @ CodeJam Hackathon)',
      description: 'Mouse but it\'s your eyes: EyeMouse uses a combination of face tracking and hand gesture recognition to simulate mouse movements and keyboard interactions.',
      pictures: ['/eyemouse.jpg', '/eyemouse_logo.jpg'],
      technologies: ['OpenCV', 'MediaPipe', 'PyAutoGUI'],
    },
    {
      name: 'HeartMap: Heart Disease Detection',
      description: 'This project aims to create a machine learning model that predicts the likelihood of heart disease in patients based on health indicators like cholesterol levels, age, and blood pressure to be implemented into a web app where the user will provide several medical and lifestyle-related inputs in the form of text fields and the output will be a prediction indicating the likelihood of heart disease.',
      pictures: ['/heartmap1.png', '/heartmap2.png', '/heartmap3.png'],
      technologies: ['Python', 'Scikit-Learn'],
    },
    {
      name: 'Smart To-Do List',
      description: 'This website features a text classification machine learning model built with Scikit-Learn. As you enter a task, the site automatically classifies it as either "work" or "personal," making it easier for users to organize their to-do list by category.',
      pictures: ['/todo1.png', '/todo2.png', 'todo3.png'],
      technologies: ['React.js', 'Scikit-Learn', 'Flask'],
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the clicked image as the selected image
  };

  const closeModal = () => {
    setSelectedImage(null); // Clear the selected image to close the modal
  };

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>My Projects</h2>
      <div style={styles.projectContainer}>
        {projectList.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.pictures && (
              <div style={styles.pictureContainer}>
                {project.pictures.map((picture, idx) => (
                  <img
                    key={idx}
                    src={picture}
                    alt={`${project.name} screenshot ${idx + 1}`}
                    style={styles.thumbnail}
                    onClick={() => handleImageClick(picture)}
                  />
                ))}
              </div>
            )}
            <div style={styles.techContainer}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} style={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for expanded image */}
      {selectedImage && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Expanded" style={styles.expandedImage} />
            <button style={styles.closeButton} onClick={closeModal}>
              x
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  section: { padding: '100px', textAlign: 'center', color: '#fff' },
  title: { fontSize: '36px', fontWeight: 'bold' },
  projectContainer: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap' },
  projectCard: {
    width: '1000px',
    margin: '10px',
    padding: '20px',
    backgroundColor: 'black',
    borderRadius: '8px',
    border: '2px solid white',
  },
  techContainer: { marginTop: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' },
  techTag: {
    backgroundColor: '#555',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '12px',
    margin: '5px',
    fontSize: '14px',
  },
  pictureContainer: { 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: '10px', 
    marginTop: '10px' 
  },
  thumbnail: {
    width: '300px',
    height: '200px',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    position: 'relative',
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  expandedImage: { width: '90%', maxHeight: '80vh', objectFit: 'contain' },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};


export default Projects;
