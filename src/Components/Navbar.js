import React, { useState, useEffect } from 'react'
import '../Styles/Navbar.css'

const Navbar = ({ news, setCurrentArticles }) => {
  const [ dropdown, setDropdown ] = useState([])

  useEffect(() => {
    const sections = []
    news.forEach(article => {
      !sections.includes(article.section) && sections.push(article.section)
    })
    setDropdown(sections)
  }, [news])

  const populateOptions = () => {
    return dropdown.map(tag => {
      return (
        <option key={tag} value={tag}>{tag}</option>
      )
    })
  }

  const filterStories = event => {
    if (event.target.value === "all") {
      setCurrentArticles(news)
    } else {
      setCurrentArticles(news.filter(article => {
        return article.section === event.target.value
      }))
    }
  }

  return (
    <header className="navbar">
      <h1 className="header">Today's News</h1>
      <select
        className="section-select"
        defaultValue="all"
        onChange={event => filterStories(event)
      }>
        <option value="all">All Stories</option>
        { populateOptions() }
      </select>
    </header>
  )
}

export default Navbar