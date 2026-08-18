import { Bot, User } from "lucide-react";

/* This page displays one user or AI message */

function Message({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`message-row ${isUser ? "user-row" : "ai-row"}`}>
      {/* AI avatar */}

      {!isUser && (
        <div className="chat-avatar ai-avatar">
          <Bot size={18} />
        </div>
      )}

      <div className="message-wrapper">
        <div className={`chat-bubble ${isUser ? "user-bubble" : "ai-bubble"}`}>
          <div className="message-text">{message.content}</div>
        </div>

        <div className={`message-time ${isUser ? "user-time" : ""}`}>
          {isUser ? "You" : "DSA.AI"}
        </div>
      </div>

      {/* User avatar */}

      {isUser && (
        <div className="chat-avatar user-avatar">
          <User size={17} />
        </div>
      )}
    </div>
  );
}

export default Message;
