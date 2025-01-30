import React from "react"


const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-subtitle">Connectify</h2>

        <div className="content-wrapper">
          <div className="top-row">
            <img src="image1.jpg" alt="Team member" className="profile-image" />
            <h1 className="main-heading">Talk to us</h1>
            <img src="image2.jpg" alt="Team member" className="profile-image" />
          </div>

          <div className="bottom-row">
            <span className="transform-text">&amp; transform</span>
            <img src="image3.jpg" alt="Team member" className="profile-image" />
            <span className="journey-text">your journey</span>
          </div>
        </div>

        <button className="contact-button">Contact Us</button>
      </div>
    </section>
  )
}

export default ContactSection