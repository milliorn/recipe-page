import React from 'react'
import Layout from '../components/layout'

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Lorem ipsum dolor sit amen consenter adipisicing elite. Ex
              cumquat, venial quos amen, odic, bandit's nisi asperities alias
              cum facer harem qui ecus solute? pariah's tenter venite neue
              attune voluptatem.
            </p>
            <p>
              Lorem, ipsum dolor sit amen consenter adipisicing elite. Impeding
              total a, site rerun ipsum ecus molesting ab rem nobs dolores, quia
              veritas quid's attune perspiciatis id odic eos quia? Porno.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              repellendus at nobis incidunt dignissimos delectus labore qui quos
              a, quisquam expedita pariatur illum nostrum adipisci numquam
              consequuntur dolorum accusantium eaque.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" cols="30" rows="10" />
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
