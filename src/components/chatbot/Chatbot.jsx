import React from "react";
import { useState, useEffect, useRef } from "react";
import { companyInfo } from "./companyInfo"; 
import ChatbotIcon from "./Chatboticon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

const Chatbot = () => {

  const [showChatbot, setShowChatbot] = useState(true);
  
  const [chatHistory, setChatHistory] = useState([{role: "model", text: JSON.stringify(companyInfo) , isError: false, hideMessage: true}]);
  const chatBodyRef = useRef(); 
  const generateBotResponse = async (history) =>{

    const updateHistyory = (text, isError = false) => {
      setChatHistory(prev => [...prev.filter(msg=> msg.text !== 'thinking...'),  {role: "model", text, isError}])
    }
    history = history.map(({role, text}) => ({role, parts:[{text}]}));
    
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent'

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
        "x-goog-api-key" : apiKey
      },
      body: JSON.stringify({contents: history})
    }

    try{
      const response = await fetch(url,requestOptions);
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || "Something went wrong!");
      const apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistyory(apiResponse)
    }catch(error){
      console.error(error)
      updateHistyory(error.message, true)
    }
  }
  useEffect(()=>{
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behaviour: "smooth"});
  },[chatHistory])


  return (
    <div className={`chatbot-container ${showChatbot ? 'show-chatbox' : ''}`}>
      <button onClick={()=>setShowChatbot(prev=>!prev)} id="chatbot-toggler">
        <span className="material-symbols-rounded open">support_agent</span>
        <span className="material-symbols-rounded close">close</span>
      </button>
      <div className="chatbot-popup">
        <div className="chat-header">
          {/* chatbot header */}
          <div className="header-info">
            < ChatbotIcon />
            <h2 className="logo-text">
              chatbot
            </h2>
          </div>
          <button onClick={()=>setShowChatbot(prev=>!prev)} className="material-symbols-rounded">
              keyboard_arrow_down
            </button>
        </div>
        {/* chatbot body  */}
        <div className="chat-body" ref={chatBodyRef}>
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
    </ div>
  )
}

export default Chatbot;
