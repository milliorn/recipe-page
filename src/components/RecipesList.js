import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import React from 'react'
import recipeSlug, { isPublishableRecipe } from '../utils/recipeSlug'

/* Setup component for recipes */
const RecipesList = ({ recipes }) => {
  return (
    <div className="recipes-list">
      {(recipes ?? []).map(recipe => {
        if (!isPublishableRecipe(recipe)) {
          return null
        }
        const { id, title, image, prepTime, cookTime } = recipe
        const pathToImage = image ? getImage(image) : null
        return (
          <Link key={id} to={`/${recipeSlug(recipe)}`} className="recipe">
            {pathToImage && (
              <GatsbyImage
                image={pathToImage}
                className="recipe-img"
                alt={title}
              />
            )}
            <span>{title}</span>
            <p>
              Prep : {prepTime}min | Cook : {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
