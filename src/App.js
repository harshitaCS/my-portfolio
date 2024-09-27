import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [activeSection, setActiveSection] = useState('about'); // Initial active section
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Load the active section from sessionStorage on mount
  useEffect(() => {
    const storedSection = sessionStorage.getItem('activeSection');
    if (storedSection) {
      setActiveSection(storedSection);
    }
  }, []);

  // Update sessionStorage whenever activeSection changes
  useEffect(() => {
    sessionStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  const showSection = (sectionId) => {
    sessionStorage.setItem('previousSection', activeSection); // Store current section before switching
    setActiveSection(sectionId); // Update the active section state
  };

  const toggleImageSize = () => {
    setIsEnlarged(!isEnlarged); // Toggle enlarged state
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark mode state
  };
  const goBack = () => {
    const previousSection = sessionStorage.getItem('previousSection');
    if (previousSection) {
      setActiveSection(previousSection);
      sessionStorage.setItem('activeSection', previousSection);
    }
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}> {/* Add dark mode class */}
      <header>
        <h1>Harshita Meena</h1>
        <p>Software Developer | Full Stack Developer | Android Developer</p>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'} {/* Toggle text based on current mode */}
        </button>
      </header>

      <div className="container">
        <section id="about" className={activeSection === 'about' ? 'active' : 'hidden'}>
          <div className="about-container">
            <div className="profile-pic" onClick={toggleImageSize}>
              <img 
                src={`${process.env.PUBLIC_URL}/images/harshita.jpg`} 
                alt="Harshita Meena" 
                className={isEnlarged ? 'enlarged' : ''} 
              />
            </div>
            <div className="about-text">
              <h1>Hello</h1>
              <h3>A Bit About Me</h3>
              <p>
                B.Tech Graduated at IIT Patna in Computer Science And Engineering 
                with a keen interest in Competitive Programming, Front-end Development, 
                and Back-end Development.
              </p>
              <div className="button-container">
                <button onClick={() => showSection('projects')}>Projects</button>
                <button onClick={() => showSection('skills')}>Skills</button>
                <button onClick={() => showSection('achievements')}>Achievements</button>
                <button onClick={() => showSection('contact')}>Contact</button>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className={activeSection === 'projects' ? 'active' : 'hidden'}>
          <h2>📂 Projects</h2>
          <div className="project-grid">
            <div className="project">
              <h3>Campus Amenities Administration</h3>
              <p>Backend development using MySQL to manage campus amenities efficiently.</p>
              <a href="https://github.com/harshitaCS/dbms_mini_project" target="_blank" rel="noreferrer noopener">View on GitHub</a>
            </div>
            <div className="project">
              <h3>GoFundMe Decentralized Dapp</h3>
              <p>Full Stack Development with Solidity and React.js for a decentralized fundraising platform.</p>
              <a href="https://github.com/harshitaCS/GoFundMe" target="_blank" rel="noreferrer noopener">View on GitHub</a>
            </div>
            <div className="project">
              <h3>Fully Quantum Hash Function Generation</h3>
              <p>Design a Fully Quantum Hash Function with Zero Hash Collisions Using Python, IBM Qiskit, and Google Colab</p>
              <a href="https://github.com/harshitaCS/food-delivery-platform" target="_blank" rel="noreferrer noopener">View on GitHub</a>
            </div>
            <div className="project">
              <h3>Bluetooth Control Robot Car 🚗</h3>
              <p>Developed an Arduino-based Bluetooth-controlled robot car using C++ and a Bluetooth RC controller.</p>
              <a href="https://github.com/harshitaCS/arduino_based_project" target="_blank" rel="noreferrer noopener">View on GitHub</a>
            </div>
          </div>
        </section>

        <section id="skills" className={activeSection === 'skills' ? 'active' : 'hidden'}>
          <h2>💡 Skills</h2>
          <ul>
            <li>Languages: C++, Python, JavaScript, CSS, HTML</li>
            <li>Technologies: Node.js, MySQL, Firebase, IBM Qiskit, React.js, Jira</li>
            <li>Tools: Android Studio, Git, Remix, Ubuntu Linux, Visual code</li>
          </ul>
        </section>

        <section id="achievements" className={activeSection === 'achievements' ? 'active' : 'hidden'}>
          <h2>🏆 Achievements</h2>
          <ul>
            <li>1200+ DSA problems solved across various platforms</li>
            <li>Women Coders Contest APAC, top performer</li>
            <li>Knight rank on LeetCode (Max rating: 1990)</li>
          </ul>
        </section>

        <section id="contact" className={activeSection === 'contact' ? 'active' : 'hidden'}>
          <h2>📧 Contact Me</h2>
          <p>Email: <a href="mailto:harshitae2002@gmail.com">harshitae2002@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/harshitaCS" target="_blank" rel="noreferrer noopener">harshitaCS</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/harshita-meena-132926200" target="_blank" rel="noreferrer noopener">Harshita Meena</a></p>
        </section>

        {/* Conditionally render Go Back Button */}
        {activeSection !== 'about' && (
          <button onClick={goBack} className="go-back-button">Go Back</button>
        )}
      </div>
    </div>
  );
}

export default App;
