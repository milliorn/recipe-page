import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import RecipesList from './RecipesList'
import TagsList from './TagsList'

const query = graphql`
  {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

/* Setup recipes for every page */
const AllRecipes = () => {
  const data = useStaticQuery(query)
  // Although static queries are relatively stable,
  // if any transformations on the recipes array become complex memoize the computed results.
  // This can help prevent unnecessary recalculations on each render:
  const recipes = React.useMemo(() => data.allContentfulRecipe.nodes, [data.allContentfulRecipe.nodes]);

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
