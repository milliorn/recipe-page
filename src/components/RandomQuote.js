import React, { useEffect, useState } from 'react'
import quotesData from '../assets/data/quotes.json'

const RandomQuote = () => {
  const [quote, setQuote] = useState({ author: '', quote: '' })

  useEffect(() => {
    // Function to select a random quote safely
    const getRandomQuote = () => {
      if (!quotesData?.quotes?.length) {
        return { author: 'Unknown', quote: 'No quote available.' }
      }
      const randomIndex = Math.floor(Math.random() * quotesData.quotes.length)
      return quotesData.quotes[randomIndex]
    }

    setQuote(getRandomQuote())
  }, [])

  return (
    <div className="quote-container">
      <h4 className="quote-text">
        {quote.quote}
        <span className="quote-author"> - {quote.author}</span>
      </h4>
    </div>
  )
}

export default RandomQuote
