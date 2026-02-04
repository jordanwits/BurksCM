import React from 'react'
import './InvolvementSection.css'

const CARDS = [
  {
    title: 'Redding Rotary',
    description:
      "Redding's Rotary Club unites leaders committed to ethical service, community betterment, and global humanitarian efforts.",
    href: '#',
  },
  {
    title: 'GB Blue Collar Scholarship',
    description:
      'The Gary Burks Memorial Scholarship honors a legacy of hard work and leadership, investing in Northern California’s future blue-collar professionals.',
    href: '#',
  },
  {
    title:
      'Shasta Collage Board of Advisors: Construction/Heavy Equipment/Logging Programs',
    description: 'A beacon of higher education in California.',
    href: '#',
  },
]

const InvolvementSection = () => {
  return (
    <section className="involvement-section" aria-label="Involvement of Burks CM">
      <div className="involvement-container">
        <div className="involvement-header">
          <div className="involvement-header-left">
            <div className="involvement-kicker">Involvement of Burks CM</div>
            <h2 className="involvement-title">Transforming Communities in Redding</h2>
          </div>

          <p className="involvement-intro">
            Burks Construction Management is passionate about improving Redding,
            making a real difference in our community.
          </p>
        </div>

        <div className="involvement-cards" role="list">
          {CARDS.map((c) => (
            <article key={c.title} className="involvement-card" role="listitem">
              <h3 className="involvement-card-title">{c.title}</h3>
              <p className="involvement-card-desc">{c.description}</p>
              <a className="involvement-card-link" href={c.href}>
                LEARN MORE
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InvolvementSection
