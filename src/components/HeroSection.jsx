import React from "react"

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <div className="title-row">
            <img
              src="image1.jpg"
              alt=""
              className="profile-img"
            />
            <span>Revolutionizing Professional</span>
            <img src="/image2.jpg" alt="" className="profile-img" />
          </div>
          <div className="title-row">
            <span>Networking</span>
            <img src="/image3.jpg" alt="" className="profile-img" />
          </div>
        </h1>

        <p className="hero-description">Where LinkedIn Meets Omegle: Meet Professionals in Real-Time via Video Chat</p>

        <button className="schedule-btn">Schedule a Free Consultation!</button>
      </div>
    </div>
  )
}

export default HeroSection

