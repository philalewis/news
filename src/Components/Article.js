import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getFeaturedStories } from '../queries'
import '../Styles/Article.css'

const Article = () => {
  const [ article, setArticle ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getFeaturedStories()
    .then(data => {
      const currentArticle = data.results.find(art => {
        return art.title === params.headline
      })
      setArticle(currentArticle)
      setLoading(false)
    })
    .catch(error => console.log(error))
  }, [])

  const formatDate = (date) => {
    const published = date.split('T')[0]
    const splitDate = published.split('-')
    return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <>
      <header className="navbar-container">
        <h1 className="header-home" onClick={goHome}>Today's News</h1>
      </header>
      {/* {console.log(article)} */}
      {!loading &&
        <section className="article-container">
          <h2 className="article-headline" >{ article.title }</h2>
          <p className="article-byline" >{ article.byline }</p>
          <p className="published-date" >{ formatDate(article.published_date) }</p>
          <p className="article-abstract" >{ article.abstract }</p>
        </section>
      }
    </>
  )
}

export default Article