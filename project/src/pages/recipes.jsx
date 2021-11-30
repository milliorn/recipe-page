import AllRecipes from '../components/AllRecipes'
import Layout from '../components/layout'
import React from 'react'

const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
