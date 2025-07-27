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
import ShowMessages from './ShowMessages'
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
      <ShowMessages/>
    </div>
  )
}

export default Home
