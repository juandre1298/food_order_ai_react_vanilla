import { useState, useEffect } from "react";
import ChatbotIcon from "./components/Chatboticon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = (history) =>{
    console.log(history)
  }

  return <div className="container">
    <div className="chatbot-popup">
      <div className="chat-header">
        {/* chatbot header */}
        <div className="header-info">
          < ChatbotIcon />
          <h2 className="logo-text">
            chatbot
          </h2>
        </div>
        <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
      </div>
      {/* chatbot body  */}
      <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there
              <br />
              how can I help you today?
            </p>
          </div>
          {chatHistory.map((chat,index)=>(
            <ChatMessage chat={chat} key = {index} />)
          )}
        </div>
        {/* chatbot footer */}
        <div className="chat-footer">
          < ChatForm chatHistory = {chatHistory} setChatHistory = {setChatHistory} generateBotResponse = {generateBotResponse} /> 
        </div>
    </div>
    </div>
}

export default App;