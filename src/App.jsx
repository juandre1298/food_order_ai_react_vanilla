import ChatbotIcon from "./components/Chatboticon";


const App = () => {
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
          <div className="message user-message">
            <p className="message-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus rem natus, optio harum minus at? Eaque, esse sed! Est aspernatur magni ut dolorum praesentium adipisci tempore corporis enim nisi!
            </p>
          </div>
        </div>
        {/* chatbot footer */}
        <div className="chat-footer">
            <form action="#" className="chat-form">
                <input type="text" placeholder="Message..." className="message-input" required />
                <button className="material-symbols-rounded">
                  arrow_upward
                </button>
            </form>
        </div>
    </div>
    </div>
}

export default App;