import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector("#home");

      if (homeSection) {
        const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
        setIsSticky(homeSectionBottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <nav
        className={`navbar navbar-expand-lg navbar-dark position-fixed w-100 ${
          isSticky ? "sticky-top" : ""
        }`}
      >
        <div className="container">
          <ul className="navbar-nav mx-auto">
          <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
