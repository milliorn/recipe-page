import Layout from '../components/Layout'
import React from 'react'

const PageNotFound = () => {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default PageNotFound
