import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { getFeaturedStories } from '../queries'
import '../Styles/Home.css'

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
        <div className="story-container" key={article.url}>
          <h3 className="headline" >{article.title}</h3>
          <p className="abstract" >{article.abstract}</p>
          <Link to={`/${article.title}`}>
            <button className="details-btn">View Article</button>
          </Link>
        </div>
      )
    })
  }

  return (
    <section>
      <Navbar news={ news } setCurrentArticles={ setCurrentArticles }/>
      <div className="top-stories">
        { stories() }
      </div>
    </section>
  )
}

export default Home