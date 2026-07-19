import React from 'react';
import './App.css';
import { MessageHistory } from './components/MessageHistory/MessageHistory';
import { messages } from './components/data/data';

function App() {
  return (
  <div className="chat-container">
    <MessageHistory list={messages} />
  </div>
  );
}

export default App;