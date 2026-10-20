const path = require('path')
const slugify = require('slugify')
const { recipeSlug, isPublishableRecipe } = require('./src/utils/recipeSlug')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          id
          title
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    if (!isPublishableRecipe(recipe)) {
      return
    }

    createPage({
      path: `/${recipeSlug(recipe)}`,
      component: path.resolve(`src/templates/recipe-template.js`),
      context: {
        id: recipe.id
      }
    })

    const tags = recipe.content?.tags ?? []
    tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag
        }
      })
    })
  })
}
