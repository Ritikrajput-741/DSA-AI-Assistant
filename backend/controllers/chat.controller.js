import { generateResponse } from "../services/gemini.service.js";

export const chatController = async (req, res) => {
  try {
    const { question } = req.body;

    // Check question
    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    // Gemini service call
    const answer = await generateResponse(question);

    return res.status(200).json({
      success: true,
      answer,
    });
  } catch (error) {
    console.log("Chat Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
