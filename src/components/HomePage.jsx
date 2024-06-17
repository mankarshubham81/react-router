import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <p>HomePage</p>
        <Link to={'/movies'} >go to Movies</Link><br /><br />
        <Link to={'/banner'} >go to Banner</Link><br /><br />
        <Link to={'/favourites'} >go to Favourites</Link>

    </div>
  )
}

export default HomePage;