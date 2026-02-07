import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ProjectsHeroSection.css'

const ProjectsHeroSection = () => {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    // If we're on projects page, navigate to home first, then scroll
    if (window.location.pathname === '/projects') {
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
    <section className="projects-hero-section">
      {/* Background Image */}
      <div className="projects-hero-background">
        <img 
          src="/assets/ProjectsHero.webp" 
          alt="Construction site" 
          className="projects-hero-image"
        />
        <div className="projects-hero-overlay-dark"></div>
        <div className="projects-hero-overlay"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="projects-hero-nav">
        {mobileMenuOpen && (
          <div 
            className="projects-mobile-menu-backdrop" 
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
        <div className="projects-nav-container">
          <div className="projects-nav-logo">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="/assets/BurksLogo.png" 
                alt="Burks Construction Management Logo" 
              />
            </Link>
          </div>
          <button 
            className="projects-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`projects-hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <div className={`projects-nav-right-group ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="projects-nav-links">
              <Link 
                to="/" 
                className="projects-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="projects-nav-link projects-nav-link-active"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/services" 
                className="projects-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="projects-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
            <div className="projects-nav-phone-section">
              <a href="tel:5303550923" className="projects-nav-phone-button" onClick={() => setMobileMenuOpen(false)}>
                (530) 355-0923
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="projects-hero-content">
        <div className="projects-hero-content-container">
          <h1 className="projects-hero-title">PROJECTS</h1>
        </div>
      </div>
    </section>
  )
}

export default ProjectsHeroSection
