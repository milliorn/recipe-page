/**
 * @jest-environment node
 */
const recipeSlug = require('./recipeSlug')
const { isPublishableRecipe } = require('./recipeSlug')

describe('recipeSlug', () => {
  it('builds a slug from the title and id', () => {
    expect(recipeSlug({ id: 'abc123', title: 'Sweet Iced Tea' })).toBe(
      'sweet-iced-tea-abc123'
    )
  })

  it('falls back to "recipe" when the title is missing', () => {
    expect(recipeSlug({ id: 'abc123' })).toBe('recipe-abc123')
  })

  it('throws when id is missing', () => {
    expect(() => recipeSlug({ title: 'Sweet Iced Tea' })).toThrow(
      'recipeSlug requires a recipe id'
    )
  })
})

describe('isPublishableRecipe', () => {
  it('returns true when title is present', () => {
    expect(isPublishableRecipe({ title: 'Sweet Iced Tea' })).toBe(true)
  })

  it('returns false when title is missing', () => {
    expect(isPublishableRecipe({})).toBe(false)
  })

  it('returns false when recipe is null', () => {
    expect(isPublishableRecipe(null)).toBe(false)
  })
})
