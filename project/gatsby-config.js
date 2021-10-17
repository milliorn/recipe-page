const siteUrl = process.env.URL || `https://samplegatsbyrecipepage.gatsbyjs.io/`

// In your gatsby-config.js
module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-next-seo',
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
            nodes {
              ... on WpPost {
                uri
                modifiedGmt
              }
              ... on WpPage {
                uri
                modifiedGmt
              }
            }
          }
        }
      `,
                resolveSiteUrl: () => siteUrl,
                resolvePages: ({
                    allSitePage: { nodes: allPages },
                    allWpContentNode: { nodes: allWpNodes },
                }) => {
                    const wpNodeMap = allWpNodes.reduce((acc, node) => {
                        const { uri } = node
                        acc[uri] = node

                        return acc
                    }, {})

                    return allPages.map(page => {
                        return { ...page, ...wpNodeMap[page.path] }
                    })
                },
                serialize: ({ path, modifiedGmt }) => {
                    return {
                        url: path,
                        lastmod: modifiedGmt,
                    }
                },
            },
        },
    ],
}
