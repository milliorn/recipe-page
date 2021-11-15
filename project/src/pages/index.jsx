import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

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
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>React Recipes</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}
