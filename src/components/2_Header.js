import React, { useEffect, useState } from 'react'

const Header = () => {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => setSuccess(true))
      .catch((error) => alert(error))
  }

  useEffect(() => {
    if (typeof document !== `undefined`) {
      document.querySelector('form')?.addEventListener('submit', handleSubmit)
    }
  }, [])

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
          {!success ? (
            <form
              data-name="Join List Form"
              name="Join-List-Form"
              id="email-form"
              method="post"
              class="form"
              aria-label="Join List Form"
              data-netlify="true"
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
              <input type="hidden" name="form-name" value="Join-List-Form" />
              <input
                type="submit"
                value="Join List"
                data-wait="...."
                class="form-button l4 w-button"
              />
            </form>
          ) : (
            <p style={{ textAlign: 'center', color: '#4B7BFD' }}>
              Thank you for your interest! The submission is received.
            </p>
          )}
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
