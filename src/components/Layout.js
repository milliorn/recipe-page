import '../assets/css/main.css'
import 'normalize.css'
import Footer from './Footer'
import Navbar from './Navbar'
import React from 'react'

/* Global layout component that wraps every page with
Navbar and Footer */
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
