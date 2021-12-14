import { Helmet } from 'react-helmet'
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
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDescription }]}
    />
  )
}

export default SiteSeo
