import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'
import './App.css'

import React from 'react'

const App = () => {

    if(!localStorage.getItem('username')) 
        return <LoginForm />

    return (
        <ChatEngine 
            height = "100vh"
            projectID = "abaa23d9-33ab-42ea-847a-2c502b0994e2"
            userName={localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;