import React from 'react'
import '../styling/style.css'
import Nav from '../components/1_Nav'
import Header from '../components/2_Header'
import Partners from '../components/3_Partners'
import Features from '../components/4_Features'
import Mobile from '../components/5_Mobile'
import How from '../components/6_How'
import Clients from '../components/7_Clients'
import Cta from '../components/8_Cta'
import Footer from '../components/9_Footer'

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
