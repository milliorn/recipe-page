import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import React from 'react'
import SiteSeo from '../components/SiteSeo'
import slugify from 'slugify'

const RecipeTemplate = ({ data }) => {
  if (!data?.contentfulRecipe) {
    return null
  }

  const { title, cookTime, content, prepTime, servings, description, image } =
    data.contentfulRecipe

  const pathToImage = image ? getImage(image) : null
  const {
    tags = [],
    instructions = [],
    ingredients = [],
    tools = []
  } = content || {}

  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            {pathToImage && (
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="recipe-hero-img"
              />
            )}
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description?.description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>serving</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags :
                {[...tags].sort().map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tags/${slug}`} key={`${tag}-${index}`}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>

          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div />
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}{' '}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => (
                  <p key={`${item}-${index}`} className="single-ingredient">
                    {item
                      .toLowerCase()
                      .split(' ')
                      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                      .join(' ')}
                  </p>
                ))}
              </div>
              <div>
                <h4>tools</h4>
                {tools
                  .slice()
                  .sort()
                  .map((item, index) => (
                    <p key={item || index} className="single-tool">
                      {item}
                    </p>
                  ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const Head = ({ data }) => {
  if (!data?.contentfulRecipe) {
    return null
  }
  const { title, description } = data.contentfulRecipe
  return <SiteSeo title={title} description={description?.description} />
}

export const query = graphql`
  query getSingleRecipe($id: String) {
    contentfulRecipe(id: { eq: $id }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
    }
  }
`

export default RecipeTemplate
