import React from 'react'
import { siteMetadata } from '../../gatsby-config'
import app from '../components/app'

export default function Home() {
  return (
    <>
      <app/>
      <div>Hello {siteMetadata.title}!</div>
    </>
  )
}
