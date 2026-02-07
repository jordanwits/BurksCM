import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicyHeroSection.css'

const PrivacyPolicyHeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        {mobileMenuOpen && (
          <div 
            className="privacy-mobile-menu-backdrop" 
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
        <div className="privacy-nav-container">
          <div className="privacy-nav-logo">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="/assets/BurksLogo.png" 
                alt="Burks Construction Management Logo" 
              />
            </Link>
          </div>
          <button 
            className="privacy-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`privacy-hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <div className={`privacy-nav-right-group ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="privacy-nav-links">
              <Link 
                to="/" 
                className="privacy-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="privacy-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/services" 
                className="privacy-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="privacy-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
            <div className="privacy-nav-phone-section">
              <a href="tel:5303550923" className="privacy-nav-phone-button" onClick={() => setMobileMenuOpen(false)}>
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
