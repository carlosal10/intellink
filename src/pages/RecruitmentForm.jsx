import React, { useState } from 'react';
import {
  FaUserAlt, FaGlobe, FaPaperclip, FaLock,
  FaChartLine, FaHandshake, FaTags, FaBriefcase
} from 'react-icons/fa';
import './RecruitmentForm.css';

export default function AfricaToJapanRecruitment() {
  const [form, setForm] = useState({
    fullName: '', dob: '', nationality: '', email: '', phone: '', location: '',
    linkedin: '', declaration: false, consent: false
  });
  const [files, setFiles] = useState({ cv: null, coverLetter: null });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles(prev => ({ ...prev, [name]: fileList[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => formData.append(key, val));
      if (files.cv) formData.append('cv', files.cv);
      if (files.coverLetter) formData.append('coverLetter', files.coverLetter);

      const res = await fetch('https://intellink-8w9t.onrender.com/api/recruitment', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert('Error submitting application. Please try again.');
    }
  };

  return (
    <div className="africa-japan-page">

      {/* HERO */}
      <section className="aj-hero">
        <div className="aj-hero-overlay">
          <h1><FaGlobe /> Africa to Japan</h1>
          <p>Enabling African innovators to access the Japanese market.</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="aj-overview">
        <p>
          While Japan is renowned for its technology, precision, and consumer trust,
          it remains largely untapped by many African producers, entrepreneurs, and innovators.
          <strong> Intellink Nippon Consulting</strong> helps African enterprises break through
          structural, informational, and cultural barriers—with insight, access, and partnership facilitation.
        </p>
      </section>

      {/* WHY JAPAN */}
      <section className="aj-why">
        <h2>Why Japan Matters</h2>
        <ul>
          <li>High-income consumer market with a taste for innovation and uniqueness.</li>
          <li>Strong tradition of valuing quality, sustainability, and social impact.</li>
          <li>Advanced technology and manufacturing ecosystems.</li>
          <li>Global networks in green tech, health, food, and lifestyle sectors.</li>
        </ul>
      </section>

      {/* SERVICES */}
      <section className="aj-services">
        <h2>How We Help</h2>
        <div className="aj-service-grid">
          <div><FaChartLine /> Market Access & Opportunity Scouting</div>
          <div><FaHandshake /> Partner & Investor Matchmaking</div>
          <div><FaTags /> Product Positioning & Compliance</div>
          <div><FaBriefcase /> Trade Events & Showcases</div>
        </div>
      </section>

      {/* WHO CAN BENEFIT */}
      <section className="aj-beneficiaries">
        <h2>Who Can Benefit?</h2>
        <p>
          Agro-processors, fashion designers, cleantech innovators, artisan brands, tech startups,
          and social enterprises ready to explore Japan’s potential.
        </p>
      </section>

      {/* RECRUITMENT INTRO */}
      <section className="aj-recruitment">
        <h2>Join Our Team</h2>
        <p>
          We are building bridges between Japan and Africa. Whether you’re in international trade,
          market research, supply chain, or sector-specific expertise, your skills can shape global business.
        </p>
        <h3>Current Openings</h3>
        <ul>
          <li>Market Research Associates (Tokyo / Remote)</li>
          <li>B2B Matchmaking Consultants (Africa or Japan-based)</li>
          <li>Interns / Fellows – International Trade & Investment</li>
          <li>Sector Experts (Freelance / Retainer Basis)</li>
        </ul>
      </section>

      {/* APPLICATION FORM */}
      <form onSubmit={handleSubmit} className="recruitment-form" encType="multipart/form-data">
        <h2><FaUserAlt /> Application Form</h2>

        <fieldset>
          <legend>Personal Information</legend>
          <input name="fullName" placeholder="Full Name" required onChange={handleChange} />
          <input type="date" name="dob" required onChange={handleChange} />
          <input name="nationality" placeholder="Nationality" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <input name="location" placeholder="Location (City, Country)" required onChange={handleChange} />
          <input name="linkedin" placeholder="LinkedIn / Website / Portfolio" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend><FaPaperclip /> Supporting Documents</legend>
          <label>
            Upload CV/Resume
            <input type="file" name="cv" accept=".pdf,.doc,.docx" required onChange={handleFileChange} />
          </label>
          <label>
            Upload Cover Letter
            <input type="file" name="coverLetter" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
          </label>
        </fieldset>

        <fieldset>
          <legend><FaLock /> Consent</legend>
          <label>
            <input type="checkbox" name="declaration" required onChange={handleChange} />
            I confirm all provided information is accurate.
          </label>
          <label>
            <input type="checkbox" name="consent" required onChange={handleChange} />
            I consent to the processing of my data in accordance with Intellink’s privacy policy.
          </label>
        </fieldset>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
}
