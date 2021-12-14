import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'
import React from 'react'
import SiteSeo from '../components/SiteSeo'

/* Setup recipes page */
const Recipes = () => {
  return (
    <Layout>
      <SiteSeo title="Recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
