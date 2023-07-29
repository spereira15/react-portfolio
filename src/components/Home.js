import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section id="home" className="bg-light py-5 text-center">
      <div className="profile-image">
        <img
          src="/path-to-your-image.jpg"
          alt="Profile"
          className="rounded-circle img-thumbnail"
        />
      </div>
      <h2 className="mt-4">Hey there, I'm Simon.</h2>
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
    </section>
  );
};

export default Home;
