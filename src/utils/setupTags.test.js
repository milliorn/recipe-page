const setupTags = require('./setupTags').default

describe('setupTags', () => {
  it('counts and sorts tags alphabetically across recipes', () => {
    const recipes = [
      { title: 'Recipe A', content: { tags: ['tea', 'cold'] } },
      { title: 'Recipe B', content: { tags: ['tea'] } }
    ]

    expect(setupTags(recipes)).toEqual([
      ['cold', 1],
      ['tea', 2]
    ])
  })

  it('skips recipes with no title', () => {
    const recipes = [
      { content: { tags: ['tea'] } },
      { title: 'Recipe B', content: { tags: ['cold'] } }
    ]

    expect(setupTags(recipes)).toEqual([['cold', 1]])
  })

  it('skips recipes with missing content', () => {
    const recipes = [{ title: 'Recipe A' }]

    expect(setupTags(recipes)).toEqual([])
  })

  it('skips recipes where content.tags is not an array', () => {
    const recipes = [{ title: 'Recipe A', content: { tags: null } }]

    expect(setupTags(recipes)).toEqual([])
  })

  it('returns an empty array for no recipes', () => {
    expect(setupTags([])).toEqual([])
  })
})
