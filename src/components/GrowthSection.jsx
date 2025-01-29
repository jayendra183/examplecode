import React from "react"

const GrowthSection = () => {
  return (
    <section className="growth-section">
      <div className="growth-container">
        <div className="growth-content">
          <svg className="curved-arrow" viewBox="0 0 481.42 418.12">
            <path
              d="m464.42,1c-199.3.2-360.8,162-360.6,361.4l-76.1-76.1c-6.6-5.9-16.7-5.4-22.6,1.2-5.5,6.1-5.5,15.4,0,21.5l103.4,103.4c6.2,6.3,16.4,6.3,22.6,0h0l103.4-103.4c6.3-6.3,6.3-16.4,0-22.6s-16.4-6.3-22.6,0h0l-76.1,76.1c-.2-181.8,147-329.3,328.6-329.5,8.8,0,16-7.2,16-16s-7.1-16-16-16Z"
              className="arrow-path"
            />
          </svg>

          <h2 className="growth-title">
            Hize helps businesses
            <br />
            accelerate their growth
          </h2>

          <p className="growth-subtitle">
            by aligning their people to
            <br />
            their business strategy.
          </p>

          <p className="growth-question">
            Are your people your company's greatest asset or biggest barrier to growth?
          </p>

          <button className="solutions-btn">Our solutions</button>
        </div>

        <div className="growth-image-container">
          <img
            src="image7.png"
            alt="Professional in white shirt"
            className="growth-image"
          />
          <div className="logo-overlay">
            <svg className="hize-logo" viewBox="0 0 50 50" width="80" height="80">
              <path d="M25,0 L50,25 L25,50 L0,25 Z" fill="#00A99D" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrowthSection