import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Preview from './Preview'
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
        <Preview article={article} key={article.title}/>
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