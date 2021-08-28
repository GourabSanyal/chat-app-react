import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'

import React from 'react'

const App = () => {
    return (
        <ChatEngine 
            height = "100vh"
            projectID = "abaa23d9-33ab-42ea-847a-2c502b0994e2"
            userName="Gourab"
            userSecret = "12345678"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;