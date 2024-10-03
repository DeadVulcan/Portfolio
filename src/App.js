// src/App.js
import React from 'react';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;