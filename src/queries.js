const API_KEY = process.env.REACT_APP_API_KEY

const catchError = (response) => {
  if(!response.ok) {
    throw new Error(response.message)
  } else {
    return response.json()
  }
}

export const getFeaturedStories = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
  .then(response => catchError(response))
}

export const getSingleStory = () => {

}