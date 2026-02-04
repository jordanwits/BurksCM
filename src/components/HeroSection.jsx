import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'
  const [videoLoaded, setVideoLoaded] = useState(false)

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleServicesClick = (e) => {
    e.preventDefault()
    if (isHomePage) {
      handleSmoothScroll(e, 'services')
    } else {
      navigate('/services')
    }
  }

  const handleVideoLoad = () => {
    // Add a small delay to ensure video content is ready before hiding fallback
    setTimeout(() => {
      setVideoLoaded(true)
    }, 500) // Wait 500ms after iframe loads to ensure video is playing
  }

  // Fallback timeout in case iframe onLoad doesn't fire
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVideoLoaded(true)
    }, 5000) // Hide fallback after 5 seconds max

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="home" className="hero-section">
      {/* Video Background */}
      <div className="hero-background">
        {/* Fallback Image */}
        <img 
          src="/assets/ProjectsHero.webp" 
          alt="Construction site" 
          className={`hero-fallback-image ${videoLoaded ? 'fade-out' : ''}`}
        />
        <iframe
          src="https://player.vimeo.com/video/1071096071?h=acd7363a02&muted=1&autoplay=1&loop=1&background=1&controls=0"
          className={`hero-video ${videoLoaded ? 'video-loaded' : ''}`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Hero Background Video"
          onLoad={handleVideoLoad}
        ></iframe>
        <div className="hero-overlay-dark"></div>
        <div className="hero-overlay"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="hero-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <img 
                src="/assets/BurksLogo.png" 
                alt="Burks Construction Management Logo" 
              />
            </Link>
          </div>
          <div className="nav-right-group">
            <div className="nav-links">
              <Link to="/" className={`nav-link ${isHomePage ? 'active' : ''}`}>Home</Link>
              <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
              <a href={isHomePage ? "#services" : "/services"} className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={handleServicesClick}>Services</a>
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
            </div>
            <div className="nav-phone-section">
              <a href="tel:5303550923" className="nav-phone-button">
                (530) 355-0923
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-content-container">
          <h1 className="hero-headline-1">Managing Your Project From Start to Finish</h1>
          <h2 className="hero-headline-2">
            <span className="hero-headline-burks">Burks</span>{' '}
            <span className="hero-headline-rest">Construction Management</span>
          </h2>
          <p className="hero-paragraph">
            With nearly a decade of experience, Burks Construction & Forestry Management specializes in overseeing large scale projects that enhance sustainability and drive development.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">OUR SERVICES</button>
            <button className="btn-secondary">CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
