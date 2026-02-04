import React from 'react'
import './GetInTouchSection.css'

const GetInTouchSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="get-in-touch-section" aria-label="Get in touch">
      <div className="get-in-touch-container">
        <div className="get-in-touch-divider" />

        <div className="get-in-touch-grid">
          <div className="get-in-touch-left">
            <h3 className="get-in-touch-title">Get in Touch</h3>
            <p className="get-in-touch-text">
              Interested in our services or need more information? Fill out your contact details here, and we&apos;ll get back to you as soon as possible!
            </p>
          </div>

          <div className="get-in-touch-right">
            <form className="get-in-touch-form" onSubmit={handleSubmit}>
              <div className="get-in-touch-row">
                <input
                  className="get-in-touch-input"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  autoComplete="given-name"
                />
                <input
                  className="get-in-touch-input"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  autoComplete="family-name"
                />
              </div>
              <div className="get-in-touch-row">
                <input
                  className="get-in-touch-input"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  autoComplete="email"
                  required
                />
                <input
                  className="get-in-touch-input"
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  autoComplete="tel"
                  required
                />
              </div>
              <textarea
                className="get-in-touch-textarea"
                name="message"
                placeholder="What construction management questions do you have today?"
                rows={4}
              />

              <div className="get-in-touch-consent">
                <input
                  className="get-in-touch-checkbox"
                  id="get-in-touch-terms"
                  type="checkbox"
                />
                <label className="get-in-touch-consent-text" htmlFor="get-in-touch-terms">
                  I agree to{' '}
                  <a className="get-in-touch-terms-link" href="#">
                    terms &amp; conditions
                  </a>{' '}
                  provided by Burks Construction Management. By providing my contact information, I agree to receive messages from the business.
                </label>
              </div>

              <button className="get-in-touch-submit" type="submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouchSection

