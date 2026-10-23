/**
 * @jest-environment node
 */
const { createPages } = require('./gatsby-node')

const buildArgs = ({ errors, nodes }) => {
  const createPage = jest.fn()
  const graphql = jest.fn().mockResolvedValue({
    errors,
    data: { allContentfulRecipe: { nodes } }
  })

  return { graphql, actions: { createPage }, createPage }
}

describe('createPages', () => {
  it('throws with the joined error messages when the query fails', async () => {
    const { graphql, actions } = buildArgs({
      errors: [{ message: 'boom' }, { message: 'also boom' }],
      nodes: []
    })

    await expect(createPages({ graphql, actions })).rejects.toThrow(
      'boom\nalso boom'
    )
  })

  it('creates a recipe page and its tag pages for a valid recipe', async () => {
    const { graphql, actions, createPage } = buildArgs({
      errors: undefined,
      nodes: [
        {
          id: 'r1',
          title: 'Sweet Iced Tea',
          content: { tags: ['tea', 'cold'] }
        }
      ]
    })

    await createPages({ graphql, actions })

    expect(createPage).toHaveBeenCalledWith(
      expect.objectContaining({ path: '/sweet-iced-tea-r1' })
    )
    expect(createPage).toHaveBeenCalledWith(
      expect.objectContaining({ path: '/tags/tea' })
    )
    expect(createPage).toHaveBeenCalledWith(
      expect.objectContaining({ path: '/tags/cold' })
    )
    expect(createPage).toHaveBeenCalledTimes(3)
  })

  it('skips recipes with no title', async () => {
    const { graphql, actions, createPage } = buildArgs({
      errors: undefined,
      nodes: [{ id: 'r1', content: { tags: ['tea'] } }]
    })

    await createPages({ graphql, actions })

    expect(createPage).not.toHaveBeenCalled()
  })

  it('defaults missing content.tags to an empty array instead of throwing', async () => {
    const { graphql, actions, createPage } = buildArgs({
      errors: undefined,
      nodes: [{ id: 'r1', title: 'Sweet Iced Tea' }]
    })

    await expect(createPages({ graphql, actions })).resolves.toBeUndefined()
    expect(createPage).toHaveBeenCalledTimes(1)
    expect(createPage).toHaveBeenCalledWith(
      expect.objectContaining({ path: '/sweet-iced-tea-r1' })
    )
  })
})
