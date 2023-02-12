import React from 'react'
import { graphql } from 'gatsby'
import './style.css'
import Layout from '../components/Layout'
import Fade from 'react-reveal/Fade'
import Nav from '../components/1 - Nav'
import Header from '../components/2 - Header'
import Partners from '../components/3 - Partners'
import Features from '../components/4 - Features'
import Mobile from '../components/5 - Mobile'
import How from '../components/6 - How'
import Clients from '../components/7 - Clients'
import CTA from '../components/8 - CTA'
import Footer from '../components/9 - Footer'

export const LandingPage = ({}) => {
  return (
    <div>
      <Nav />
      <Header />
      <Partners />
      <Features />
      <Mobile />
      <How />
      <Clients />
      <CTA />
      <Footer />
    </div>
  )
}

export default LandingPage
