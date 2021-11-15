module.exports = {
	siteMetadata: {
		title: `Gatsby Recipes`,
    description: `Blazing fast modern site generator for React`,
    siteUrl: `https://samplegatsbyrecipepage.gatsbyjs.io`
	},
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    }
  ]
}
