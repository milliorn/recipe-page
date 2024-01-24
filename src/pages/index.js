import { StaticImage } from 'gatsby-plugin-image'
import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'
import RandomQuote from '../components/RandomQuote'
import React from 'react'
import SiteSeo from '../components/SiteSeo'

/* Setup home page */
export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <RandomQuote />
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export const Head = () => <SiteSeo title="Home " />
