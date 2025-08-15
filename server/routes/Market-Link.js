// routes/marketlink.js
import express from "express";
import MarketLinkApplication from "../models/MarketLinkApplication.js";

const router = express.Router();

// POST /api/marketlink
router.post("/", async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      surname,
      email,
      phone,
      position,
      message,
    } = req.body;

    if (!firstName || !surname || !email) {
      return res.status(400).json({ error: "First name, surname, and email are required" });
    }

    const newApplication = new MarketLinkApplication({
      firstName,
      middleName,
      surname,
      email,
      phone,
      position,
      message,
    });

    await newApplication.save();

    res.status(201).json({ message: "Application submitted successfully" });
  } catch (err) {
    console.error("Error saving application:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
