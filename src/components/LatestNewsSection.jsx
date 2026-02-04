import React from 'react'
import './LatestNewsSection.css'

const LatestNewsSection = () => {
  return (
    <section className="latest-news-section" aria-label="Latest news">
      <div className="latest-news-container">
        <div className="latest-news-grid">
          <div className="latest-news-left">
            <div className="latest-news-kicker">Latest News</div>
            <h2 className="latest-news-headline">
              Groundbreaking ceremony for new, low-income, senior housing project in
              Redding
            </h2>
          </div>

          <div className="latest-news-right">
            <h3 className="latest-news-title">
              Groundbreaking Success: New Senior Housing in Redding
            </h3>
            <p className="latest-news-desc">
              Discover how the latest low-income senior housing project in Redding is
              set to transform lives. Read about the groundbreaking ceremony and the
              community&apos;s future prospects.{' '}
              <a className="latest-news-link" href="#" aria-label="Read more news">
                Read more about the groundbreaking ceremony.
              </a>
            </p>

            <img
              className="latest-news-image"
              src="/assets/senior-housing-redding-ca-ground-breaking-ceremony-1024x576.webp"
              alt="Groundbreaking ceremony for a senior housing project in Redding"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNewsSection
