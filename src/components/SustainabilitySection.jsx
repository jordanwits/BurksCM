import React from 'react'
import './SustainabilitySection.css'
import { FaRecycle } from 'react-icons/fa'
import { GiSprout } from 'react-icons/gi'
import { FaDesktop } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'

const SustainabilitySection = () => {
  return (
    <section className="sustainability-section" aria-label="Sustainability and best practices">
      <div className="sustainability-grid">
        <div className="sustainability-left">
          <div className="sustainability-left-content">
            <div className="sustainability-kicker">Sustainability</div>
            <h2 className="sustainability-heading">
              Committed To Keep People Healthy & Safe
            </h2>
            <p className="sustainability-paragraph">
              At Burks, our commitment extends to ensuring a healthy, safe environment through responsible management and sustainable industry practices.
            </p>
            <button className="sustainability-button" type="button">
              GET IN TOUCH
            </button>
          </div>
        </div>

        <div className="sustainability-right">
          <div className="sustainability-right-content">
            <h3 className="sustainability-best-practices-heading">
              We Follow Best Practices
            </h3>
            <p className="sustainability-best-practices-paragraph">
              Burks Construction Management integrates cutting-edge practices across construction, forestry, and agriculture, ensuring responsible and sustainable management.
            </p>
            <ul className="sustainability-practices-list">
              <li className="sustainability-practice-item">
                <span className="sustainability-practice-icon">
                  <FaRecycle />
                </span>
                <span className="sustainability-practice-text">Sustainable Development</span>
              </li>
              <li className="sustainability-practice-item">
                <span className="sustainability-practice-icon">
                  <GiSprout />
                </span>
                <span className="sustainability-practice-text">Environmental Stewardship</span>
              </li>
              <li className="sustainability-practice-item">
                <span className="sustainability-practice-icon">
                  <FaDesktop />
                </span>
                <span className="sustainability-practice-text">Innovative Practices</span>
              </li>
              <li className="sustainability-practice-item">
                <span className="sustainability-practice-icon">
                  <FaUsers />
                </span>
                <span className="sustainability-practice-text">Industry Leadership</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SustainabilitySection
