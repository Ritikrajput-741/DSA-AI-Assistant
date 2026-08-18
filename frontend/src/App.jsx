import { useState } from "react";

import Chat from "./components/Chat";
import InputBox from "./components/InputBox";
import Sidebar from "./components/Sidebar";

function App() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const sendQuestion = async (customQuestion = null) => {
    const trimmedQuestion = (customQuestion ?? question).trim();

    if (!trimmedQuestion || loading) {
      return;
    }

    // User message
    const userMessage = {
      role: "user",
      content: trimmedQuestion,
    };

    // Show user message immediately
    setMessages((prev) => [...prev, userMessage]);

    // Clear input
    setQuestion("");

    // Show thinking UI
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          question: trimmedQuestion,
        }),
      });

      const data = await response.json();

      // Backend error
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // AI message
      const aiMessage = {
        role: "assistant",
        content: data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Frontend Chat Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const newChat = () => {
    setMessages([]);
    setQuestion("");
  };

  const handleSuggestion = (text) => {
    sendQuestion(text);
  };

  return (
    <div className="app">
      <Sidebar onNewChat={newChat} />

      <main className="main">
        {/* HEADER */}

        <header className="header">
          <div className="header-left">
            <div className="header-icon">🧠</div>

            <div>
              <div className="header-title">DSA Mentor</div>

              <div className="header-status">
                <span></span>
                AI Online
              </div>
            </div>
          </div>
        </header>

        {/* CHAT */}

        <Chat
          messages={messages}
          loading={loading}
          onSuggestion={handleSuggestion}
        />

        {/* INPUT */}

        <InputBox
          question={question}
          setQuestion={setQuestion}
          onSubmit={() => sendQuestion()}
          loading={loading}
        />
      </main>
    </div>
  );
}

export default App;
