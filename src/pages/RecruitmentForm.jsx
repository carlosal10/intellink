import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic goes here (e.g. API call)
    alert('Application submitted successfully!');
  };

  return (
    <div className="recruitment-form-wrapper">
      <form onSubmit={handleSubmit} className="recruitment-form">
        <h1>🌍 Intellink Nippon Consulting — Recruitment Form</h1>
        <p className="intro">
          Join our global mission. Help shape impactful cross-border business.
        </p>

        {/* Section 1: Personal Information */}
        <fieldset>
          <legend>🧾 Personal Information</legend>
          <input name="fullName" placeholder="Full Name" required onChange={handleChange} />
          <input type="date" name="dob" placeholder="Date of Birth" required onChange={handleChange} />
          <input name="nationality" placeholder="Nationality" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <input name="location" placeholder="Location (City, Country)" required onChange={handleChange} />
          <input name="linkedin" placeholder="LinkedIn / Website / Portfolio" onChange={handleChange} />
        </fieldset>

        {/* Section 2: Professional Background */}
        <fieldset>
          <legend>💼 Professional Background</legend>
          <input name="currentEmployer" placeholder="Current Employer & Position" onChange={handleChange} />
          <input name="yearsExperience" placeholder="Total Years of Experience" onChange={handleChange} />
          <input name="industry" placeholder="Industry Expertise" onChange={handleChange} />
          <input name="education" placeholder="Education & Degrees" onChange={handleChange} />
          <input name="certifications" placeholder="Professional Certifications" onChange={handleChange} />
          <input name="languages" placeholder="Languages Spoken" onChange={handleChange} />
        </fieldset>

        {/* Section 3: Role Interest & Availability */}
        <fieldset>
          <legend>🌐 Role Interest & Availability</legend>
          <input name="position" placeholder="Position Applying For" onChange={handleChange} />
          <select name="arrangement" onChange={handleChange}>
            <option value="">Preferred Work Arrangement</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Onsite in Tokyo</option>
          </select>
          <input type="date" name="startDate" placeholder="Desired Start Date" onChange={handleChange} />
          <input name="compensation" placeholder="Expected Compensation Range (optional)" onChange={handleChange} />
          <select name="travel" onChange={handleChange}>
            <option value="">Willingness to Travel</option>
            <option>Yes</option>
            <option>No</option>
            <option>Occasionally</option>
          </select>
        </fieldset>

        {/* Section 4: Skills & Capabilities */}
        <fieldset>
          <legend>🎯 Skills & Capabilities</legend>
          <textarea name="expertise" placeholder="Key Areas of Expertise" onChange={handleChange} />
          <input name="tools" placeholder="Software / Tools Familiarity" onChange={handleChange} />
          <textarea name="projects" placeholder="Relevant Projects or Achievements" onChange={handleChange} />
          <textarea name="publications" placeholder="Publications / Research / Articles" onChange={handleChange} />
        </fieldset>

        {/* Section 5: Mission Alignment */}
        <fieldset>
          <legend>🤝 Alignment with Intellink’s Mission</legend>
          <textarea name="missionInterest" placeholder="What interests you about Intellink’s mission?" onChange={handleChange} />
          <textarea name="valueAlignment" placeholder="How do your values align with ours?" onChange={handleChange} />
          <textarea name="crossCultureExperience" placeholder="Share a cross-cultural experience" onChange={handleChange} />
        </fieldset>

        {/* Section 6: Documents */}
        <fieldset>
          <legend>📎 Supporting Documents</legend>
          <label>Upload CV/Resume <input type="file" accept=".pdf,.doc,.docx" required /></label>
          <label>Upload Cover Letter <input type="file" accept=".pdf,.doc,.docx" /></label>
          <textarea name="references" placeholder="References (optional)" />
        </fieldset>

        {/* Section 7: Consent */}
        <fieldset className="consent-section">
          <legend>🔐 Consent & Declaration</legend>
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
