import React from 'react'
import './ContactDetailsSection.css'

const ContactDetailsSection = () => {
  const handleAppointmentClick = (e) => {
    e.preventDefault()
    const appointmentSection = document.getElementById('appointment')
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="contact-details-section">
      <div className="contact-details-container">
        <h2 className="contact-details-heading">Contact Details</h2>
        
        <div className="contact-details-content">
          {/* Left Column - Contact Information */}
          <div className="contact-info-column">
            <h3 className="contact-office-name">Redding Head Office</h3>
            
            <div className="contact-info-item">
              <span className="contact-info-label">Location:</span>
              <span className="contact-info-value">Redding, CA</span>
            </div>
            
            <div className="contact-info-item">
              <span className="contact-info-label">Phone:</span>
              <span className="contact-info-value">+1 (530) 355-0923</span>
            </div>
            
            <div className="contact-info-item">
              <span className="contact-info-label">Email:</span>
              <span className="contact-info-value">ryan@burkscm.com</span>
            </div>
            
            <a href="#appointment" className="contact-appointment-button" onClick={handleAppointmentClick}>
              GET APPOINTMENT
            </a>
          </div>
          
          {/* Right Column - Map */}
          <div className="contact-map-column">
            <iframe
              src="https://www.google.com/maps?q=Redding,+CA&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Burks Construction Management - Redding, CA Location"
              className="contact-map-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactDetailsSection
