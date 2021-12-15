import { StaticImage } from 'gatsby-plugin-image'
import AllRecipes from '../components/AllRecipes'
import Axios from 'axios'
import Layout from '../components/Layout'
import React, { useEffect, useState } from 'react'
import SiteSeo from '../components/SiteSeo'

/* Setup home page */
export default function Home() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetchComments()
  }, [])

  /*
  https://www.pluralsight.com/guides/process-an-api-response-in-react
*/
  const fetchComments = async () => {
    const response = await Axios(
      'https://my-bao-server.herokuapp.com/api/breadpuns'
    )
    setComments(response.data)
  }

  return (
    <Layout>
      <SiteSeo title="Home " />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>React recipes</h1>
              <h4>{comments}</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
