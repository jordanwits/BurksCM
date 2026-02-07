import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './TermsOfServiceHeroSection.css'

const TermsOfServiceHeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        {mobileMenuOpen && (
          <div 
            className="terms-mobile-menu-backdrop" 
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
        <div className="terms-nav-container">
          <div className="terms-nav-logo">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="/assets/BurksLogo.png" 
                alt="Burks Construction Management Logo" 
              />
            </Link>
          </div>
          <button 
            className="terms-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`terms-hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <div className={`terms-nav-right-group ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="terms-nav-links">
              <Link 
                to="/" 
                className="terms-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="terms-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/services" 
                className="terms-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="terms-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
            <div className="terms-nav-phone-section">
              <a href="tel:5303550923" className="terms-nav-phone-button" onClick={() => setMobileMenuOpen(false)}>
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
