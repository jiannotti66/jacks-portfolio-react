import React from 'react';
import Hero from './components/Hero.jsx';
import Navbar from './components/NavBar.jsx';
import About from './components/About.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;