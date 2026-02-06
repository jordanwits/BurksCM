import React, { useEffect } from 'react'
import TermsOfServiceHeroSection from '../components/TermsOfServiceHeroSection'
import TermsOfServiceContent from '../components/TermsOfServiceContent'
import FooterSection from '../components/FooterSection'

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="terms-of-service-page">
      <TermsOfServiceHeroSection />
      <TermsOfServiceContent />
      <FooterSection />
    </div>
  )
}

export default TermsOfServicePage
