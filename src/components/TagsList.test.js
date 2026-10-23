import { render, screen } from '@testing-library/react'
import React from 'react'
import TagsList from './TagsList'

describe('TagsList', () => {
  it('renders nothing when recipes is empty', () => {
    const { container } = render(<TagsList recipes={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders nothing when recipes is omitted', () => {
    const { container } = render(<TagsList />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders one link per distinct tag with its count', () => {
    const recipes = [
      { title: 'Recipe A', content: { tags: ['tea', 'cold'] } },
      { title: 'Recipe B', content: { tags: ['tea'] } }
    ]

    render(<TagsList recipes={recipes} />)

    expect(screen.getByText('tea (2)')).toBeInTheDocument()
    expect(screen.getByText('cold (1)')).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(2)
  })
})
