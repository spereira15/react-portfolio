import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-light py-5 text-center">
      <h2 className="mb-4">Projects</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src="/path-to-your-project-image.jpg" alt="Project 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">
                  Description of Project 1.
                </p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src="/path-to-your-project-image.jpg" alt="Project 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">
                  Description of Project 2.
                </p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
