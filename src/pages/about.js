import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import React from 'react'
import RecipesList from '../components/RecipesList'
import SiteSeo from '../components/SiteSeo'

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
            <h2>Lorem ipsum dolor sit amet elit.</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banc mi biddies chia.
            </p>
            <p>
              Teriyaki tumblr fruitarian jean shorts brunch, aesthetic salvia
              retro.
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
          <h5>Look at this!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
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
