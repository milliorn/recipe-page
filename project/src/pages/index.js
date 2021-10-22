import { Link } from 'gatsby'
import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import App from '../components/App.js'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <App />
      <div>Hello {siteMetadata.title}!</div>
      <br />
      <Link to="/contact">contact</Link>
      <br />
      <Link to="/about">about</Link>
      <br />
      <Link to="/company">company</Link>
      <br />
      <Link to="/company/history">history</Link>
      <br />
    </Layout>
  )
}

export default Home
