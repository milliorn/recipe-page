import React from 'react'

// Footer component: renders a footer with dynamic copyright date and a link to GatsbyJS.
const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>React Recipes</span> Built with{' '}
        <a
          href="https://github.com/milliorn/recipe-page"
          target="_blank"
          rel="noopener noreferrer"
        >
          GatsbyJS
        </a>
      </p>
    </footer>
  )
}

export default Footer
