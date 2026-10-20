const slugify = require('slugify')

/*
  Builds the path segment for a recipe's detail page.
  Contentful's title field has no uniqueness validation, so two recipes
  can share a slug; the id suffix guarantees each recipe still gets its
  own route. Used by gatsby-node.js (page creation) and RecipesList.js
  (link generation) so both sides agree on the same URL.
*/
const recipeSlug = ({ id, title }) => {
  if (!id) {
    throw new Error('recipeSlug requires a recipe id')
  }
  const titleSlug = slugify(title || 'recipe', { lower: true })
  return `${titleSlug}-${id}`
}

module.exports = recipeSlug
