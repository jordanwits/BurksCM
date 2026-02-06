import React from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicyHeroSection.css'

const PrivacyPolicyHeroSection = () => {
  return (
    <section className="privacy-hero-section">
      {/* Background Image */}
      <div className="privacy-hero-background">
        <img 
          src="/assets/ProjectsHero.webp" 
          alt="Construction site" 
          className="privacy-hero-image"
        />
        <div className="privacy-hero-overlay-dark"></div>
        <div className="privacy-hero-overlay"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="privacy-hero-nav">
        <div className="privacy-nav-container">
          <div className="privacy-nav-logo">
            <Link to="/">
              <img 
                src="/assets/BurksLogo.png" 
                alt="Burks Construction Management Logo" 
              />
            </Link>
          </div>
          <div className="privacy-nav-right-group">
            <div className="privacy-nav-links">
              <Link to="/" className="privacy-nav-link">Home</Link>
              <Link to="/projects" className="privacy-nav-link">Projects</Link>
              <Link to="/services" className="privacy-nav-link">Services</Link>
              <Link to="/contact" className="privacy-nav-link">Contact Us</Link>
            </div>
            <div className="privacy-nav-phone-section">
              <a href="tel:5303550923" className="privacy-nav-phone-button">
                (530) 355-0923
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="privacy-hero-content">
        <div className="privacy-hero-content-container">
          <h1 className="privacy-hero-title">PRIVACY POLICY</h1>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicyHeroSection
