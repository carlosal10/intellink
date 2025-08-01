import express from 'express';
import multer from 'multer';
import path from 'path';
import nodemailer from 'nodemailer';
import Recruitment from '../models/Recruitment.js';

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, 'uploads/'),
  filename: (_, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

const transporter = nodemailer.createTransport({
  service: 'Gmail', // or your SMTP provider
  auth: {
    user: process.env.MAIL_USER, // set in .env
    pass: process.env.MAIL_PASS,
  },
});

router.post(
  '/',
  upload.fields([
    { name: 'cv', maxCount: 1 },
    { name: 'coverLetter', maxCount: 1 },
  ]),
  async (req, res) => {
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
        },
      });

      await doc.save();

      // Send email to admin
      const mailOptions = {
        from: process.env.MAIL_USER,
        to: 'admin@intellink-nippon.co.jp', // Replace with actual admin email
        subject: `New Recruitment Application from ${body.fullName}`,
        text: `
A new candidate has submitted their application.

Name: ${body.fullName}
Email: ${body.email}
Phone: ${body.phone}
Position Interested: ${body.position}
Experience: ${body.yearsExperience} years

View full record in the admin panel.
        `,
        attachments: [
          ...(cvFile ? [{ filename: cvFile.originalname, path: cvFile.path }] : []),
          ...(coverLetterFile ? [{ filename: coverLetterFile.originalname, path: coverLetterFile.path }] : []),
        ],
      };

      await transporter.sendMail(mailOptions);

      // Optionally, confirmation email to applicant
      const confirmationMail = {
        from: 'Intellink Recruitment <' + process.env.MAIL_USER + '>',
        to: body.email,
        subject: 'Application Received — Intellink Nippon Consulting',
        html: `
<p>Dear ${body.fullName},</p>
<p>Thank you for your interest in joining Intellink Nippon Consulting. We have received your application and our team will review it shortly.</p>
<p>We appreciate your time and will contact you if your profile matches our current needs.</p>
<p>Sincerely,<br/>Intellink Recruitment Team</p>
        `,
      };

      await transporter.sendMail(confirmationMail);

      return res.status(200).json({ message: 'Application submitted and email sent.' });
    } catch (error) {
      console.error('Submission error:', error);
      return res.status(500).json({ message: 'Server error. Please try again.' });
    }
  }
);

export default router;
