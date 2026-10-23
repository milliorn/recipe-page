import { render, screen } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import AllRecipes from './AllRecipes'
import { baseRecipe } from '../test-utils/fixtures'

describe('AllRecipes', () => {
  it('composes TagsList and RecipesList from the static query data', () => {
    useStaticQuery.mockReturnValue({
      allContentfulRecipe: {
        nodes: [baseRecipe]
      }
    })

    render(<AllRecipes />)

    expect(screen.getByText('Sweet Iced Tea')).toBeInTheDocument()
    expect(screen.getByText('tea (1)')).toBeInTheDocument()
  })

  it('renders without crashing when the query returns no nodes', () => {
    useStaticQuery.mockReturnValue({ allContentfulRecipe: { nodes: [] } })

    const { container } = render(<AllRecipes />)

    expect(container.querySelector('.recipes-container')).toBeInTheDocument()
  })

  it('renders without crashing when allContentfulRecipe is missing', () => {
    useStaticQuery.mockReturnValue({})

    const { container } = render(<AllRecipes />)

    expect(container.querySelector('.recipes-container')).toBeInTheDocument()
  })
})
