module.exports = {
	siteMetadata: {
		title: `Gatsby Recipes`,
		description: `Blazing fast modern site generator for React`,
		siteUrl: `https://samplegatsbyrecipepage.gatsbyjs.io`,
		author: 'Scott Milliorn',
		github: 'https://github.com/milliorn/Sample-Gatsby-Recipe-Page',
		creationDate: new Date(2021, 10, 16)
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
				path: `${__dirname}/src/assets/images`
			}
		}
	]
}
