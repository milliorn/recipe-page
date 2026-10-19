const path = require('path')
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors.map(e => e.message).join('\n'))
  }

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
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
