import express from 'express';
import multer from 'multer';
import path from 'path';
import nodemailer from 'nodemailer';
import Recruitment from '../models/Recruitment.js';

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, 'uploads/'),
  filename: (_, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAIL_USER,
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
      const cvFile = req.files?.['cv']?.[0] || null;
      const coverLetterFile = req.files?.['coverLetter']?.[0] || null;

      // Create and save new recruitment document
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
      const adminMailOptions = {
        from: process.env.MAIL_USER,
        to: 'admin@intellink-nippon.co.jp',
        subject: `New Recruitment Application: ${body.fullName}`,
        html: `
          <p>A new candidate has applied.</p>
          <ul>
            <li><strong>Name:</strong> ${body.fullName}</li>
            <li><strong>Email:</strong> ${body.email}</li>
            <li><strong>Phone:</strong> ${body.phone}</li>
            <li><strong>Position:</strong> ${body.position}</li>
            <li><strong>Experience:</strong> ${body.yearsExperience} years</li>
          </ul>
          <p><strong>CV:</strong> ${cvFile ? `<a href="https://yourdomain.com/uploads/${cvFile.filename}">Download CV</a>` : 'Not uploaded'}</p>
          <p><strong>Cover Letter:</strong> ${coverLetterFile ? `<a href="https://yourdomain.com/uploads/${coverLetterFile.filename}">Download Cover Letter</a>` : 'Not uploaded'}</p>
        `,
        attachments: [
          ...(cvFile ? [{ filename: cvFile.originalname, path: cvFile.path }] : []),
          ...(coverLetterFile ? [{ filename: coverLetterFile.originalname, path: coverLetterFile.path }] : []),
        ],
      };

      await transporter.sendMail(adminMailOptions);

      // Confirmation email to applicant
      const confirmationEmail = {
        from: `Intellink Recruitment <${process.env.MAIL_USER}>`,
        to: body.email,
        subject: 'Application Received — Intellink Nippon Consulting',
        html: `
          <p>Dear ${body.fullName},</p>
          <p>Thank you for applying to Intellink Nippon Consulting.</p>
          <p>Your application has been received. Our team will review it and get back to you if you're shortlisted.</p>
          <p>Warm regards,<br/>Intellink Recruitment Team</p>
        `,
      };

      await transporter.sendMail(confirmationEmail);

      return res.status(200).json({ message: 'Application submitted and emails sent successfully.' });
    } catch (error) {
      console.error('Error during submission:', error);
      return res.status(500).json({ message: 'Internal server error. Please try again later.' });
    }
  }
);

export default router;
