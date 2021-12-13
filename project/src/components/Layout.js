import '../assets/css/main.css'
import 'normalize.css'
import Footer from './Footer'
import Navbar from './Navbar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
