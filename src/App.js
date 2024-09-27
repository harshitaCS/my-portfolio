import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="profile-pic">
          <img src="./images/HARSHITA2.jpeg" alt="Harshita Meena" />
        </div>
        <div className="about-text">
          <h1>Hello</h1>
          <h3>A Bit About Me</h3>
          <p>B.Tech Graduated at IIT Patna in Computer Science And Engineering with a keen interest in Competetive Programming, Front-end Development, and Back-end Development.</p>
          <div className="button-container">
            <Link to="/projects"><button>Projects</button></Link>
            <Link to="/skills"><button>Skills</button></Link>
            <Link to="/achievements"><button>Achievements</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
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
          <h3>Real-Time Food Delivery Platform</h3>
          <p>Scalable food delivery platform with real-time order tracking using Node.js and WebSocket.</p>
          <a href="https://github.com/harshitaCS/food-delivery-platform" target="_blank" rel="noreferrer noopener">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Bluetooth Control Robot Car 🚗</h3>
          <p>Developed an Arduino-based Bluetooth-controlled robot car using C++ and a Bluetooth RC controller.</p>
          <a href="https://github.com/harshitaCS/bluetooth-robot-car" target="_blank" rel="noreferrer noopener">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h2>💡 Skills</h2>
      <ul>
        <li>Languages: C++, Python, JavaScript, CSS, HTML</li>
        <li>Technologies: Node.js, MySQL, Firebase, IBM Qiskit, React.js, Jira</li>
        <li>Tools: Android Studio, Git, Remix, Ubuntu Linux, Visual code</li>
      </ul>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements">
      <h2>🏆 Achievements</h2>
      <ul>
        <li>1200+ DSA problems solved across various platforms</li>
        <li>Women Coders Contest APAC, top performer</li>
        <li>Knight rank on LeetCode (Max rating: 1990)</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>📧 Contact Me</h2>
      <p>Email: <a href="mailto:harshitae2002@gmail.com">harshitae2002@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/harshitaCS" target="_blank" rel="noreferrer noopener">harshitaCS</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/harshita-meena-132926200" target="_blank" rel="noreferrer noopener">Harshita Meena</a></p>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Harshita Meena</h1>
          <p>Software Developer | Full Stack Developer | Android Developer</p>
        </header>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
