import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

/*Setup SiteSeo with graphql/site/siteMetadata*/
const SiteSeo = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  const fullTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title

  return (
    <head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
    </head>
  )
}

export default SiteSeo