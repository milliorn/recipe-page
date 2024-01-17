import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import React from 'react'
import RecipesList from '../components/RecipesList'
import SiteSeo from '../components/SiteSeo'

/* Setup about page */
const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes }
  }
}) => {
  return (
    <Layout>
      <SiteSeo title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>My personal recipes</h2>
            <p>
              Although this ia mock website to demonstrate what I can do in
              GatsbyJS and React, these are real recipes I personally use.
            </p>
            <p>
              Hope you enjoy them. If you have any you would like to add click
              on the contact button and send me your recipe!
            </p>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at these!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
