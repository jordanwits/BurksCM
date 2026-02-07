import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ServicesSection.css'

// Map service titles to image filenames
const getServiceImage = (title) => {
  const imageMap = {
    'Program Management': '/assets/Program-Management.webp',
    'Construction Management': '/assets/Construction-Management.webp',
    'Permitting': '/assets/Permitting.webp',
    "Owner's Representation": '/assets/Owners-Representation.webp',
    'Inspections': '/assets/Inspections.webp',
    'Environmentals & CEQA': '/assets/Special-Inspections.webp', // Using Special Inspections as placeholder
    'Safety': '/assets/Safety.webp',
    'Erosion Control': '/assets/Erosion-Control.webp',
    'Design Team Management': '/assets/Design-Team-Management.webp',
    'Special Inspections': '/assets/Special-Inspections.webp',
    'Owner Contracts': '/assets/Owner-Contracts.webp',
    'FF&E': '/assets/FFE.webp',
    'Insurance/Fire Claims': '/assets/InsuranceFire-Claims-Service-Image.webp',
  }
  return imageMap[title] || '/assets/Program-Management.webp' // Fallback
}

const SERVICES = [
  {
    title: 'Program Management',
    description:
      'We handle everything from getting permits to representing you, making sure your project runs smoothly from start to finish.',
  },
  {
    title: 'Construction Management',
    description:
      'We oversee your entire construction project, focusing on keeping things on time and within your budget.',
  },
  {
    title: 'Permitting',
    description:
      "Dedicated representation of owners' interests, ensuring that all construction projects align with their vision and standards.",
  },
  {
    title: "Owner's Representation",
    description:
      "Represents owners' interests, ensuring projects meet their requirements and standards.",
  },
  {
    title: 'Inspections',
    description:
      'Rigorous construction inspection conducted to uphold the highest standards of quality and safety.',
  },
  {
    title: 'Environmentals & CEQA',
    description:
      'Specialized management of environmental compliance under the California Environmental Quality Act, aiding engagements with water boards and wildlife conservation.',
  },
  {
    title: 'Safety',
    description:
      'Robust construction safety protocols to create a secure and risk-free work environment.',
  },
  {
    title: 'Erosion Control',
    description:
      'Effective strategies and solutions for erosion control, crucial for maintaining site integrity and environmental compliance.',
  },
  {
    title: 'Design Team Management',
    description:
      'Strategic coordination with architects, engineers, and consultants to ensure top-tier design and structural integrity.',
  },
  {
    title: 'Special Inspections',
    description:
      'Targeted special inspections to address specific compliance.',
  },
  {
    title: 'Owner Contracts',
    description:
      'Meticulous management of owner contracts, fostering clear communications and precise contractual fulfillment.',
  },
  {
    title: 'FF&E',
    description:
      'Management of all aspects of furniture, fixtures, and equipment, from selection to installation, enhancing project aesthetics and functionality.',
  },
  {
    title: 'Insurance/Fire Claims',
    description:
      'Coming alongside you after a natural disaster or wildfire. We are here to help you with every step of the process.',
  },
]

const ServicesSection = () => {
  const navigate = useNavigate()

  const handleViewAllClick = (e) => {
    e.preventDefault()
    // Navigate to services page
    navigate('/services')
    // Scroll to top of page after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <section id="services" className="services-section" aria-label="Services we offer">
      <div className="services-container">
        <div className="services-header">
          <div className="services-header-left">
            <div className="services-kicker">Build Your Dream</div>
            <div className="services-title">Services We Offer</div>
          </div>

          <a className="services-view-all" href="/services" onClick={handleViewAllClick}>
            VIEW ALL
          </a>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="service-card">
              <img
                className="service-image"
                src={getServiceImage(s.title)}
                alt={s.title}
              />
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
