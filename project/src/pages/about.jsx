import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis assumed voluptatibus est vel reprehenderit sed aut
              harum, non ut. Nisi nullo blanditiis dolor minima excepturi
              aliquam volute expedita voluptatum veritatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus fugit voluptatem, event at qui illo. Nobis sed
              atque reprehenderit provident illum deceit, new uint enim
              dolorum voluptatem ut. Ab, error distinctio!
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
