import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { getFeaturedStories } from '../queries'

const Home = () => {
  const [ news, setNews ] = useState([])
  const [ currentArticles, setCurrentArticles ] = useState([])

  useEffect(() => {
    getFeaturedStories()
    .then(data => {
      setNews(data.results)
      setCurrentArticles(data.results)
    })
    .catch(error => console.log(error))
  }, [])

  const stories = () => {
    return currentArticles.map(article => {
      return (
        <div key={article.url}>
          <h3>{article.title}</h3>
          <p>{article.abstract}</p>
          <Link to={`/${article.title}`}>
            <button>See more details</button>
          </Link>
        </div>
      )
    })
  }

  return (
    <section>
      <Navbar news={ news } setCurrentArticles={ setCurrentArticles }/>
      { stories() }
    </section>
  )
}

export default Home