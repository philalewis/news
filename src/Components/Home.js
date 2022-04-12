import React, { useState, useEffect } from 'react'
import { getFeaturedStories } from '../queries'
import Navbar from './Navbar'

const Home = () => {
  const [ news, setNews ] = useState([])

  useEffect(() => {
    getFeaturedStories()
    .then(data => setNews(data.results))
  }, [])

  

  return (
    <section>
      <Navbar />
    </section>
  )
}

export default Home