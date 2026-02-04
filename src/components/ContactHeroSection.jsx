import React from 'react'
import { Link } from 'react-router-dom'
import './ContactHeroSection.css'

const ContactHeroSection = () => {

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
        <div className="contact-nav-container">
          <div className="contact-nav-logo">
            <Link to="/">
              <img 
                src="/assets/BurksLogo.png" 
                alt="Burks Construction Management Logo" 
              />
            </Link>
          </div>
          <div className="contact-nav-right-group">
            <div className="contact-nav-links">
              <Link to="/" className="contact-nav-link">Home</Link>
              <Link to="/projects" className="contact-nav-link">Projects</Link>
              <Link to="/services" className="contact-nav-link">Services</Link>
              <Link to="/contact" className="contact-nav-link contact-nav-link-active">Contact Us</Link>
            </div>
            <div className="contact-nav-phone-section">
              <a href="tel:5303550923" className="contact-nav-phone-button">
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
