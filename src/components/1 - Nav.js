import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'

export default () => {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      id="Navigation-Bar"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      class="navigation l4 w-nav"
    >
      <div class="nav-container">
        <div class="menu-left">
          <a
            href="https://www.google.com/"
            class="brand w-nav-brand"
            aria-label="home"
          >
            <img
              src="/images/logo.svg"
              loading="lazy"
              alt=""
              class="lpa-logo"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
