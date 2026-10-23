module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.cache/', '/public/'],
  collectCoverageFrom: [
    'src/utils/recipeSlug.js',
    'src/utils/setupTags.js',
    'src/components/RecipesList.js',
    'src/components/TagsList.js',
    'src/components/AllRecipes.js',
    'gatsby-node.js'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
