import Layout from '../components/Layout'
import React from 'react'
import SiteSeo from '../components/SiteSeo'

/* Setup custom 404 page */
const Error = () => {
  return (
    <Layout>
      <SiteSeo title="Error" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error
