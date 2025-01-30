import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { ChevronRight } from "lucide-react"

const Example = () => {
  return (
    <div className="container">
      <HorizontalScrollCarousel />
    </div>
  )
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  const x = useTransform(scrollYProgress, [0, 1.5], ["0%", "-50%"])

  return (
    <section ref={targetRef} className="carousel-section">
      <div className="scroll-indicator">
        <motion.div 
          className="scroll-progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
      <div className="carousel-container">
        <motion.div style={{ x }} className="slides-wrapper">
          {/* Slide 1 */}
          <div className="slide slide-1">
            <div className="slide-content">
              <div className="breadcrumb">
                <ChevronRight className="breadcrumb-icon" />
                Connectify
              </div>
              <div className="content">
                <div className="left-content">
                  <h1>
                    <span className="text-teal">Why</span> <span className="text-copper">Connectify?</span>
                  </h1>
                  <h2>Connectify: Where Innovation Meets Opportunity
                  </h2>
                  <div className="text-content">
                    <p>
                    Only accessible through professional email IDs and LinkedIn login, ensuring a credible and secure environment.
                    </p>
                    <p>Empower your teams, enhance their skills, and foster a culture of growth and excellence.</p>
                  </div>
                </div>
                <div className="right-content">
                  <div className="metrics-and-images">
                    <motion.div 
                      className="image-circle"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img 
                        src="image6.jpg" 
                        alt="Consulting benefits illustration 1"
                        className="benefits-image"
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="metric profit"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="metric-circle">
                        <span className="metric-value">24%</span>
                        <span className="metric-label">Profit</span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="metric roi"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="metric-circle">
                        <span className="metric-value">353%</span>
                        <span className="metric-label">ROI</span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="image-circle"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img 
                        src="image5.jpg" 
                        alt="Consulting benefits illustration 2"
                        className="benefits-image"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide slide-2">
            <div className="slide-content">
              <div className="headers">
                <span className="header-left">
                  <ChevronRight className="header-icon" />
                  Why did I do it?
                </span>
                <span className="header-right">
                  <ChevronRight className="header-icon" />
                  Advantages
                </span>
              </div>
              <div className="main-content">
                <div className="text-content">
                  <h2>
                    Empower your teams, improve their skills and foster a culture of growth and excellence.{" "}
                    <span className="text-teal">Benefits:</span>
                  </h2>
                  <div className="benefits-list">
                    {[
                      "Exclusive and Verified Network",
                      "Real-Time, Face-to-Face Connections",
                      "Tailored Matches for Maximum Impact",
                      "Gamified Experience for Continued Engagement",
                      "Data-Driven Insights for Smarter Networking"
                    ].map((benefit, index) => (
                      <motion.div 
                        key={index}
                        className="benefit-item"
                        // whileHover={{ x: 10 }}
                        // transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="number">{index + 1}</span> {benefit}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="image-container">
                  <motion.img 
                    src="image.png" 
                    alt="Professional"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Example