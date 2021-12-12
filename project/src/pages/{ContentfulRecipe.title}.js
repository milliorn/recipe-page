import React from 'react'
import { BsClockHistory, BsClock, BsPeople } from 'react-icons'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

const RecipeTemplate = ({ data }) => {
  const {
    content,
    cookTime,
    description: { description },
    image,
    prepTime,
    servings,
    title
  } = data.contentfulRecipe

  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content
  return (
    <main className="page">
      <div className="recipe-page">
        <h2>{title}</h2>
      </div>
    </main>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
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
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
