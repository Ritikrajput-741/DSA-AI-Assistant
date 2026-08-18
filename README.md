# 🧠 DSA.AI — AI-Powered DSA Learning Assistant

DSA.AI is a simple AI-powered assistant built for learning and practicing Data Structures and Algorithms.

I built this project to understand how Generative AI APIs can be integrated into a full-stack JavaScript application. Users can ask DSA questions, get explanations, solve problems, receive hints, debug code, and understand time and space complexity.

The frontend provides a clean chat-based interface, while the backend handles communication with the Google Gemini API.

---

## ✨ Features

- 🧠 DSA-focused AI Assistant
- 📚 Learn DSA concepts
- 💡 Get hints for problems
- 🧩 Solve DSA coding problems
- 🐛 Debug DSA code
- 💻 Get code examples
- 🔍 Understand algorithms
- ⏱️ Time & Space Complexity analysis
- 💬 Interactive chat interface
- ⚡ AI thinking animation
- 🎯 DSA topic suggestions
- 🚫 Redirects non-DSA questions
- 📱 Responsive UI
- 🔄 New Chat functionality

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- CSS
- Lucide React

### Backend

- Node.js
- Express.js
- REST API
- JavaScript

### AI

- Google Gemini API

### Deployment

- Vercel — Frontend
- Render — Backend

---

## 🏗️ Project Architecture

```text
                    User
                      │
                      ▼
              React Frontend
                  (Vercel)
                      │
                  HTTP API
                      │
                      ▼
             Node.js + Express
                  (Render)
                      │
                      ▼
              Gemini Service
                      │
                      ▼
              Google Gemini API
                      │
                      ▼
                 AI Response
                      │
                      ▼
              React Chat UI
