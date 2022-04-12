import React, { useState, useEffect } from 'react'
import { getFeaturedStories } from '../queries'
import Navbar from './Navbar'

const Home = () => {
  const [ news, setNews ] = useState([])

  useEffect(() => {
    getFeaturedStories()
    .then(data => setNews(data.results))
  }, [])

  const stories = () => {
    return news.map(article => {
      return (
        <div key={article.url}>
          <h3>{article.title}</h3>
          <p>{article.abstract}</p>
        </div>
      )
    })
  }

  return (
    <section>
      <Navbar />
      { stories() }
    </section>
  )
}

export default Home