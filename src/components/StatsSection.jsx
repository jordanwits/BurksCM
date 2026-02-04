import React from 'react'
import './StatsSection.css'

const StatsSection = () => {
  return (
    <section className="stats-section" aria-label="Company stats">
      <div className="stats-container">
        <div className="stats-block">
          <div className="stats-left">
            <div className="stats-left-top">
              <div className="stats-left-label">Building America</div>
              <img
                className="stats-flag"
                src="/assets/Backwards flag.png"
                alt="American flag"
              />
            </div>

            <ul className="stats-bullets">
              <li>Plan</li>
              <li>Build</li>
              <li>Manage</li>
            </ul>

            <button className="stats-cta" type="button">
              WORK WITH US
            </button>
          </div>

          <div className="stats-right">
            <div className="stats-grid">
              <div className="stats-cell">
                <div className="stats-value">$750M+</div>
                <div className="stats-desc">
                  750 Million USD TDC
                  <br />
                  (Total Development Cost) in Projects managed
                </div>
              </div>

              <div className="stats-cell">
                <div className="stats-value">55+</div>
                <div className="stats-desc">
                  Years Combined
                  <br />
                  Project Experience
                </div>
              </div>

              <div className="stats-cell">
                <div className="stats-value">185+</div>
                <div className="stats-desc">Projects Managed</div>
              </div>

              <div className="stats-cell">
                <div className="stats-value">$150M+</div>
                <div className="stats-desc">
                  Million in Project/Cost
                  <br />
                  Savings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
