import React from "react"
import { Helmet } from "react-helmet"
import { GatsbySeo } from 'gatsby-plugin-next-seo';

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <GatsbySeo
          title='Simple Usage Example'
          description='A short description goes here.'
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="https://samplegatsbyrecipepage.gatsbyjs.io/" />
        </Helmet>
      </div>
    )
  }
}
export default function Home() {
  return (
  <><title>Test Page</title><div>Hello world!</div></>
  )
}
