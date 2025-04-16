import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import React from 'react'
import SiteSeo from '../components/SiteSeo'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'

/* Setup tags page */
const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)

  // Show fallback if no tags exist
  if (!newTags.length) {
    return (
      <Layout>
        <main className="page">
          <section className="tags-page">
            <p>No tags available.</p>
          </section>
        </main>
      </Layout>
    )
  }

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })

            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <p>{text.toUpperCase()}</p>
                <p>
                  {value} {value === 0 || value === 1 ? 'Recipe' : 'Recipes'}
                </p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags

export const Head = () => <SiteSeo title="Tags" />
