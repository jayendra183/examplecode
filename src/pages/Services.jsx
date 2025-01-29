// src/pages/Services
import React from 'react';

const Services = () => {
  return (
    <main className="services-page">
      <div className="page-container">
        <h1 className="page-title">Our Services</h1>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3>Strategic HR Consulting</h3>
            <p>
              Comprehensive HR strategy development aligned with your business objectives.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">👥</div>
            <h3>Talent Management</h3>
            <p>
              End-to-end talent acquisition, development, and retention strategies.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Performance Management</h3>
            <p>
              Design and implementation of effective performance management systems.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>Organizational Development</h3>
            <p>
              Culture transformation and change management solutions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;