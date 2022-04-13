import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = ({ news }) => {

  const stories = () => {
    return news.map(article => {
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
      <Navbar />
      { stories() }
    </section>
  )
}

export default Home