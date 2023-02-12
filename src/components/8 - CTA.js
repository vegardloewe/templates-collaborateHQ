import React, { Fragment } from 'react'

export default () => {
  return (
    <div class="section l4 light-blue wf-section">
      <div class="container l4 cta">
        <div class="cta-wrap">
          <div class="cta-text-wrap">
            <div class="title-wrap align-left">
              <h2 class="h2-title white">
                Manage your projects from your mobile
              </h2>
              <p class="extra-large-text l4 _30px-margin">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatib.
              </p>
            </div>
            <div class="form-block w-form">
              <form
                data-name="Join List Form"
                name="wf-form-Join-List-Form"
                id="email-form"
                method="get"
                class="form"
                aria-label="Join List Form"
              >
                <input
                  type="text"
                  class="text-field first w-input"
                  maxlength="256"
                  name="Name"
                  data-name="Name"
                  placeholder="Your Name"
                  id="field"
                  required=""
                />
                <input
                  type="email"
                  class="text-field w-input"
                  maxlength="256"
                  name="Email"
                  data-name="Email"
                  placeholder="Your Email"
                  id="field"
                  required=""
                />
                <input
                  type="submit"
                  value="Join List"
                  data-wait="...."
                  class="form-button l4 cta w-button"
                />
              </form>
              <div
                class="success-message l4 w-form-done"
                tabindex="-1"
                role="region"
                aria-label="Join List Form success"
              >
                <div class="text-block">Thank you!</div>
              </div>
              <div
                class="error-message w-form-fail"
                tabindex="-1"
                role="region"
                aria-label="Join List Form failure"
              >
                <div class="text-block">Oops! Something went wrong!</div>
              </div>
            </div>
          </div>
          <img
            src="/images/mobile.svg"
            loading="lazy"
            alt=""
            class="cta-image"
          />
          <img
            src="/images/mobile.svg"
            loading="lazy"
            alt=""
            class="cta-image"
          />
        </div>
      </div>
    </div>
  )
}
