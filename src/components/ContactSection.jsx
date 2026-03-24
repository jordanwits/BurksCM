import React from 'react'
import { Link } from 'react-router-dom'
import { useWeb3ContactForm } from '../hooks/useWeb3ContactForm'
import './ContactSection.css'

const ContactSection = () => {
  const { status, isSubmitting, handleSubmit } = useWeb3ContactForm('Home page')

  return (
    <section className="contact-section" aria-label="Request more info">
      <div className="contact-container">
        <div className="contact-card">
          <h2 className="contact-title">Request More Info</h2>
          <p className="contact-subtitle">
            Ready to Work Together? Build a project with us!
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              className="contact-input"
              type="text"
              name="firstName"
              placeholder="First Name"
              autoComplete="given-name"
            />
            <input
              className="contact-input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              autoComplete="family-name"
            />
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="Email*"
              autoComplete="email"
              required
            />
            <input
              className="contact-input"
              type="tel"
              name="phone"
              placeholder="Phone*"
              autoComplete="tel"
              required
            />
            <textarea
              className="contact-textarea"
              name="message"
              placeholder="What construction management questions do you have today?"
              rows={3}
            />

            <div className="contact-consent">
              <input
                className="contact-checkbox"
                id="contact-terms"
                type="checkbox"
                name="consent"
                required
              />
              <label className="contact-consent-text" htmlFor="contact-terms">
                I agree to the{' '}
                <Link className="contact-terms-link" to="/terms-of-service">
                  terms &amp; conditions
                </Link>
              </label>
            </div>

            {status && (
              <p
                className={`contact-form-status contact-form-status--${status.type}`}
                role="status"
              >
                {status.text}
              </p>
            )}

            <button className="contact-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING…' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

