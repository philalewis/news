import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFeaturedStories } from '../queries'

const Article = () => {
  const [ article, setArticle ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const params = useParams()

  useEffect(() => {
    getFeaturedStories()
    .then(data => {
      const currentArticle = data.results.find(art => {
        return art.title = params.headline
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

  return (
    <>
      {!loading &&
        <section>
          <h2>{ article.title }</h2>
          <p>{ article.byline }</p>
          <p>{ formatDate(article.published_date) }</p>
          <p>{ article.abstract }</p>
        </section>
      }
    </>
  )
}

export default Article