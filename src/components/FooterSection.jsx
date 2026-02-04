import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './FooterSection.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const FooterSection = () => {
  const year = new Date().getFullYear()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    // If we're on projects page, navigate to home first, then scroll
    if (location.pathname === '/projects') {
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

  const services = [
    'Program Management',
    'Construction Management',
    'Permitting',
    "Owner's Representation",
    'Inspections',
    'Environmental CEQA',
    'Safety',
    'Erosion Control',
    'Design Team Management',
    'Special Inspections',
    'Owner Contracts',
    'FF&E',
    'Insurance/Fire Claims',
  ]

  const quickLinks = [
    { label: 'Home', path: '/', isRoute: true },
    { label: 'Projects', path: '/projects', isRoute: true },
    { label: 'Services', targetId: 'services', isRoute: false },
    { label: 'Contact Us', path: '/contact', isRoute: true },
  ]

  return (
    <footer className="footer-section" aria-label="Site footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <h3 className="footer-heading footer-brand-heading">
              Build With Burks
              <span className="footer-brand-sub">CM</span>
            </h3>
            <p className="footer-text">Managing Your Project From Start to Finish</p>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-list" aria-label="Services">
              {services.map((service) => (
                <li key={service} className="footer-list-item">
                  <a className="footer-link" href="#">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Office</h3>
            <div className="footer-text footer-stack">
              <div>Redding, CA</div>
              <a className="footer-link" href="tel:15303550923">
                +1 (530) 355-0923
              </a>
              <a className="footer-link" href="mailto:ryan@burkscm.com">
                ryan@burkscm.com
              </a>
              <div className="footer-spacer" />
              <div>Mon - Sat 8:00 - 17:30,</div>
              <div>Sunday - CLOSED</div>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list" aria-label="Quick links">
              {quickLinks.map((link) => (
                <li key={link.label} className="footer-list-item">
                  {link.isRoute ? (
                    <Link 
                      className="footer-link" 
                      to={link.path}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      className="footer-link" 
                      href={`#${link.targetId}`}
                      onClick={(e) => handleSmoothScroll(e, link.targetId)}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <div className="footer-legal">
            <div className="footer-legal-line">
              Copyright © {year} Burks Construction Management
            </div>
            <div className="footer-legal-line">
              <a className="footer-link footer-legal-link" href="#">
                Privacy Policy
              </a>{' '}
              <span className="footer-sep">|</span>{' '}
              <a className="footer-link footer-legal-link" href="#">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="footer-social" aria-label="Social links">
            <a className="footer-social-link" href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a className="footer-social-link" href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a className="footer-social-link" href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection

