import React from "react"

const ConnectifyAdvantages = () => {
  return (
    <section className="hize-advantages">
      <div className="advantages-container">
        <div className="logo-container">
          <img src="logo12.png" alt="Connectify" className="company-logo" />
        </div>

        <div className="advantages-content">
          <div className="advantage-row">
            <span className="advantage-text growth">Pitch Ideas</span>
            <img src="/image5.jpg" alt="" className="profile-img growth-img" />
          </div>

          <div className="advantage-row">
            <img src="/image8.jpg" alt="" className="profile-img talent-img" />
            <span className="advantage-text talent">Hire Talent, Mentor Founders</span>
            <img src="/image9.jpeg" alt="" className="profile-img culture-img" />
          </div>

          <div className="advantage-row">
            <span className="advantage-text wellness">Go Global</span>
            <img src="/image6.jpg" alt="" className="profile-img" />
          </div>
          <button className="explore-btn">Explore Connectify Advantages</button>
        </div>
      </div>
    </section>
  )
}

export default ConnectifyAdvantages

