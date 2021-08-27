import { ChatEngine } from 'react-chat-engine';
import './App.css'

import React from 'react'

const App = () => {
    return (
        <ChatEngine 
            height = "100vh"
            projectID = "abaa23d9-33ab-42ea-847a-2c502b0994e2"
            useerName="Gourab"
            userSecret = "12345678"
        />
    );
}

export default App;