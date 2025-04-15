import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import React from 'react'
import RecipesList from '../components/RecipesList'
// Uncomment the next line once you decide to use the SEO component
// import SiteSeo from '../components/SiteSeo'

/*
  TagTemplate: A page template to display recipes filtered by a tag.
  It uses pageContext to get the tag name and queries Contentful for recipes that match the tag.
*/
const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes

  // Add a fallback if no recipes are found for the tag
  if (!recipes.length) {
    return (
      <Layout>
        <main className="page">
          <h2>{pageContext.tag}</h2>
          <p>No recipes found for this tag.</p>
        </main>
      </Layout>
    )
  }

  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

export default TagTemplate
