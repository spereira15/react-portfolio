import React from "react";

const Skills = () => {
  const skillsData = {
    "Front-end": ["React", "JavaScript", "Redux", "HTML5", "CSS3", "Bootstrap", "Bulma"],
    "Back-end": ["Node.js", "Express", "MongoDB", "MySQL"],
    "Database": ["MongoDB", "MySQL"],
    "Other": ["Git", "Sequelize", "Handlebars.js", "JSON", ".ENV", "Agile Development"],
  };

  return (
    <section id="skills" className=" py-5 text-center">
      <h2 className="mt-4">
        <span className="animated-letter">S</span>
        <span className="animated-letter">k</span>
        <span className="animated-letter">i</span>
        <span className="animated-letter">l</span>
        <span className="animated-letter">l</span>
        <span className="animated-letter">s</span>
      </h2>
      <div className="container mt-5">
        <div className="row">
          {Object.entries(skillsData).map(([category, technologies], index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card border-0 bg-transparent custom-card">
                <div className="card-body text-white rounded h-100">
                  <h3 className="card-title">{category}</h3>
                  <ul className="list-unstyled">
                    {technologies.map((technology, index) => (
                      <li key={index}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
