import { useEffect, useRef } from "react";

import { Bot } from "lucide-react";

import Message from "./Message";

/* This page displays the chat and welcome screen */

function ThinkingMessage() {
  return (
    <div className="message-row ai-row">
      <div className="chat-avatar ai-avatar">
        <Bot size={18} />
      </div>

      <div className="message-wrapper">
        <div className="chat-bubble ai-bubble thinking-bubble">
          <div className="thinking-content">
            <div className="thinking-icon">
              <Bot size={16} />
            </div>

            <span>Thinking</span>

            <div className="thinking-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="message-time">DSA.AI</div>
      </div>
    </div>
  );
}

function Welcome({ onSuggestion }) {
  return (
    <div className="welcome">
      <div className="welcome-icon">
        <Bot size={34} />
      </div>

      <h1>
        Master DSA with
        <span> AI</span>
      </h1>

      <p>Your personal AI assistant for Data Structures & Algorithms.</p>

      <div className="suggestions">
        <button onClick={() => onSuggestion("What is Binary Search?")}>
          What is Binary Search?
        </button>

        <button onClick={() => onSuggestion("Explain Two Sum")}>
          Explain Two Sum
        </button>

        <button onClick={() => onSuggestion("What is Big O?")}>
          What is Big O?
        </button>
      </div>
    </div>
  );
}

function Chat({ messages, loading, onSuggestion }) {
  const bottomRef = useRef(null);

  // Automatically scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  if (messages.length === 0) {
    return <Welcome onSuggestion={onSuggestion} />;
  }

  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}

      {loading && <ThinkingMessage />}

      <div ref={bottomRef} />
    </div>
  );
}

export default Chat;
