import Layout from '../components/Layout'
import React from 'react'
import SiteSeo from '../components/SiteSeo'
import { Link } from 'gatsby'

/* Custom 404 page.
This page is displayed when a user navigates to a non-existent route.
It uses the global Layout and SiteSeo components to maintain
consistent styling and SEO standards.
*/
const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
          <Link to="/" className="btn">
            Go Back Home
          </Link>
        </section>
      </main>
    </Layout>
  )
}

export default Error

export const Head = () => <SiteSeo title="Page Not Found" />
