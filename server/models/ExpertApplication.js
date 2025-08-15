// models/ExpertApplication.js
import mongoose from "mongoose";

const expertApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  expertise: { type: String, required: true },
  reason: { type: String, required: true },
  dateSubmitted: { type: Date, default: Date.now },
});

export default mongoose.model("ExpertApplication", expertApplicationSchema);
