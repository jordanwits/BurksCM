import React from 'react'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/ServicesSection'
import LatestNewsSection from '../components/LatestNewsSection'
import SustainabilitySection from '../components/SustainabilitySection'
import InvolvementSection from '../components/InvolvementSection'
import LatestWorksSection from '../components/LatestWorksSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

const HomePage = () => {
  return (
    <div className="App">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <LatestNewsSection />
      <SustainabilitySection />
      <InvolvementSection />
      <LatestWorksSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default HomePage
