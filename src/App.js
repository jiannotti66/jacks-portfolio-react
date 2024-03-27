import React from 'react';
import Hero from './components/Hero.jsx';
import Navbar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Work from './components/Work.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Socials from './components/Socials.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Work/>
      <Experience/>
      <Socials/>
      <Contact/>
    </div>
  );
}

export default App;