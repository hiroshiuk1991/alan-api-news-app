import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '4c09eaf59fa1dd15e14b29dbc403c4502e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([])

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
            <h1> Alan AI News App.</h1>
            <NewsCards articles={newsArticles}/>
        </div>
    )
}

export default App;