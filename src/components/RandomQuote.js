import Axios from 'axios'
import React, { useEffect, useState } from 'react'

/* Generate a random quote via api pull */
const RandomQuote = () => {
  const [comments, setComments] = useState([])

  /*https://www.pluralsight.com/guides/process-an-api-response-in-react*/
  const fetchComments = async () => {
    const response = await Axios(
      'https://my-bao-server.herokuapp.com/api/breadpuns'
    )
    setComments(response.data)
  }

  useEffect(() => {
    fetchComments()
  }, [])
  return <h4>{comments}</h4>
}

export default RandomQuote
