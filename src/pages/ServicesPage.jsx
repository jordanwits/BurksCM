import React from 'react'
import ServicesHeroSection from '../components/ServicesHeroSection'
import ServicesPageGrid from '../components/ServicesPageGrid'
import FooterSection from '../components/FooterSection'

const ServicesPage = () => {
  return (
    <div className="services-page">
      <ServicesHeroSection />
      <ServicesPageGrid />
      <FooterSection />
    </div>
  )
}

export default ServicesPage
