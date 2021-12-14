import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'
import React from 'react'
import SEO from '../components/SEO'

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
