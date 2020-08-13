import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

import wordsToNumbers from 'words-to-numbers'

import NewsCards from './components/NewsCards/NewsCards'
// import classes from '*.module.css';

import useStyles from './styles.js'

const alanKey = process.env.REACT_APP_API_KEY

const App = () => {
  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)
  const classes = useStyles()

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles)
          setActiveArticle(-1)
        } else if (command === 'highlight') {
          setActiveArticle(prevActiveArticle => prevActiveArticle + 1)
        } else if (command === 'open') {
          const parsedNumber =
            number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1]

          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again...')
          } else if (article) {
            window.open(article.url, '_blank')
            alanBtn().playText('Opening...')
          } else {
            alanBtn().playText('Please try that again...')
          }
        }
      }
    })
  }, [])

  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src='https://alan.app/voice/images/branding_page/logo-horizontal/grayscale/alan-logo-horizontal-grayscale.svg?f67bf3352084536120d8a7fa473bf492'
          className={classes.alanLogo}
          alt='alan logo'
        />
      </div>
      {/* <div>{!this.activeArticles.length ? <h2> say go back </h2> : null }</div> */}
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}

export default App
