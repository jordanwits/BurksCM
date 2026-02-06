import React, { useEffect } from 'react'
import PrivacyPolicyHeroSection from '../components/PrivacyPolicyHeroSection'
import PrivacyPolicyContent from '../components/PrivacyPolicyContent'
import FooterSection from '../components/FooterSection'

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="privacy-policy-page">
      <PrivacyPolicyHeroSection />
      <PrivacyPolicyContent />
      <FooterSection />
    </div>
  )
}

export default PrivacyPolicyPage
