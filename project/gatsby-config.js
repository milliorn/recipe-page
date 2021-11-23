module.exports = {
  siteMetadata: {
    author: 'Scott Milliorn',
    creationDate: new Date(2021, 10, 16),
    description: `Blazing fast modern site generator for React`,
    github: 'https://github.com/milliorn/Sample-Gatsby-Recipe-Page',
    siteUrl: `https://samplegatsbyrecipepage.gatsbyjs.io`,
    title: `Gatsby Recipes`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    }
  ]
}
