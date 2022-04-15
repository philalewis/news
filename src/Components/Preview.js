import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Preview.css'

const Preview = ({ article }) => {
  return (
    <div className="story-container" key={article.url}>
      <h3 className="headline" >{article.title}</h3>
      <p className="abstract" >{article.abstract}</p>
      <Link to={`/${article.title}`}>
        <button className="details-btn">View Article</button>
      </Link>
    </div>
  )
}

export default Preview