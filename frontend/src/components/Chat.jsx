import Message from "./Message";

function Chat({ messages, loading }) {
  if (messages.length === 0) {
    return (
      <div className="welcome">
        <div className="welcome-icon">🧠</div>

        <h1>
          Master DSA with
          <span> AI</span>
        </h1>

        <p>Your simple AI assistant for Data Structures & Algorithms.</p>

        <div className="suggestions">
          <div>What is Binary Search?</div>

          <div>Explain Two Sum</div>

          <div>What is Big O?</div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}

      {loading && (
        <div className="message ai-message">
          <div className="avatar">AI</div>

          <div className="message-text typing">Thinking...</div>
        </div>
      )}
    </div>
  );
}

export default Chat;
