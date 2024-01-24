import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import React from 'react'
import RecipesList from '../components/RecipesList'
import SiteSeo from '../components/SiteSeo'

/* Setup boilerplate code for tags to display on page */
const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
      <Head pageContext={pageContext} />
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

export const Head = ({ pageContext }) => {
  return <SiteSeo title={pageContext.tag} />
}
