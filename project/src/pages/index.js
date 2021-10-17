import React from "react"
import { Helmet } from "react-helmet"
class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet htmlAttributes={{
          lang: 'en',
        }}>
          <meta charSet="utf-8" />
          <title>Gatsby Recipes</title>
          <link rel="canonical" href="https://samplegatsbyrecipepage.gatsbyjs.io/" />
        </Helmet>
      </div>
    )
  }
}
export default function Home() {
  return (
    <>
      <Application />
      <div>Hello world!</div>
    </>
  )
}
