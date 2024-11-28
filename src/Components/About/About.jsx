import React from 'react';
import '../About/About.css';

function About({det}) {
  return (
    <div>
      <div className="content-container">
        <h2 className="content-heading">{det.h}</h2>
        <div className="content-body">
          <p className="content-paragraph">{det.par}</p>
          <img src={det.image} alt="Content" className="content-image" />
        </div>
      </div>
    </div>
  );
}

export default About;
