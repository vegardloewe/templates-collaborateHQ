import React, { Fragment } from 'react'

export default () => {
  return (
    <div id="Clients" class="section l4 wf-section">
      <div class="container align-left">
        <div class="title-wrap align-left _60px-margin">
          <h2 class="h2-title white">Built for the way you build.</h2>
          <p class="extra-large-text l4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatib.
          </p>
        </div>
        <div
          data-delay="4000"
          data-animation="slide"
          class="testimonial-slider w-slider"
          data-autoplay="false"
          data-easing="ease"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="600"
          data-infinite="true"
          role="region"
          aria-label="carousel"
        >
          <div class="w-slider-mask" id="w-slider-mask-0">
            <div
              class="slide w-slide"
              aria-label="1 of 3"
              role="group"
              // style="transform: translateX(0px); opacity: 1"
            >
              <div class="slide-blue-bkg"></div>
              <div class="slide-grid">
                <div class="slide-column-left">
                  <img
                    src="/images/60eb09a30b0e1a9e57a1278f_Logoipsum_1.svg"
                    loading="lazy"
                    alt=""
                    class="l4-logo"
                  />
                  <div class="l4-quote">
                    "Nam eu pulvinar erat. Sed gravida dui lorem, quis placerat
                    lectus iaculis at. Nulla facilisi. In fringilla rutrum
                    ligula, at sollicitudin ante placerat eu"
                  </div>
                  <div class="l4-name">Max Gorlomi</div>
                  <div class="l4-info">CEO &amp; Founders of Netlino</div>
                </div>
                <div class="slide-column-right">
                  <div class="slider-percentage">83%</div>
                  <div class="percentage-subtitle">
                    Increase in conversion rate since they started using Landing
                    Page Ace, our great software for you.
                  </div>
                  <div class="percentage-small-text">
                    Client since October 2018
                  </div>
                  <div class="plan-info">Using The Premium Plan</div>
                </div>
              </div>
            </div>
            <div
              class="slide w-slide"
              aria-label="2 of 3"
              role="group"
              aria-hidden="true"
              // style="transform: translateX(0px); opacity: 1"
            >
              <div class="slide-blue-bkg" aria-hidden="true"></div>
              <div class="slide-grid" aria-hidden="true">
                <div class="slide-column-left" aria-hidden="true">
                  <img
                    src="/images/60eac105ee5004003b5f3555_logoipsum-logo-5.svg"
                    loading="lazy"
                    alt=""
                    class="l4-logo"
                    aria-hidden="true"
                  />
                  <div class="l4-quote" aria-hidden="true">
                    “With real-time integrated data flows from Segment, we can
                    truly understand what people are doing with our platform at
                    any given time.“
                  </div>
                  <div class="l4-name" aria-hidden="true">
                    Anne Marise
                  </div>
                  <div class="l4-info" aria-hidden="true">
                    Lead Designer
                  </div>
                </div>
                <div class="slide-column-right" aria-hidden="true">
                  <div class="slider-percentage" aria-hidden="true">
                    77%
                  </div>
                  <div class="percentage-subtitle" aria-hidden="true">
                    Increase in conversion rate since they started using Landing
                    Page Ace, our great software for you.
                  </div>
                  <div class="percentage-small-text" aria-hidden="true">
                    Client since October 2018
                  </div>
                  <div class="plan-info" aria-hidden="true">
                    Using The Premium Plan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
