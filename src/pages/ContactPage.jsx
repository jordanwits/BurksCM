import React from 'react'
import ContactHeroSection from '../components/ContactHeroSection'
import ContactDetailsSection from '../components/ContactDetailsSection'
import GetInTouchSection from '../components/GetInTouchSection'
import FooterSection from '../components/FooterSection'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactHeroSection />
      <ContactDetailsSection />
      <GetInTouchSection />
      <FooterSection />
    </div>
  )
}

export default ContactPage
