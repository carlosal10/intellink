const express = require('express');
const multer = require('multer');
const path = require('path');
const Recruitment = require('../models/Recruitment');

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, 'uploads/'),
  filename: (_, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post('/', upload.fields([
  { name: 'cv', maxCount: 1 },
  { name: 'coverLetter', maxCount: 1 }
]), async (req, res) => {
  try {
    const body = req.body;
    const cvFile = req.files['cv']?.[0];
    const coverLetterFile = req.files['coverLetter']?.[0];

    const doc = new Recruitment({
      personal: {
        fullName: body.fullName,
        dob: body.dob,
        nationality: body.nationality,
        email: body.email,
        phone: body.phone,
        location: body.location,
        linkedin: body.linkedin,
      },
      professional: {
        currentEmployer: body.currentEmployer,
        yearsExperience: body.yearsExperience,
        industry: body.industry,
        education: body.education,
        certifications: body.certifications,
        languages: body.languages,
      },
      interest: {
        position: body.position,
        arrangement: body.arrangement,
        startDate: body.startDate,
        compensation: body.compensation,
        travel: body.travel,
      },
      skills: {
        expertise: body.expertise,
        tools: body.tools,
        projects: body.projects,
        publications: body.publications,
      },
      alignment: {
        missionInterest: body.missionInterest,
        valueAlignment: body.valueAlignment,
        crossCultureExperience: body.crossCultureExperience,
      },
      files: {
        cv: cvFile ? `/uploads/${cvFile.filename}` : null,
        coverLetter: coverLetterFile ? `/uploads/${coverLetterFile.filename}` : null,
      },
      legal: {
        consent: body.consent === 'true',
        declaration: body.declaration === 'true',
      }
    });

    await doc.save();

    return res.status(200).json({ message: 'Application submitted successfully.' });
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ message: 'Server error. Please try again.' });
  }
});

module.exports = router;
