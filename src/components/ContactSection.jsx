import React from 'react'
import './ContactSection.css'

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

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
              />
              <label className="contact-consent-text" htmlFor="contact-terms">
                I agree to the{' '}
                <a className="contact-terms-link" href="#">
                  terms &amp; conditions
                </a>
              </label>
            </div>

            <button className="contact-submit" type="submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

