import React from 'react'

const Clients = () => {
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
        <div class="testimonial-slider w-slider">
          <div class="w-slider-mask" id="w-slider-mask-0">
            <div class="slide w-slide" role="group">
              <div class="slide-blue-bkg"></div>
              <div class="slide-grid">
                <div class="slide-column-left">
                  <img
                    src="/images/Logoipsum_1.svg"
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
