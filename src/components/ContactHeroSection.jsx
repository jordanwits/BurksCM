import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ContactHeroSection.css'

const ContactHeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="contact-hero-section">
      {/* Background Image */}
      <div className="contact-hero-background">
        <img 
          src="/assets/ProjectsHero.webp" 
          alt="Construction site" 
          className="contact-hero-image"
        />
        <div className="contact-hero-overlay-dark"></div>
        <div className="contact-hero-overlay"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="contact-hero-nav">
        {mobileMenuOpen && (
          <div 
            className="contact-mobile-menu-backdrop" 
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
        <div className="contact-nav-container">
          <div className="contact-nav-logo">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="/assets/BurksLogo.png" 
                alt="Burks Construction Management Logo" 
              />
            </Link>
          </div>
          <button 
            className="contact-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`contact-hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <div className={`contact-nav-right-group ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="contact-nav-links">
              <Link 
                to="/" 
                className="contact-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="contact-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/services" 
                className="contact-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="contact-nav-link contact-nav-link-active"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
            <div className="contact-nav-phone-section">
              <a href="tel:5303550923" className="contact-nav-phone-button" onClick={() => setMobileMenuOpen(false)}>
                (530) 355-0923
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="contact-hero-content">
        <div className="contact-hero-content-container">
          <h1 className="contact-hero-title">CONTACT US</h1>
        </div>
      </div>
    </section>
  )
}

export default ContactHeroSection
