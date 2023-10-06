import React from 'react'
import Hero from '../components/Landing/Hero'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Features from '../components/Landing/Features'
import Foundation from '../components/Landing/Foundation'
import Specialization from '../components/Landing/Specialization'
import Support from '../components/Landing/Support'
import Subscribe from '../components/Landing/Subscribe'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Foundation />
        <Specialization />
        <Support />
        <Features />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Landing