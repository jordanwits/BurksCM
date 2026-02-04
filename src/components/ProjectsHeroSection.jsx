import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ProjectsHeroSection.css'

const ProjectsHeroSection = () => {
  const navigate = useNavigate()

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
        <div className="projects-nav-container">
          <div className="projects-nav-logo">
            <Link to="/">
              <img 
                src="/assets/BurksLogo.png" 
                alt="Burks Construction Management Logo" 
              />
            </Link>
          </div>
          <div className="projects-nav-right-group">
            <div className="projects-nav-links">
              <Link to="/" className="projects-nav-link">Home</Link>
              <Link to="/projects" className="projects-nav-link projects-nav-link-active">Projects</Link>
              <Link to="/services" className="projects-nav-link">Services</Link>
              <Link to="/contact" className="projects-nav-link">Contact Us</Link>
            </div>
            <div className="projects-nav-phone-section">
              <a href="tel:5303550923" className="projects-nav-phone-button">
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
