import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import React from 'react'
import RecipesList from '../components/RecipesList'
import SiteSeo from '../components/SiteSeo'

/* Setup contact page and form */
const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Lorem ipsum dolor sit amen consenter adipisicing elite. Ex
              cumquat, venial quos amen, odic, bandit's nisi asperities alias
              cum facer harem qui ecus solute? pariah's tenter venite neue
              attune voluptatem.
            </p>
            <p>
              Lorem, ipsum dolor sit amen consenter adipisicing elite. Impeding
              total a, site rerun ipsum ecus molesting ab rem nobs dolores, quia
              veritas quid's attune perspiciatis id odic eos quia? Porno.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              repellendus at nobis incidunt dignissimos delectus labore qui quos
              a, quisquam expedita pariatur illum nostrum adipisci numquam
              consequuntur dolorum accusantium eaque.
            </p>
          </article>

          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mknynvnd"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
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

export default Contact

export const Head = () => <SiteSeo title="Contact " />
