import React from 'react'
import {Link} from 'react-router-dom'

const Movies = () => {
  return (
    <div>
        <p>Movies</p><br />
        <Link to={'/'} >go to Home</Link><br /><br />
        <Link to={'/movies/best'} >go to Best Movies</Link>

    </div>
  )
}

export default Movies;