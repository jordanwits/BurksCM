import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './LightboxGallery.css'

const LightboxGallery = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: initialIndex,
    align: 'center',
    skipSnaps: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(initialIndex)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi && isOpen) {
      emblaApi.reInit()
      emblaApi.scrollTo(initialIndex, false)
    }
  }, [emblaApi, isOpen, initialIndex])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleArrowKeys = (e) => {
      if (e.key === 'ArrowLeft') {
        scrollPrev()
      } else if (e.key === 'ArrowRight') {
        scrollNext()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('keydown', handleArrowKeys)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleArrowKeys)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, scrollPrev, scrollNext])

  if (!isOpen || !images || images.length === 0) return null

  return (
    <div className="lightbox-overlay" onClick={onClose} aria-label="Close gallery">
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close gallery"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          className="lightbox-arrow lightbox-arrow-left"
          onClick={scrollPrev}
          aria-label="Previous image"
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

        <div className="lightbox-embla">
          <div className="lightbox-embla-viewport" ref={emblaRef}>
            <div className="lightbox-embla-container">
              {images.map((imageSrc, index) => (
                <div key={index} className="lightbox-slide">
                  <img
                    src={imageSrc}
                    alt={`Gallery image ${index + 1}`}
                    className="lightbox-image"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="lightbox-arrow lightbox-arrow-right"
          onClick={scrollNext}
          aria-label="Next image"
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

        <div className="lightbox-counter">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

export default LightboxGallery
