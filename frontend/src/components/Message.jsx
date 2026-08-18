function Message({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`message ${isUser ? "user-message" : "ai-message"}`}>
      <div className="avatar">{isUser ? "U" : "AI"}</div>

      <div className="message-text">{message.content}</div>
    </div>
  );
}

export default Message;
