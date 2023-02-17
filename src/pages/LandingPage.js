import React from 'react'
import '../styling/style.css'
import Nav from '../components/1 - Nav'
import Header from '../components/2 - Header'
import Partners from '../components/3 - Partners'
import Features from '../components/4 - Features'
import Mobile from '../components/5 - Mobile'
import How from '../components/6 - How'
import Clients from '../components/7 - Clients'
import Cta from '../components/8 - Cta'
import Footer from '../components/9 - Footer'

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Partners />
      <Features />
      <Mobile />
      <How />
      <Clients />
      <Cta />
      <Footer />
    </div>
  )
}

export default LandingPage
