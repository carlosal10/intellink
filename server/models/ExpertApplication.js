// models/ExpertApplication.js
import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    originalname: String,
    filename: String,
    mimetype: String,
    size: Number,
    path: String,   // local storage path if using disk
    url: String,    // public URL if you expose /uploads statically
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true },
    role: { type: String, trim: true },
    description: { type: String, trim: true },
  },
  { _id: false }
);

const expertApplicationSchema = new mongoose.Schema(
  {
    // Section 1: Personal Information
    firstName: { type: String, trim: true, required: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, trim: true, required: true },
    dateOfBirth: { type: Date },
    gender: {
      type: String,
      enum: ["Male", "Female", "Non-binary", "Prefer not to say", ""],
      default: "",
    },
    nationality: { type: String, trim: true },
    country: { type: String, trim: true },
    city: { type: String, trim: true },

    // Section 2: Contact Information
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: { type: String, trim: true },
    linkedin: { type: String, trim: true },
    preferredContact: {
      type: String,
      enum: ["Email", "Phone", "WhatsApp", "LinkedIn"],
      default: "Email",
    },

    // Section 3: Professional Background
    jobTitle: { type: String, trim: true },
    employer: { type: String, trim: true },
    yearsExperience: { type: Number, min: 0 },
    yearsSpecialization: { type: Number, min: 0 },
    availability: [{ type: String, trim: true }], // Full-time, Part-time, etc.

    // Section 4: Areas of Expertise
    industrySectors: [{ type: String, trim: true }],
    functionalExpertise: [{ type: String, trim: true }],
    regionExpertise: [{ type: String, trim: true }],
    keySkills: [{ type: String, trim: true }],

    // Section 5: Qualifications & Credentials
    highestAcademicQualification: { type: String, trim: true },
    certifications: [{ type: String, trim: true }],
    languages: [{ type: String, trim: true }],

    // Section 6: Experience Portfolio
    projects: [projectSchema],
    publications: [{ type: String, trim: true }],
    references: [{ type: String, trim: true }],

    // Section 7: Engagement Preferences
    workArrangement: {
      type: String,
      enum: ["On-site", "Remote", "Hybrid", ""],
      default: "Remote",
    },
    expectedRate: { type: String, trim: true }, // keep string (currency formats vary)
    willingToTravel: {
      type: String,
      enum: ["Yes", "No", ""],
      default: "No",
    },
    travelRegions: { type: String, trim: true },
    noticePeriod: { type: String, trim: true },

    // Section 8: Supporting Documents
    resume: fileSchema,
    portfolioFiles: [fileSchema],

    // Section 9: Consent & Declaration
    consentShareProfile: { type: Boolean, default: false },
    declarationAccurate: { type: Boolean, default: false },

    // Misc
    dateSubmitted: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("ExpertApplication", expertApplicationSchema);
