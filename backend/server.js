import "dotenv/config";

import cors from "cors";
import express from "express";

import chatRoutes from "./routes/chat.routes.js";

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "https://dsa-ai-assistant-kappa.vercel.app",
    methods: ["POST", "GET"],
    credentials: true,
  }),
);

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "DSA AI Backend is running 🚀",
  });
});

// Chat route
app.use("/api/chat", chatRoutes);

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
