import React from 'react'

const Footer = () => {
	return (
		<footer className='page-footer'>
			<p>
				&copy; {new Date().getFullYear()} <span>React Recipes</span> Built with <a href='https://www.gatsbyjs.com'>GatsbyJs</a>
			</p>
		</footer>
	)
}

export default Footer