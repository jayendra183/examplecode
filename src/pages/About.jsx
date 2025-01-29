// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <main className="about-page">
      <div className="page-container">
        <h1 className="page-title">About Us</h1>
        <div className="about-content">
          <div className="about-image">
            <img src="/about-team.jpg" alt="Our Team" />
          </div>
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              At Hize, we are dedicated to transforming businesses through expert human resource consulting. 
              Our team of experienced professionals brings together diverse expertise in organizational 
              development, talent management, and business strategy.
            </p>
            <h2>Our Mission</h2>
            <p>
              We strive to empower organizations by optimizing their most valuable asset - their people. 
              Through innovative solutions and strategic guidance, we help businesses build stronger teams 
              and achieve sustainable growth.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Clients Served</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;