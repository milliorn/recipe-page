import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
	return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2></h2>
            <p></p>
            <p></p>
            <Link to='/contact' className='btn'>
              contact
            </Link>
          </article>
        </section>
      </main>
		</Layout>
	)
}

export default About
