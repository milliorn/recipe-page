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
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              tenter dicta ut voluptas aliquam placeat. Odio, minus rerum?
              Possimus quaerat et ab ipsum accusamus, id corporis perspiciatis
              omnis. Soluta, ab?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur tempore laudantium ad perspiciatis dolorem est omnis
              consectetur tenetur dolorum, nisi cupiditate quidem similique
              porro laboriosam aut nam vel veritatis veniam!
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="about"
            className="about-img"
            placeholder="blurred"
          ></StaticImage>
        </section>
      </main>
    </Layout>
  )
}

export default About
