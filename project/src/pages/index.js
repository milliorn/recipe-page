import React from 'react'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="home-heading">
        <h1 style={{ color: 'green', textTransform: 'capitalize' }}>
          Hello Home Page!
        </h1>
      </div>
    </Layout>
  )
}
