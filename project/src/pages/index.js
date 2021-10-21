import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import App from '../components/app.js'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <App />
      <div>Hello {siteMetadata.title}!</div>
      <br />
      <Link to='/contact'>contact</Link>
      <br />
      <Link to='/about'>about</Link>
      <br />
      <Link to='/company'>company</Link>
      <br />
      <Link to='/company/history'>history</Link>
      <br />
    </>
  )
}

export default Home
