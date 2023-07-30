// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticlesComponent from "./components/Particles";
import "./App.css";

const App = () => {
  return (
    <>
      <ParticlesComponent />
      <div className="content-container">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
