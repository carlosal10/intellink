// utils/mailer.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER, // e.g., intellink@gmail.com
    pass: process.env.MAIL_PASS,
  },
});

export const sendMail = async ({ to, subject, html }) => {
  const mailOptions = {
    from: `"Intellink Nippon Consulting" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
};
