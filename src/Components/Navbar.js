import React, { useState, useEffect } from 'react'

const Navbar = ({ news }) => {
  const [ currentArticles, setCurrentArticles ] = useState([])
  const [ section, setSection ] = useState([])
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
        <option>{tag}</option>
      )
    })
  }

  return (
    <header>
      <h1>Today's News</h1>
      <select>
        {populateOptions()}
      </select>
    </header>
  )
}

export default Navbar