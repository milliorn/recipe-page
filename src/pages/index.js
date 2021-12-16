import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'

import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'
import RandomQuote from '../components/RandomQuote'
import SiteSeo from '../components/SiteSeo'

/* Setup home page */
export default function Home() {
  return (
    <Layout>
      <SiteSeo title="Home " />
      <main className="page">
        <header className="hero">
          <StaticImage
  src = "../assets/images/main.jpeg"
  alt = "eggs"
  className = "hero-img"
  placeholder = "tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>React recipes</h1>
              <RandomQuote />
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
