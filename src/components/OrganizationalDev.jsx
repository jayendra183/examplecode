import React from 'react';

const OrganizationalDevelopment = () => {
  return (
    <section className="od-section">
      <div className="od-container">
        <div className="od-content-wrapper">
          <div className="od-text-content">
            <div className="od-title-wrapper">
              <h1 className="od-title">Organizational</h1>
              <h2 className="od-subtitle">Development</h2>
            </div>
            <p className="od-description">
              Consulting for organizations from an organizational development expert in creating and implementing programs and initiatives that support employee growth, development, and well-being.
            </p>
            <a href="/solutions" className="od-solutions-button">
              Our solutions
            </a>
          </div>

          <div className="od-image-content">
            <div className="od-logo-wrapper">
              <img
                src="good.png"
                alt="Logo"
                className="od-logo"
              />
            </div>
            <div className="od-main-image-wrapper">
              <img
                src="image10.png"
                alt="Professional workspace"
                className="od-main-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalDevelopment;