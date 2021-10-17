import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import App from '../components/app.js'

const Home =() => {
  return (
    <>
      <App/>
      <div>Hello {siteMetadata.title}!</div>
    </>
  )
}

export default Home