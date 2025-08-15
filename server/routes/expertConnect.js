// routes/expertConnect.js
import express from "express";
import ExpertApplication from "../models/ExpertApplication.js";

const router = express.Router();

// POST /api/expert-connect
router.post("/", async (req, res) => {
  try {
    const { name, email, expertise, reason } = req.body;

    if (!name || !email || !expertise || !reason) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const application = new ExpertApplication({
      name,
      email,
      expertise,
      reason,
    });

    await application.save();

    res.status(201).json({ message: "Application submitted successfully, we're reviewing it." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
