import React from 'react';
import Hero from './components/Hero.jsx';
import Navbar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Work from './components/Work.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Work/>
    </div>
  );
}

export default App;