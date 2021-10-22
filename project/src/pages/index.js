import { Link } from 'gatsby'
import React from 'react'
import siteMetadata from '../../gatsby-config'
import App from '../components/app'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <App />
      <h1
        style={{
          color: 'red',
          textTransform: 'capitalize'
        }}
      >
        hello {siteMetadata.siteMetadata.title}!
      </h1>
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
