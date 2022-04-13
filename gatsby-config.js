/**
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path : `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata : {
    author : 'Scott Milliorn',
    creationDate : new Date(2021, 10, 16),
    description : `Blazing fast modern recipe site in GatsbyJS`,
    title : "Simply Recipes",
    github : 'https://github.com/milliorn/Recipe-Page',
    siteUrl : `https://gatsbyrecipes.gatsbyjs.io/`,

  },
  plugins : [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve : `gatsby-source-filesystem`,
      options : {
        name : `images`,
        path : `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve : `gatsby-source-contentful`,
      options : {
        spaceId : `6p9utpb04y6n`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken : process.env.CONTENTFUL_API_KEY
      },
    },
    {
      resolve : `gatsby-plugin-webfonts`,
      options : {
        fonts : {
          google : [
            {
              family : "Montserrat",
              variants : [ "400" ],
            },
            {
              family : "Inconsolata",
              variants : [ "400", "500", "600", "700" ],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
