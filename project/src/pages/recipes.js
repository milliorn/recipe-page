import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'
import React from 'react'
import Seo from '../components/Seo'

const Recipes = () => {
  return (
    <Layout>
      <Seo title="Recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
