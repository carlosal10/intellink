// routes/expertConnect.js
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import ExpertApplication from "../models/ExpertApplication.js";

const router = express.Router();

/** ───────────── Storage (disk) ─────────────
 * If you're deploying to a place without persistent disk, swap this to S3/GCS.
 */
const uploadDir = path.join(process.cwd(), "uploads", "expert-connect");
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
    cb(null, `${Date.now()}__${safe}`);
  },
});
const upload = multer({ storage });

/** Util: normalize files from multer.any() */
function mapFile(f) {
  if (!f) return undefined;
  return {
    originalname: f.originalname,
    filename: f.filename,
    mimetype: f.mimetype,
    size: f.size,
    path: f.path,
    // If you expose uploads statically: app.use("/uploads", express.static("uploads"))
    url: `/uploads/expert-connect/${f.filename}`,
  };
}

/** Validation helpers (keep lightweight; frontend already does per-step) */
function validate(data) {
  const errors = {};

  if (!data.firstName) errors.firstName = "First name is required";
  if (!data.lastName) errors.lastName = "Last name is required";
  if (!data.email) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Invalid email";

  // Match front-end: these must be checked by the user
  if (data.consentShareProfile !== true)
    errors.consentShareProfile = "Consent is required";
  if (data.declarationAccurate !== true)
    errors.declarationAccurate = "Declaration is required";

  return errors;
}

/** POST /api/expert-connect
 * Supports:
 *  - application/json  (no files)
 *  - multipart/form-data with:
 *      - field  : data (JSON string of the form fields)
 *      - files  : resume (single), portfolio_1..N (any)
 */
router.post("/", upload.any(), async (req, res) => {
  try {
    let payload = req.body;

    // If multipart with a JSON blob in 'data', parse it
    if (req.is("multipart/form-data")) {
      if (req.body.data) {
        try {
          payload = JSON.parse(req.body.data);
        } catch {
          return res.status(400).json({ message: "Invalid JSON in 'data' field" });
        }
      }
    }

    // Basic normalization
    const data = {
      ...payload,
      // coerce numerics safely if they come as strings
      yearsExperience:
        payload?.yearsExperience === "" || payload?.yearsExperience == null
          ? undefined
          : Number(payload.yearsExperience),
      yearsSpecialization:
        payload?.yearsSpecialization === "" || payload?.yearsSpecialization == null
          ? undefined
          : Number(payload.yearsSpecialization),
    };

    // Files (if any): resume (exact match) + portfolio_* (prefix)
    let resumeFile;
    const portfolioFiles = [];

    if (Array.isArray(req.files) && req.files.length) {
      for (const f of req.files) {
        if (f.fieldname === "resume") resumeFile = f;
        if (f.fieldname.startsWith("portfolio_")) portfolioFiles.push(f);
      }
    }

    // Attach file metadata if present
    if (resumeFile) data.resume = mapFile(resumeFile);
    if (portfolioFiles.length) data.portfolioFiles = portfolioFiles.map(mapFile);

    // Server-side validation (aligned with the wizard’s last step)
    const errors = validate(data);
    if (Object.keys(errors).length) {
      return res.status(400).json({ message: "Validation error", errors });
    }

    const application = new ExpertApplication(data);
    await application.save();

    return res
      .status(201)
      .json({ message: "Application submitted successfully, we're reviewing it." });
  } catch (err) {
    console.error("expert-connect error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
