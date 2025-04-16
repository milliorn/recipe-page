import { FiAlignJustify } from 'react-icons/fi'
import { Link } from 'gatsby'
import logo from '../assets/images/logo.svg'
import React, { useState } from 'react'

/* Setup navbar for every page */
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button
            aria-expanded={menuVisible}
            aria-label="menu button"
            className="nav-btn"
            type="button"
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <FiAlignJustify />
          </button>
        </div>
        <div className={menuVisible ? 'nav-links show-links' : 'nav-links'}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setMenuVisible(false)}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setMenuVisible(false)}
          >
            recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setMenuVisible(false)}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setMenuVisible(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setMenuVisible(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
