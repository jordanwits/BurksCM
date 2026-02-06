import React from 'react'
import { Link } from 'react-router-dom'
import './TermsOfServiceHeroSection.css'

const TermsOfServiceHeroSection = () => {
  return (
    <section className="terms-hero-section">
      {/* Background Image */}
      <div className="terms-hero-background">
        <img 
          src="/assets/ProjectsHero.webp" 
          alt="Construction site" 
          className="terms-hero-image"
        />
        <div className="terms-hero-overlay-dark"></div>
        <div className="terms-hero-overlay"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="terms-hero-nav">
        <div className="terms-nav-container">
          <div className="terms-nav-logo">
            <Link to="/">
              <img 
                src="/assets/BurksLogo.png" 
                alt="Burks Construction Management Logo" 
              />
            </Link>
          </div>
          <div className="terms-nav-right-group">
            <div className="terms-nav-links">
              <Link to="/" className="terms-nav-link">Home</Link>
              <Link to="/projects" className="terms-nav-link">Projects</Link>
              <Link to="/services" className="terms-nav-link">Services</Link>
              <Link to="/contact" className="terms-nav-link">Contact Us</Link>
            </div>
            <div className="terms-nav-phone-section">
              <a href="tel:5303550923" className="terms-nav-phone-button">
                (530) 355-0923
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="terms-hero-content">
        <div className="terms-hero-content-container">
          <h1 className="terms-hero-title">TERMS OF SERVICE</h1>
        </div>
      </div>
    </section>
  )
}

export default TermsOfServiceHeroSection
