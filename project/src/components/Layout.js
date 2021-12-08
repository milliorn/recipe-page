import Footer from './Footer'
import Navbar from './Navbar'
import React from 'react'

import 'normalize.css'
import '../assets/css/main.css'

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
