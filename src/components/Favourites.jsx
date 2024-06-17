import React from 'react'
import {Link} from 'react-router-dom'
const Favourites = () => {
  return (
    <div>
        <p>Favourites</p><br />
        <Link to={'/'} >go to Home</Link><br />
        <Link to={'/movies/best'} >go to Best Movies</Link>
    </div>
  )
}

export default Favourites