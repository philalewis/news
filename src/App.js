import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getFeaturedStories } from './queries'
import './App.css';
import Home from './Components/Home'

const App = () => {
  const [ news, setNews ] = useState([])

  useEffect(() => {
    getFeaturedStories()
    .then(data => setNews(data.results))
  }, [])

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home news={news}/>} />
      </Routes>
    </main>
  )
}

export default App;
