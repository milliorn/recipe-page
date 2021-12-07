import { StaticImage } from 'gatsby-plugin-image'
import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'
import React from 'react'

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className='"hero-img'
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>React Recipes</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
