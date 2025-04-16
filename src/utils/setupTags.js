/* Gather all tags to be consumed */
const setupTags = recipes => {
  const allTags = {}

  recipes.forEach(recipe => {
    if (recipe.content && Array.isArray(recipe.content.tags)) {
      recipe.content.tags.forEach(tag => {
        allTags[tag] = (allTags[tag] || 0) + 1
      })
    }
  })

  // Convert the object to an array of [tag, count] pairs and sort alphabetically by tag
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setupTags
