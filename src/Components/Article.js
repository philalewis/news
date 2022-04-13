import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Article = ({ news }) => {
  const [ article, setArticle ] = useState()
  const params = useParams()
  
  useEffect(() => {
    const currentArticle = news.find(art => {
      return art.title = params.headline
    })
    console.log(currentArticle)
    setArticle(currentArticle)
  }, [])

  const formatDate = (date) => {
    
  }

  return (
    <section>
      <h2>{article.title}</h2>
      {/* <p>{article.byline}</p> */}
      <p></p>
    </section>
  )
}

export default Article