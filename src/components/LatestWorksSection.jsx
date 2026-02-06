import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import LightboxGallery from './LightboxGallery'
import './LatestWorksSection.css'

// Generate Prospect House gallery images
const generateProspectHouseImages = () => {
  const images = []
  // Add cover photo first
  images.push('/Prospect House/Prospect-House-Title-Image.jpg')
  // Add all IMG files (01-66, skipping 48 which doesn't exist)
  for (let i = 1; i <= 66; i++) {
    if (i !== 48) {
      images.push(`/Prospect House/IMG-${String(i).padStart(2, '0')}-scaled.jpg`)
    }
  }
  return images
}

// Generate Piper Way gallery images
const generatePiperWayImages = () => {
  const images = []
  // Add cover photo first
  images.push('/Piper Way/PW-Title-Image.png')
  // Add May photos in order
  images.push('/Piper Way/PiperWay-May-scaled.jpg')
  images.push('/Piper Way/PiperWay-May-2-scaled.jpg')
  images.push('/Piper Way/PiperWay-May-3-scaled.jpg')
  images.push('/Piper Way/PiperWay-May-4-scaled.jpg')
  images.push('/Piper Way/PiperWay-May-5-scaled.jpg')
  images.push('/Piper Way/PiperWay-May-6-scaled.jpg')
  // Add all other images
  images.push('/Piper Way/Construction site with a large concrete slab being poured by a green concrete pump truck. Workers in safety gear are scattered around t.jpg')
  images.push('/Piper Way/IMG_4120-rotated.jpg')
  images.push('/Piper Way/IMG_4122-rotated.jpg')
  images.push('/Piper Way/IMG_4290.jpg')
  images.push('/Piper Way/IMG_5997.jpg')
  images.push('/Piper Way/IMG_6483.jpg')
  images.push('/Piper Way/IMG_6555.jpg')
  images.push('/Piper Way/IMG_6557.jpg')
  images.push('/Piper Way/Piper-Way-1-2.jpg')
  return images
}

// Generate Frito Lay RDG gallery images
const generateFritoLayRDGImages = () => {
  const images = []
  // Add cover photo first
  images.push('/Frito Lay-RDG/Frito-Lay-RDG-Title-Image.jpg')
  // Add all other images
  images.push('/Frito Lay-RDG/Frito-Lay-RDG-Construction-metal-structure-front-side-view-scaled.jpg')
  images.push('/Frito Lay-RDG/Frito-Lay-RDG-Construction-metal-structure-front-view-scaled.jpg')
  images.push('/Frito Lay-RDG/Frito-Lay-RDG-Construction-metal-structure-inside-view-scaled.jpg')
  images.push('/Frito Lay-RDG/Frito-Lay-RDG-Construction-metal-structure-side-view-scaled.jpg')
  return images
}

// Generate Evergreen House gallery images
const generateEvergreenHouseImages = () => {
  const images = []
  // Add cover photo first
  images.push('/Evergreen House/Evergreen-House-Title-Image.jpg')
  // Add all other images
  images.push('/Evergreen House/IMG_3251-scaled.jpg')
  images.push('/Evergreen House/IMG_3253-scaled.jpg')
  images.push('/Evergreen House/IMG_3254-scaled.jpg')
  return images
}

// Generate Frito Lay Salinas gallery images
const generateFritoLaySalinasImages = () => {
  const images = []
  // Add cover photo first
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Title-Image.png')
  // Add all other images
  images.push('/Frito Lay-Salinas/a-side-rear-view-of-the-frito-lay-facility-in-salinas.jpg')
  images.push('/Frito Lay-Salinas/a-side-view-of-the-frito-lay-facility-in-salinas.jpg')
  images.push('/Frito Lay-Salinas/close-up-side-view-of-the-frito-lay-facility-in-salinas.jpg')
  images.push('/Frito Lay-Salinas/freshly-completed-landscaping-outside-of-the-frito-lay-facility-in-salinas.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-beginning-sidewalk-work-2-scaled.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-beginning-sidewalk-work-scaled.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-completed-sidewalk.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-excavators-at-work-scaled.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-finished-sidewalk.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-front-side-view.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-piping-hand-hole.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-pooring-sidewalk-concrete.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-side-view-2.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-Side-View.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-sidewalk-building-finishing-touches.jpg')
  images.push('/Frito Lay-Salinas/Frito-Lay-Salinas-Construction-sidewalk-cement-pooring.jpg')
  images.push('/Frito Lay-Salinas/front-view-of-frito-lay-facility-in-salinas.jpg')
  images.push('/Frito Lay-Salinas/landscape-work-outside-of-frito-lay-facility-in-salinas.jpg')
  images.push('/Frito Lay-Salinas/side-view-of-frito-lay-facility-in-salinas.jpg')
  images.push('/Frito Lay-Salinas/view-of-frito-lay-salinas-from-back-of-completed-building.jpg')
  return images
}

const PROSPECT_HOUSE_IMAGES = generateProspectHouseImages()
const PIPER_WAY_IMAGES = generatePiperWayImages()
const FRITO_LAY_RDG_IMAGES = generateFritoLayRDGImages()
const EVERGREEN_HOUSE_IMAGES = generateEvergreenHouseImages()
const FRITO_LAY_SALINAS_IMAGES = generateFritoLaySalinasImages()

const WORKS = [
  {
    id: 'prospect-house',
    title: 'Prospect House',
    location: 'Redding, CA',
    imageSrc: '/Prospect House/Prospect-House-Title-Image.jpg',
    galleryImages: PROSPECT_HOUSE_IMAGES,
    hideOverlay: true,
  },
  {
    id: 'piper-way-senior-housing',
    title: 'Piper Way Senior Housing',
    location: 'Redding, CA',
    imageSrc: '/Piper Way/PW-Title-Image.png',
    galleryImages: PIPER_WAY_IMAGES,
    hideOverlay: true,
  },
  {
    id: 'frito-lay-rdg',
    title: 'Frito Lay RDG',
    location: 'Redding, CA',
    imageSrc: '/Frito Lay-RDG/Frito-Lay-RDG-Title-Image.jpg',
    galleryImages: FRITO_LAY_RDG_IMAGES,
    hideOverlay: true,
  },
  {
    id: 'evergreen-house',
    title: 'Evergreen House',
    location: 'Cottonwood, CA',
    imageSrc: '/Evergreen House/Evergreen-House-Title-Image.jpg',
    galleryImages: EVERGREEN_HOUSE_IMAGES,
    hideOverlay: true,
  },
  {
    id: 'frito-lay-salinas',
    title: 'Frito Lay Salinas',
    location: 'Salinas, CA',
    imageSrc: '/Frito Lay-Salinas/Frito-Lay-Salinas-Title-Image.png',
    galleryImages: FRITO_LAY_SALINAS_IMAGES,
    hideOverlay: true,
  },
]

const LatestWorksSection = ({ showProjectsSubtitle = false, hideCta = false }) => {
  const navigate = useNavigate()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState([])
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const handleWorkClick = (work) => {
    if (work.galleryImages && work.galleryImages.length > 0) {
      setLightboxImages(work.galleryImages)
      setLightboxInitialIndex(0)
      setLightboxOpen(true)
    }
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
                  href="/projects" 
                  aria-label="View projects"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/projects')
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }, 100)
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
                    className={`latest-works-slide ${w.hideOverlay ? 'no-overlay' : ''}`}
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
                    {!w.hideOverlay && (
                      <span className="latest-works-overlay" aria-hidden="true">
                        <span className="latest-works-overlay-title">{w.title}</span>
                        <span className="latest-works-overlay-location">{w.location}</span>
                      </span>
                    )}
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
      <LightboxGallery
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxInitialIndex}
      />
    </section>
  )
}

export default LatestWorksSection

