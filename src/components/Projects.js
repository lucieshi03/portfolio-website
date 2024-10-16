const Projects = () => {
    const projectList = [
      {
        name: 'Smart To-Do List',
        description: 'This website features a text classification machine learning model built with Scikit-Learn. As you enter a task, the site automatically classifies it as either "work" or "personal," making it easier for users to organize their to-do list by category.',
        video: '/videos/Smart-To-Do-oct13.mp4',
        technologies: ['React', 'Scikit-Learn', 'Flask', 'CSS3', 'HTML5']
      },
      
    ];
  
    return (
      <section style={styles.section}>
        <h2 style={styles.title}>My Projects</h2>
        <div style={styles.projectContainer}>
          {projectList.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.video && (
                <video width="250" controls>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
      </section>
    );
  };
  
  const styles = {
    section: { padding: '100px', textAlign: 'center', color: 'white' },
    title: { fontSize: '36px', fontWeight: 'bold' },
    projectContainer: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap' },
    projectCard: { width: '300px', margin: '20px', padding: '20px', backgroundColor: '#333', borderRadius: '8px' },
    techContainer: { marginTop: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' },
    techTag: {
      backgroundColor: '#555', // Change this to your preferred color
      color: '#fff',
      padding: '5px 10px',
      borderRadius: '12px',
      margin: '5px',
      fontSize: '14px',
    }
  };
  
  export default Projects;
  