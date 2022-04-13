import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getFeaturedStories } from './queries'
import './App.css';
import Home from './Components/Home'
import Article from './Components/Article'

const App = () => {
  const [ news, setNews ] = useState([])

  useEffect(() => {
    getFeaturedStories()
    .then(data => setNews(data.results))
    .catch(error => console.log(error))
  }, [])

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home news={ news }/>} />
        <Route path="/:headline" element={<Article news={ news }/>} />
      </Routes>
    </main>
  )
}

export default App;
