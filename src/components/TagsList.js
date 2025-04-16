import { Link } from 'gatsby'
import React from 'react'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'

/*
  TagsList component:
  - Uses the setupTags utility to generate tags and
  - their counts from the recipes data.
  - Renders each tag as a link to a dedicated tag page.
*/
const TagsList = ({ recipes }) => {
  // Early return if no recipes are provided or no tags are found
  if (!recipes.length) {
    return null
  }

  const newTags = setupTags(recipes)

  return (
    <div className="tags-container">
      <span className="tag-container-span">Recipes</span>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
