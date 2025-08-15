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
