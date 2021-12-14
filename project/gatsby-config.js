/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: 'Scott Milliorn',
    creationDate: new Date(2021, 10, 16),
    description: `Blazing fast modern recipe site in GatsbyJS and React`,
    github: 'https://github.com/milliorn/Sample-Gatsby-Recipe-Page',
    siteUrl: `https://samplegatsbyrecipepage.gatsbyjs.io`,
    title: `Gatsby Recipes`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Recipes`,
        short_name: `Gatsby Recipes`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon-3.png`,
        crossOrigin: `use-credentials` // `use-credentials` or `anonymous`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6p9utpb04y6n`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ['400']
            },
            {
              family: 'Inconsolata',
              variants: ['400', '500', '600', '700']
            }
          ]
        }
      }
    },
    `gatsby-plugin-react-helmet`
  ]
}
