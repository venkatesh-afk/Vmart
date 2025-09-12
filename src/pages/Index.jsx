import React from 'react'
import IndexNavbar from '../components/IndexComponents/IndexNavbar'
import LandingPage from '../components/IndexComponents/LandingPage'
import ProductCategory from '../components/IndexComponents/ProductCategory'
import Contact from '../components/IndexComponents/Contact'
import Footer from '../components/IndexComponents/Footer'
import AboutUs from '../components/IndexComponents/AboutUs'

const Index = () => {
  return (
    <>
    <div className='pt-24'>
      <IndexNavbar />
      <LandingPage />
      <ProductCategory />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default Index