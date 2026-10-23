import { render, screen } from '@testing-library/react'
import React from 'react'
import RecipesList from './RecipesList'
import { baseRecipe } from '../test-utils/fixtures'

describe('RecipesList', () => {
  it('renders nothing for an empty recipes array', () => {
    const { container } = render(<RecipesList recipes={[]} />)
    expect(container.querySelector('.recipe')).not.toBeInTheDocument()
  })

  it('renders nothing when recipes is omitted', () => {
    const { container } = render(<RecipesList />)
    expect(container.querySelector('.recipe')).not.toBeInTheDocument()
  })

  it('renders nothing when recipes is explicitly null', () => {
    const { container } = render(<RecipesList recipes={null} />)
    expect(container.querySelector('.recipe')).not.toBeInTheDocument()
  })

  it('filters out recipes with no title', () => {
    render(<RecipesList recipes={[{ id: 'r2' }, baseRecipe]} />)
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })

  it('renders a link with the correct href', () => {
    render(<RecipesList recipes={[baseRecipe]} />)
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/sweet-iced-tea-r1'
    )
  })

  it('renders without an image when image is missing', () => {
    render(<RecipesList recipes={[baseRecipe]} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.getByText('Sweet Iced Tea')).toBeInTheDocument()
  })

  it('renders the image when image is present', () => {
    render(
      <RecipesList recipes={[{ ...baseRecipe, image: { src: '/tea.jpg' } }]} />
    )
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Sweet Iced Tea')
  })
})
