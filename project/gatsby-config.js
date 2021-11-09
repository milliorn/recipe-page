module.exports = {
  siteMetadata: {
    title: `Gatsby Recipes`,
    siteUrl: `https://samplegatsbyrecipepage.gatsbyjs.io`,
    description: `Blazing fast modern site generator for React`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp` // Needed for dynamic images
  ]
}
