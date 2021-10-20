import React from 'react'
import { Link } from 'gatsby'

const PageNotFound = () => {
  return (
    <>
      <div>
        404 Page Not Found!?
      </div> <br />
      <div>
        <Link to='/'>Home</Link>
      </div>
    </>
  )
}

export default PageNotFound
