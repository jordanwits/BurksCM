import React from 'react'
import './ClientsSection.css'

// Logo files live in: public/assets/
// Update filenames below as needed (paths are from the site root).
const DEFAULT_CLIENT_LOGOS = [
  { src: '/assets/Tesla-tran-logo.webp', alt: 'Tesla' },
  { src: '/assets/Verizon-tran-logo.webp', alt: 'Verizon' },
  { src: '/assets/Rivian-tran-logo.webp', alt: 'Rivian' },
  { src: '/assets/Lucid-Logo-770-x-42-px.webp', alt: 'Lucid' },
  { src: '/assets/Spacex-tran-logo.webp', alt: 'SpaceX' },
]

const ClientsSection = ({
  logos = DEFAULT_CLIENT_LOGOS,
  durationSeconds = 24,
  title = 'Our Clients',
  kicker = 'Trust and Worth',
}) => {
  const safeLogos = Array.isArray(logos)
    ? logos.filter((l) => l && typeof l.src === 'string' && l.src.trim().length > 0)
    : []

  // If no logos configured, don't render a broken/empty section.
  if (safeLogos.length === 0) return null

  const trackLogos = [...safeLogos, ...safeLogos]

  return (
    <section className="clients-section" aria-label="Our clients">
      <div className="clients-container">
        <header className="clients-header">
          <div className="clients-kicker">{kicker}</div>
          <h2 className="clients-title">{title}</h2>
        </header>

        <div
          className="clients-marquee"
          style={{ '--clients-duration': `${durationSeconds}s` }}
        >
          <ul className="clients-sr-only" aria-label="Client list">
            {safeLogos.map((l) => (
              <li key={l.alt || l.src}>{l.alt || l.src}</li>
            ))}
          </ul>

          <div className="clients-track" aria-hidden="true">
            {trackLogos.map((l, idx) => (
              <div className="clients-logo" key={`${l.src}-${idx}`}>
                <img
                  src={l.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Hide missing/broken logos so one bad filename doesn't ruin the strip.
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection

