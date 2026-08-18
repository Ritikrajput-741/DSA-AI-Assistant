import { Send } from "lucide-react";

function InputBox({ question, setQuestion, onSubmit, loading }) {
  const handleKeyDown = (e) => {
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
          rows="1"
        />

        <button onClick={onSubmit} disabled={loading || !question.trim()}>
          <Send size={19} />
        </button>
      </div>

      <small>DSA.AI can make mistakes. Verify important solutions.</small>
    </div>
  );
}

export default InputBox;
