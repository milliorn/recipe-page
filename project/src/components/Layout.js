import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'
import './layout.css'

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
