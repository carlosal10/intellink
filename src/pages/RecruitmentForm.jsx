import React, { useState } from 'react';
import {
  FaUserAlt, FaBriefcase, FaGlobe, FaBullseye,
  FaHandshake, FaPaperclip, FaLock
} from 'react-icons/fa';
import './RecruitmentForm.css';

export default function RecruitmentForm() {
  const [form, setForm] = useState({
    fullName: '', dob: '', nationality: '', email: '', phone: '', location: '',
    linkedin: '', currentEmployer: '', yearsExperience: '', industry: '',
    education: '', certifications: '', languages: '', position: '',
    arrangement: '', startDate: '', compensation: '', travel: '',
    expertise: '', tools: '', projects: '', publications: '',
    missionInterest: '', valueAlignment: '', crossCultureExperience: '',
    consent: false, declaration: false
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

      // Append all text fields
      Object.entries(form).forEach(([key, val]) => {
        formData.append(key, val);
      });

      // Append files
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
    <div className="recruitment-form-wrapper">
      <form onSubmit={handleSubmit} className="recruitment-form" encType="multipart/form-data">
        <h1><FaGlobe style={{ marginRight: '8px' }} /> Intellink Nippon Consulting — Recruitment Form</h1>
        <p className="intro">Join our global mission. Help shape impactful cross-border business.</p>

        {/* Personal Information */}
        <fieldset>
          <legend><FaUserAlt /> Personal Information</legend>
          <input name="fullName" placeholder="Full Name" required onChange={handleChange} />
          <input type="date" name="dob" required onChange={handleChange} />
          <input name="nationality" placeholder="Nationality" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <input name="location" placeholder="Location (City, Country)" required onChange={handleChange} />
          <input name="linkedin" placeholder="LinkedIn / Website / Portfolio" onChange={handleChange} />
        </fieldset>

        {/* Professional Background */}
        <fieldset>
          <legend><FaBriefcase /> Professional Background</legend>
          <input name="currentEmployer" placeholder="Current Employer & Position" onChange={handleChange} />
          <input name="yearsExperience" placeholder="Total Years of Experience" onChange={handleChange} />
          <input name="industry" placeholder="Industry Expertise" onChange={handleChange} />
          <input name="education" placeholder="Education & Degrees" onChange={handleChange} />
          <input name="certifications" placeholder="Professional Certifications" onChange={handleChange} />
          <input name="languages" placeholder="Languages Spoken" onChange={handleChange} />
        </fieldset>

        {/* Role Interest */}
        <fieldset>
          <legend><FaGlobe /> Role Interest & Availability</legend>
          <input name="position" placeholder="Position Applying For" onChange={handleChange} />
          <select name="arrangement" onChange={handleChange}>
            <option value="">Preferred Work Arrangement</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Onsite in Tokyo</option>
          </select>
          <input type="date" name="startDate" onChange={handleChange} />
          <input name="compensation" placeholder="Expected Compensation Range (optional)" onChange={handleChange} />
          <select name="travel" onChange={handleChange}>
            <option value="">Willingness to Travel</option>
            <option>Yes</option>
            <option>No</option>
            <option>Occasionally</option>
          </select>
        </fieldset>

        {/* Skills */}
        <fieldset>
          <legend><FaBullseye /> Skills & Capabilities</legend>
          <textarea name="expertise" placeholder="Key Areas of Expertise" onChange={handleChange} />
          <input name="tools" placeholder="Software / Tools Familiarity" onChange={handleChange} />
          <textarea name="projects" placeholder="Relevant Projects or Achievements" onChange={handleChange} />
          <textarea name="publications" placeholder="Publications / Research / Articles" onChange={handleChange} />
        </fieldset>

        {/* Mission Alignment */}
        <fieldset>
          <legend><FaHandshake /> Alignment with Intellink’s Mission</legend>
          <textarea name="missionInterest" placeholder="What interests you about Intellink’s mission?" onChange={handleChange} />
          <textarea name="valueAlignment" placeholder="How do your values align with ours?" onChange={handleChange} />
          <textarea name="crossCultureExperience" placeholder="Share a cross-cultural experience" onChange={handleChange} />
        </fieldset>

        {/* Supporting Documents */}
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
          <textarea name="references" placeholder="References (optional)" onChange={handleChange} />
        </fieldset>

        {/* Consent */}
        <fieldset className="consent-section">
          <legend><FaLock /> Consent & Declaration</legend>
          <label>
            <input type="checkbox" name="declaration" required onChange={handleChange} />
            I confirm that all provided information is accurate and truthful.
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
