import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import React from 'react'
import RecipesList from '../components/RecipesList'

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes }
  }
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis assumed voluptatibus est vel reprehenderit sed aut
              harum, non ut. Nisi nullo blanditiis dolor minima excepturi
              aliquam volute expedita voluptatum veritatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus fugit voluptatem, event at qui illo. Nobis sed
              atque reprehenderit provident illum deceit, new uint enim dolorum
              voluptatem ut. Ab, error distinctio!
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
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
