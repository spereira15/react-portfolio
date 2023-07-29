import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const Home = () => {
  return (
    <section id="home" className="bg-light py-5 text-center section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mt-4">
              <span className="animated-letter">H</span>
              <span className="animated-letter">e</span>
              <span className="animated-letter">y</span>{" "}
              <span className="animated-letter">t</span>
              <span className="animated-letter">h</span>
              <span className="animated-letter">e</span>
              <span className="animated-letter">r</span>
              <span className="animated-letter">e</span>
              <span className="animated-letter">,</span>{" "}
              <span className="animated-letter">I</span>
              <span className="animated-letter">'</span>
              <span className="animated-letter">m</span>{" "}
              <span className="animated-letter">S</span>
              <span className="animated-letter">i</span>
              <span className="animated-letter">m</span>
              <span className="animated-letter">o</span>
              <span className="animated-letter">n</span>
            </h2>
            <p className="lead">
              I am a Full-Stack Developer passionate about creating amazing web
              applications.
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/simonpereira15/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mx-2"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com/spereira15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark mx-2"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#get-started">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Home;
