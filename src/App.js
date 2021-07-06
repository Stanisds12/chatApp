import React from 'react';
import { ChatEngine, ChatFeed, IsTyping } from 'react-chat-engine';
//import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';
import './App.css';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <>
      <Nav/>
    <ChatEngine
      height="100vh"
      projectID="38739f7a-c321-46cc-a261-3a7b05996085"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        renderIsTyping={(typers) => <IsTyping />}
      />
      </>
  );
}

export default App;
