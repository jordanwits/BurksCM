import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './LatestWorksSection.css'

const WORKS = [
  {
    id: 'prospect-house',
    title: 'Prospect House',
    location: 'Redding, CA',
    imageSrc: '/assets/Program-Management.webp',
  },
  {
    id: 'piper-way-senior-housing',
    title: 'Piper Way Senior Housing',
    location: 'Redding, CA',
    imageSrc: '/assets/Construction-Management.webp',
  },
  {
    id: 'frito-lay-rdg',
    title: 'Frito Lay RDG',
    location: 'Redding, CA',
    imageSrc: '/assets/Permitting.webp',
  },
  {
    id: 'evergreen-house',
    title: 'Evergreen House',
    location: 'Cottonwood, CA',
    imageSrc: '/assets/Owners-Representation.webp',
  },
  {
    id: 'frito-lay-salinas',
    title: 'Frito Lay Salinas',
    location: 'Salinas, CA',
    imageSrc: '/assets/Inspections.webp',
  },
]

const LatestWorksSection = ({ showProjectsSubtitle = false, hideCta = false }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  })

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const handleWorkClick = (work) => {
    // TODO: Open image gallery carousel for this work (coming next)
    void work
  }

  return (
    <section className="latest-works-section" aria-label="Our latest works">
      <div className="latest-works-container">
        <div className="latest-works-header">
          {showProjectsSubtitle ? (
            <div className="latest-works-header-wrapper">
              <div className="latest-works-kicker">Our Projects</div>
              <h2 className="latest-works-title">Latest Works</h2>
            </div>
          ) : (
            <>
              <h2 className="latest-works-title">Our Latest Works</h2>
              {!hideCta && (
                <a 
                  className="latest-works-cta" 
                  href="#projects" 
                  aria-label="View projects"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('projects')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                >
                  VIEW PROJECTS
                </a>
              )}
            </>
          )}
        </div>

        <div className="latest-works-carousel-wrapper">
          <button
            type="button"
            className="latest-works-arrow latest-works-arrow-left"
            onClick={scrollPrev}
            aria-label="Scroll carousel left"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="latest-works-embla" aria-label="Latest works carousel">
            <div className="latest-works-embla-viewport" ref={emblaRef}>
              <div className="latest-works-embla-container" role="list">
                {WORKS.map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    className="latest-works-slide"
                    onClick={() => handleWorkClick(w)}
                    aria-label={`Open gallery for ${w.title} in ${w.location}`}
                    role="listitem"
                  >
                    <img
                      className="latest-works-image"
                      src={w.imageSrc}
                      alt={`${w.title} in ${w.location}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="latest-works-overlay" aria-hidden="true">
                      <span className="latest-works-overlay-title">{w.title}</span>
                      <span className="latest-works-overlay-location">{w.location}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="latest-works-arrow latest-works-arrow-right"
            onClick={scrollNext}
            aria-label="Scroll carousel right"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LatestWorksSection

