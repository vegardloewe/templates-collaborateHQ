import React from 'react'

const Header = () => {
  return (
    <div class="section l4 wf-section">
      <div class="container">
        <div class="title-wrap _60px-margin">
          <h1 class="h1-title white centered">
            Kick-start your next project with CollaborateHQ
          </h1>
          <p class="extra-large-text center white">
            A project management tool that helps teams collaborate, track
            progress, and meet deadlines
          </p>
        </div>
        <div class="form-block hero w-form">
          <form
            data-name="Join List Form"
            name="Join-List-Form"
            id="email-form"
            method="post"
            class="form"
            aria-label="Join List Form"
            data-netlify="true"
            action="/success"
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
              required="true"
            />
            <input
              type="submit"
              value="Join List"
              data-wait="...."
              class="form-button l4 w-button"
            />
          </form>
        </div>
        <img
          src="/images/hero.svg"
          loading="eager"
          width="1000.5"
          alt=""
          class="_100-image"
        />
      </div>
    </div>
  )
}

export default Header
