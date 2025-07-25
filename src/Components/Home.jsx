import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ContactInfo from './ContactInfo'
import Service from './Service'
import ContactForm from './ContactForm'
import Footer from './Footer'
import ImageGallery from './ImageGallary'
import QRCodeSection from './QRCodeSection'
import ShareModal from './ShareModal'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <ShareModal/>
      <Hero/>
      <ContactInfo/>
      <ImageGallery/>
      <Service/>
      <ContactForm/>
      <QRCodeSection/>
      <Footer/>
    </div>
  )
}

export default Home
