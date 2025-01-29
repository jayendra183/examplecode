// "use client"
import React from "react"
import HeroSection from "../components/HeroSection"
import GrowthSection from "../components/GrowthSection"
import ConnectifyAdvantages from "../components/HizeAdvantages"
import OrganizationalDev from "../components/OrganizationalDev"
import ServicesSection from "../components/ServicesSection"
import ContactSection from "../components/RequestMoreInfo"
import HizeSlides from "../components/TwoSlideComponent"
import "../styles/fullscreen-slider.css"
import "../styles/services-section.css"
import "../styles/growth-section.css"
import "../styles/hize-advantages.css"
import "../styles/organizational-dev.css"
import "../styles/request-more-info.css"


const Home = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <GrowthSection />
      <ConnectifyAdvantages />
      <OrganizationalDev />
      <ServicesSection />
      <HizeSlides />
      <ContactSection />
    </main>
  )
}

export default Home

