// App.js
import React from "react";
import NavBar from "./components/NavBar";
import "./index.css"; // Your custom CSS
import "tailwindcss/tailwind.css"; // Import compiled Tailwind CSS
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
