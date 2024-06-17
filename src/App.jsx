import { useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import Favourites from './components/Favourites'
import Banner from './components/Banner'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import BestMovies from './components/BestMovies';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/movies/best' Component={BestMovies} />
      <Route path='/movies' Component={Movies} />
      <Route path='/banner' Component={Banner} />
      <Route path='/favourites' Component={Favourites} />
      {/* <Movies/> */}
      {/* <Banner/> */}
      {/* <Favourites/> */}
      </Routes>
    </Router>
  )
}

export default App
