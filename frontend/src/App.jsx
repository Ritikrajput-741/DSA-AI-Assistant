import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import InputBox from "./components/InputBox";

function App() {
  const [messages, setMessages] = useState([]);

  const [question, setQuestion] = useState("");

  const [loading, setLoading] = useState(false);

  // --> 
  
  const sendQuestion = async () => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || loading) {
      return;
    }

    // User message
    const userMessage = {
      role: "user",
      content: trimmedQuestion,
    };

    setMessages((prev) => [...prev, userMessage]);

    setQuestion("");

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

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      const aiMessage = {
        role: "assistant",
        content: data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.log(error);

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

  return (
    <div className="app">
      <Sidebar onNewChat={newChat} />

      <main className="main">
        <header className="header">
          <div>🧠 DSA Mentor</div>
        </header>

        <Chat messages={messages} loading={loading} />

        <InputBox
          question={question}
          setQuestion={setQuestion}
          onSubmit={sendQuestion}
          loading={loading}
        />
      </main>
    </div>
  );
}

export default App;
