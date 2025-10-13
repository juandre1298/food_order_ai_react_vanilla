import React, { useState, useEffect, useRef } from "react";
import { companyInfo } from "../../ai/companyInfo"; 
import ChatbotIcon from "./Chatboticon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { generateBotResponse } from "../../ai/aiControlller";
import {sanetizeAiAnswer} from "../../helpers"
import { handleIntent } from "../../controllers/orderController";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(true);
  const [chatHistory, setChatHistory] = useState([
    { role: "model", text: JSON.stringify(companyInfo), isError: false, hideMessage: true }
  ]);
  const chatBodyRef = useRef(); 

  const updateHistory = (text, isError = false) => {
    setChatHistory(prev => [
      ...prev.filter(msg => msg.text !== 'thinking...'),
      { role: "model", text, isError }
    ]);
  };

  useEffect(() => {

    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth"
      });
    }

    const lastMessage = chatHistory[chatHistory.length - 1];

    if (!lastMessage || lastMessage.role !== "user") return;

    generateBotResponse(chatHistory).then((res) => {
      const aiResponse = sanetizeAiAnswer(res.ans)

      if(aiResponse.message){
        updateHistory(aiResponse.message);
      }
      if(aiResponse.intent){
        handleIntent(aiResponse.intent)
      }
    }).catch(err => {
      updateHistory("Something wrong happend :(, please try again", true)
      console.error("Error: " + err.message);
    });

  }, [chatHistory]);

  return (
    <div className={`chatbot-container ${showChatbot ? 'show-chatbox' : ''}`}>
      <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
        <span className="material-symbols-rounded open">support_agent</span>
        <span className="material-symbols-rounded close">close</span>
      </button>
      <div className="chatbot-popup">
        <div className="chat-header" onClick={() => setShowChatbot(prev => !prev)}>
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

        <div className="chat-body" ref={chatBodyRef}>
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              👋 Hi there! Welcome to McDonald's Automac. What can I get started for you today?
            </p>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage chat={chat} key={index} />
          ))}
        </div>

        <div className="chat-footer">
          <ChatForm 
            chatHistory={chatHistory} 
            setChatHistory={setChatHistory} 
            generateBotResponse={generateBotResponse} 
          /> 
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
