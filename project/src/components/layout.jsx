import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

import 'normalize.css'
import '../assets/css/main.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
