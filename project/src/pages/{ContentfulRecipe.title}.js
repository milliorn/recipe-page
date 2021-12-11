import { graphql } from 'gatsby'
import React from 'react'

const RecipeTemplate = props => {
  return (
    <div>
      <h4>{props.params.title}</h4>
    </div>
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
