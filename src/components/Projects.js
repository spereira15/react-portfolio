import React from "react";

const Projects = () => {
  const projectsData = {
    "KaptionKingdom": [
      "Developed a fully functional quote generator web application.",
      "Implemented JavaScript functionality to generate and display random quotes.",
      "Integrated social media sharing functionality for users to share quotes.",
      "Utilized external APIs to fetch quotes and background images.",
    ],
    "Tech Blog": [
      "Developed a full-stack blog application using the MVC paradigm.",
      "Created user authentication and authorization features.",
      "Implemented CRUD operations for blog posts, comments, and user profiles.",
      "Hosted the application on Heroku and utilized JawsDB for database management.",
    ],
    "Personal Portfolio": ["Designed and developed a personal portfolio using React.", "Showcased projects and skills in an interactive and visually appealing manner."],
    "Coming soon...": ["Exciting new project currently under development.", "Stay tuned for updates!"],
  };

  const projectUrls = {
    "KaptionKingdom": "https://supremecosta.github.io/Kaption-Kingdom/",
    "Tech Blog": "https://spereira15-tech-blog-8ddef4fd17d0.herokuapp.com/",
    // Add URLs for other projects when they are hosted
    // "Personal Portfolio": "https://your-portfolio-url.com/",
    // "Coming soon...": "https://coming-soon-project-url.com/",
  };

  return (
    <section id="projects" className="py-5 text-center">
      <h2 className="mt-4">
        <span className="animated-letter">P</span>
        <span className="animated-letter">r</span>
        <span className="animated-letter">o</span>
        <span className="animated-letter">j</span>
        <span className="animated-letter">e</span>
        <span className="animated-letter">c</span>
        <span className="animated-letter">t</span>
        <span className="animated-letter">s</span>
      </h2>
      <div className="container mt-5">
        <div className="row">
          {Object.entries(projectsData).map(([title, description], index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <a href={projectUrls[title]} target="_blank" rel="noopener noreferrer" className="card-a">
                <div className="card border-0 bg-transparent custom-card">
                  <div className="card-body text-white rounded h-100">
                    <h3 className="card-title">{title}</h3>
                    <ul className="list-unstyled">
                      {description.map((descriptionItem, index) => (
                        <li key={index}>{descriptionItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
