import React from "react";

const Contact = () => {
  const contactData = {
    "E-mail": ["simonpereira15@hotmail.com"],
    "Phone": ["+1 (305) 987-3563"],
  };

  return (
    <section id="contact" className="py-5 text-center">
      <h2 className="mt-4">
        <span className="animated-letter">C</span>
        <span className="animated-letter">o</span>
        <span className="animated-letter">n</span>
        <span className="animated-letter">t</span>
        <span className="animated-letter">a</span>
        <span className="animated-letter">c</span>
        <span className="animated-letter">t</span>
      </h2>
      <div className="container mt-5">
        <div className="row justify-content-center"> {/* Add justify-content-center class here */}
          {Object.entries(contactData).map(([category, info], index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card border-0 bg-transparent custom-card">
                <div className="card-body text-white rounded h-100">
                  <h3 className="card-title">{category}</h3>
                  <ul className="list-unstyled">
                    {info.map((contactInfo, index) => (
                      <li key={index}>{contactInfo}</li>
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

export default Contact;
