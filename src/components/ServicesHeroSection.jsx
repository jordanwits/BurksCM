import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ServicesHeroSection.css'

const ServicesHeroSection = () => {
  const navigate = useNavigate()

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    // If we're on services page, navigate to home first, then scroll
    if (window.location.pathname === '/services') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <section className="services-hero-section">
      {/* Background Image */}
      <div className="services-hero-background">
        <img 
          src="/assets/ProjectsHero.webp" 
          alt="Construction site" 
          className="services-hero-image"
        />
        <div className="services-hero-overlay-dark"></div>
        <div className="services-hero-overlay"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="services-hero-nav">
        <div className="services-nav-container">
          <div className="services-nav-logo">
            <Link to="/">
              <img 
                src="/assets/BurksLogo.png" 
                alt="Burks Construction Management Logo" 
              />
            </Link>
          </div>
          <div className="services-nav-right-group">
            <div className="services-nav-links">
              <Link to="/" className="services-nav-link">Home</Link>
              <Link to="/projects" className="services-nav-link">Projects</Link>
              <Link to="/services" className="services-nav-link services-nav-link-active">Services</Link>
              <Link to="/contact" className="services-nav-link">Contact Us</Link>
            </div>
            <div className="services-nav-phone-section">
              <a href="tel:5303550923" className="services-nav-phone-button">
                (530) 355-0923
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="services-hero-content">
        <div className="services-hero-content-container">
          <h1 className="services-hero-title">SERVICES</h1>
        </div>
      </div>
    </section>
  )
}

export default ServicesHeroSection
