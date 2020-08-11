import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = '4c09eaf59fa1dd15e14b29dbc403c4502e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    console.log(articles);
                }
            }
        })
    }, [])

    return (
        <div> 
            <h1> Alan AI News App.</h1>
        </div>
    )
}

export default App;