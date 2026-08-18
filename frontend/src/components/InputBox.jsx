import { Send } from "lucide-react";

/* This page handles user input */

function InputBox({ question, setQuestion, onSubmit, loading }) {
  const handleKeyDown = (e) => {
    // Enter sends the message
    // Shift + Enter creates a new line

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      onSubmit();
    }
  };

  return (
    <div className="input-area">
      <div className="input-box">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask your DSA question..."
          rows={1}
          disabled={loading}
        />

        <button
          className="send-button"
          onClick={onSubmit}
          disabled={loading || !question.trim()}
          aria-label="Send message"
        >
          <Send size={19} />
        </button>
      </div>

      <small>DSA.AI can make mistakes. Verify important solutions.</small>
    </div>
  );
}

export default InputBox;
