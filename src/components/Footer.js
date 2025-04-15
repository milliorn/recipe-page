import React from 'react'

/* Setup footer for every page */
const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>React Recipes</span> Built with{' '}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">GatsbyJS</a>
      </p>
    </footer>
  )
}

export default Footer
