import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

import NewsCards from './components/NewsCards/NewsCards';
// import classes from '*.module.css';

import useStyles from './styles.js'

const alanKey = '4c09eaf59fa1dd15e14b29dbc403c4502e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([])
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, [])

    return (
        <div> 
            <div className={classes.logoContainer}> <img src="https://alan.app/voice/images/branding_page/logo-horizontal/grayscale/alan-logo-horizontal-grayscale.svg?f67bf3352084536120d8a7fa473bf492" className={classes.alanLogo} alt="alan logo"/></div>
            <NewsCards articles={newsArticles}/>
        </div>
    )
}

export default App;