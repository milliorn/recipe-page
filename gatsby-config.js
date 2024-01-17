/**
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
    description: `Blazing fast modern recipe site in GatsbyJS`,
    title: 'Simply Recipes',
    github: 'https://github.com/milliorn/recipe-page',
    siteUrl: `https://gatsbyrecipes.gatsbyjs.io/`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      // https://www.gatsbyjs.com/plugins/gatsby-plugin-html-attributes/
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
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
              variants: [ '400' ]
            },
            {
              family: 'Inconsolata',
              variants: [ '400', '500', '600', '700' ]
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simply Recipes`,
        short_name: `Simply Recipes`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FF0000`,
        display: `standalone`,
        icon: `src/assets/images/logo.svg`
      }
    }
  ]
}
