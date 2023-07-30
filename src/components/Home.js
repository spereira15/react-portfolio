// Home.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const Home = () => {
  return (
    <section id="home" className="py-5 text-center section">
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
                className="text-light mx-2" /* Changed to text-light for white color */
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
