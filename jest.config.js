// babel-jest and jest-environment-jsdom are devDependencies with no import
// anywhere in source (babel-jest is Jest's default transformer, invoked
// because babel.config.js exists; jest-environment-jsdom is only
// referenced by the string below). depcheck can't see either usage, hence
// the --ignores entries for both in package.json's depcheck script.
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
  // Per-file thresholds, not a single global aggregate: a global block
  // only requires the sum/average across all files to hit the number, so
  // a well-covered file could mask a newly added, poorly-covered one as
  // this list grows. Each future addition to collectCoverageFrom should
  // get its own block here too.
  coverageThreshold: {
    'src/utils/recipeSlug.js': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    },
    'src/utils/setupTags.js': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    },
    'src/components/RecipesList.js': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    },
    'src/components/TagsList.js': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    },
    'src/components/AllRecipes.js': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    },
    'gatsby-node.js': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
