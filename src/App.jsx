import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hackathons from './components/Hackathons';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Skills />
      <Experience/>
      <Projects />
      <Hackathons/>
      <Contact />
      
    </div>
  );
}

export default App;
