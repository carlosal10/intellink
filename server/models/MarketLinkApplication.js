import mongoose from "mongoose";

const MarketLinkApplicationSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    middleName: { type: String, trim: true },
    surname: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    position: { type: String, trim: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("MarketLinkApplication", MarketLinkApplicationSchema);
