<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import './App.css';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';

function App() {
  return (
    <div className="app">
      <header className="header">
        {/* Navigation Bar with Anchor Links */}
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Sections with corresponding IDs */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="contact">
        <Contact />
      </div>
>>>>>>> 079fc1280eadf084dd8303d028df82a1311d8c42
    </div>
  );
}

export default App;
