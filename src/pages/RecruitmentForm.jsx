import React, { useState } from "react";
import { FaUserAlt, FaPaperclip, FaLock } from "react-icons/fa";
import useTranslate from "../hooks/useTranslate";
import "./RecruitmentForm.css";

export default function AfricaToJapanRecruitment() {
  const t = useTranslate();

  const [formType, setFormType] = useState('full'); // 'full' or 'intern'
  const [form, setForm] = useState({
    // Shared/Contact
    fullName: "",
    email: "",
    phone: "",
    location: "",
    // Personal
    dob: "",
    gender: "",
    // Education & Qualifications
    educationLevel: "",
    educationOther: "",
    fieldOfStudy: "",
    certifications: "",
    // Work Experience
    currentEmployer: "",
    jobTitle: "",
    experienceYears: "",
    keySkills: "",
    projectExperience: "",
    // Languages & Technical
    languages: "",
    softwareSkills: "",
    // Job Preferences
    position: "",
    workType: "",
    startDate: "",
    motivation: "",
    // References
    refName: "",
    refRelation: "",
    refContact: "",
    // Links
    linkedin: "",
    // Internship/Graduate subset
    ig_level: "",
    ig_fieldOfStudy: "",
    ig_graduationDate: "",
    ig_keySkills: "",
    ig_languages: "",
    ig_software: "",
    ig_prefWorkType: "",
    ig_startDate: "",
    ig_motivation: "",
    // Confirmations
    declaration: false,
    consent: false,
  });

  const [files, setFiles] = useState({ cv: null, coverLetter: null });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles((prev) => ({ ...prev, [name]: fileList[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('formType', formType);
      Object.entries(form).forEach(([key, val]) => {
        if (val !== undefined && val !== null) formData.append(key, val);
      });
      if (files.cv) formData.append("cv", files.cv);
      if (files.coverLetter) formData.append("coverLetter", files.coverLetter);

      const res = await fetch("https://intellink-8w9t.onrender.com/api/recruitment", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      const confirmMsg = formType === 'full'
        ? "Thank you for applying to Intellink Nippon Consulting. We will review your submission and contact you if your profile matches an available opportunity."
        : "Thank you for applying! We will review your submission and contact you regarding suitable internship or junior opportunities.";
      alert(data.message || confirmMsg);
    } catch (err) {
      console.error(err);
      alert("Error submitting application. Please try again.");
    }
  };

  return (
    <div className="aj-shell">
      {/* ===== HERO (Image #1) ===== */}
      <section className="aj-hero">
        <video
          src="images/careers.mp4"
          alt="Business meeting"
          loading="lazy"
          autoPlay
          muted
          loop
          playsInline
          className="aj-hero-media"
        />

        
        <div className="aj-hero-overlay" />
        <div className="aj-hero-inner">
          <span className="aj-chip">Africa ⇄ Japan</span>
          <h1 className="aj-title">
            {t("careers.hero.header") || "Global Careers. Enduring Impact."}
          </h1>
          <p className="aj-sub">
            {t("careers.hero.tagline") ||
              "We place exceptional talent on high-value projects across Africa and Japan."}
          </p>
          <div className="aj-cta-row">
            <button onClick={() => { setFormType('full'); setShowForm(true); }} className="aj-btn aj-btn-primary">
              {t("careers.ctaSection.button") || "Apply Now"}
            </button>
            <button onClick={() => { setFormType('intern'); setShowForm(true); }} className="aj-btn aj-btn-ghost">Apply for Internship / Graduate</button>
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW (Card) ===== */}
      <section id="overview" className="aj-section">
        <div className="aj-container">
          <div className="aj-card aj-card-soft">
            <h2 className="aj-h2">{t("careers.overview.title") || "Overview"}</h2>
            <p className="aj-lead">{t("careers.overview.text")}</p>
          </div>
        </div>
      </section>

      {/* ===== IMAGE SPLIT (Image #2) ===== */}
      <section className="aj-section">
        <div className="aj-container aj-split">
          <div className="aj-split-media">
            <video
              src="images/careers0.mp4"
              alt="Advisory collaboration"
              loading="lazy"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="aj-split-content">
            <h3 className="aj-h3">Bridge Markets. Multiply Opportunity.</h3>
            <p className="aj-body">
              We match talent and teams to pressing business needs across two dynamic regions—enabling
              market entry, product localization, capital readiness, and operational excellence.
            </p>
            <button className="aj-link" onClick={() => setShowForm(true)}>Start your application →</button>
          </div>
        </div>
      </section>

      {/* ===== CARDS: Why Work With Us ===== */}
      <section className="aj-section">
        <div className="aj-container">
          <h2 className="aj-h2">{t("careers.whyWorkWithUs.title") || "Why Work With Us"}</h2>
          <div className="aj-grid">
            {(t("careers.whyWorkWithUs.points") || []).map((p, i) => (
              <div className="aj-card" key={`why-${i}`}>
                <p className="aj-body">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CARDS: Industries ===== */}
      <section className="aj-section aj-section-alt">
        <div className="aj-container">
          <h2 className="aj-h2">{t("careers.industries.title") || "Industries"}</h2>
          <div className="aj-grid">
            {(t("careers.industries.points") || []).map((p, i) => (
              <div className="aj-card aj-card-soft" key={`ind-${i}`}>
                <p className="aj-body">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== WIDE IMAGE (Image #3) ===== */}
      <section className="aj-banner">
        <video
          src="images/careers1.mp4"
          alt="Strategy workshop"
          loading="lazy"
          autoPlay
          muted
          loop
          playsInline
          className="aj-banner-media"
        />
        <div className="aj-banner-overlay">
          <p className="aj-banner-text">Where ambition meets execution.</p>
        </div>
      </section>

      {/* ===== CARDS: Positions ===== */}
      <section className="aj-section aj-section-alt">
        <div className="aj-container">
          <h2 className="aj-h2">{t("careers.positions.title") || "Positions"}</h2>
          <div className="aj-grid">
            {(t("careers.positions.sampleRoles") || []).map((p, i) => (
              <div className="aj-card aj-card-soft" key={`pos-${i}`}>
                <p className="aj-body">{p}</p>
              </div>
            ))}
          </div>
          <p className="aj-note">{t("careers.positions.note")}</p>
        </div>
      </section>

      {/* ===== CARDS: Ideal Candidates ===== */}
      <section className="aj-section">
        <div className="aj-container">
          <h2 className="aj-h2">{t("careers.idealCandidates.title") || "Ideal Candidates"}</h2>
          <div className="aj-grid">
            {(t("careers.idealCandidates.points") || []).map((p, i) => (
              <div className="aj-card" key={`ideal-${i}`}>
                <p className="aj-body">{p}</p>
              </div>
            ))}
          </div>

          <div className="aj-cta-stack">
            <p className="aj-body-strong">{t("careers.ctaSection.text")}</p>
            <button onClick={() => setShowForm(!showForm)} className="aj-btn aj-btn-primary" id="apply">
              {t("careers.ctaSection.button") || "Apply Now"}
            </button>
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM (inline) ===== */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="aj-form"
          encType="multipart/form-data"
          aria-labelledby="appFormTitle"
        >
          <h2 id="appFormTitle" className="aj-form-title">
            <FaUserAlt /> {formType === 'full' ? 'Join Our Team – Application Form' : 'Internship / Graduate Program Positions'}
          </h2>
          {formType === 'full' ? (
            <p className="aj-lead">We are excited that you are interested in joining Intellink Nippon Consulting. Please complete the form below to apply for a position. All information will be treated confidentially.</p>
          ) : (
            <p className="aj-lead">Interested in joining our team? Complete this short form to apply for internship or graduate programs opportunities.</p>
          )}

          {formType === 'full' ? (
            <>
              <fieldset className="aj-fieldset">
                <legend>Section 1: Personal Information</legend>
                <div className="aj-form-grid">
                  <input type="text" name="fullName" placeholder="Full Name" autoComplete="name" required onChange={handleChange} />
                  <input type="date" name="dob" placeholder="Date of Birth (Optional)" onChange={handleChange} />
                  <div>
                    <label className="aj-body" style={{display:'block', marginBottom:6}}>Gender (Optional)</label>
                    <select name="gender" onChange={handleChange}>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                  <input type="email" name="email" placeholder="Email Address" autoComplete="email" required onChange={handleChange} />
                  <input type="tel" name="phone" placeholder="Phone Number" autoComplete="tel" required onChange={handleChange} />
                  <input type="text" name="location" placeholder="Current Location (City, Country)" autoComplete="address-level2" required onChange={handleChange} />
                  <input type="url" name="linkedin" placeholder="LinkedIn / Website / Portfolio (Optional)" onChange={handleChange} />
                </div>
              </fieldset>

              <fieldset className="aj-fieldset">
                <legend>Section 2: Education & Qualifications</legend>
                <div className="aj-form-grid">
                  <div>
                    <label className="aj-body" style={{display:'block', marginBottom:6}}>Highest Level of Education</label>
                    <select name="educationLevel" required onChange={handleChange}>
                      <option value="">Select Level</option>
                      <option>High School</option>
                      <option>Bachelor’s Degree</option>
                      <option>Master’s Degree</option>
                      <option>Doctorate</option>
                      <option>Other</option>
                    </select>
                  </div>
                  {form.educationLevel === 'Other' && (
                    <input type="text" name="educationOther" placeholder="Please specify (Other)" onChange={handleChange} />
                  )}
                  <input type="text" name="fieldOfStudy" placeholder="Field of Study / Major" required onChange={handleChange} />
                  <textarea name="certifications" rows={3} placeholder="Relevant Certifications (Optional)" onChange={handleChange} />
                </div>
              </fieldset>

              <fieldset className="aj-fieldset">
                <legend>Section 3: Work Experience</legend>
                <div className="aj-form-grid">
                  <input type="text" name="currentEmployer" placeholder="Current / Most Recent Employer" required onChange={handleChange} />
                  <input type="text" name="jobTitle" placeholder="Job Title" required onChange={handleChange} />
                  <div>
                    <label className="aj-body" style={{display:'block', marginBottom:6}}>Years of Experience</label>
                    <select name="experienceYears" required onChange={handleChange}>
                      <option value="">Select</option>
                      <option>0–2 years</option>
                      <option>3–5 years</option>
                      <option>6–10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                  <textarea name="keySkills" rows={4} placeholder="Key Skills & Expertise" required onChange={handleChange} />
                  <textarea name="projectExperience" rows={4} placeholder="Relevant Project or Work Experience (Optional)" onChange={handleChange} />
                </div>
              </fieldset>

              <fieldset className="aj-fieldset">
                <legend>Section 4: Language & Technical Skills</legend>
                <div className="aj-form-grid">
                  <textarea name="languages" rows={3} placeholder="Languages Spoken / Proficiency" required onChange={handleChange} />
                  <textarea name="softwareSkills" rows={3} placeholder="Technical / Software Skills (Optional)" onChange={handleChange} />
                </div>
              </fieldset>

              <fieldset className="aj-fieldset">
                <legend>Section 5: Job Preferences</legend>
                <div className="aj-form-grid">
                  <input type="text" name="position" placeholder="Position Applied For" required onChange={handleChange} />
                  <div>
                    <label className="aj-body" style={{display:'block', marginBottom:6}}>Preferred Work Type</label>
                    <select name="workType" required onChange={handleChange}>
                      <option value="">Select</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Internship / Graduate Program</option>
                    </select>
                  </div>
                  <input type="date" name="startDate" placeholder="Available Start Date" required onChange={handleChange} />
                  <textarea name="motivation" rows={4} placeholder="Motivation / Cover Letter – Briefly explain why you want to join Intellink Nippon Consulting and what you can contribute." required onChange={handleChange} />
                </div>
              </fieldset>

              <fieldset className="aj-fieldset">
                <legend>Section 6: References (Optional)</legend>
                <div className="aj-form-grid">
                  <input type="text" name="refName" placeholder="Reference Name" onChange={handleChange} />
                  <input type="text" name="refRelation" placeholder="Relationship / Position" onChange={handleChange} />
                  <input type="text" name="refContact" placeholder="Contact Information (Email / Phone)" onChange={handleChange} />
                </div>
              </fieldset>
            </>
          ) : (
            <>
              <fieldset className="aj-fieldset">
                <legend>Section 1: Personal Information</legend>
                <div className="aj-form-grid">
                  <input type="text" name="fullName" placeholder="Full Name" autoComplete="name" required onChange={handleChange} />
                  <input type="email" name="email" placeholder="Email Address" autoComplete="email" required onChange={handleChange} />
                  <input type="tel" name="phone" placeholder="Phone Number" autoComplete="tel" required onChange={handleChange} />
                  <input type="text" name="location" placeholder="Current Location (City, Country)" autoComplete="address-level2" required onChange={handleChange} />
                </div>
              </fieldset>

              <fieldset className="aj-fieldset">
                <legend>Section 2: Education</legend>
                <div className="aj-form-grid">
                  <div>
                    <label className="aj-body" style={{display:'block', marginBottom:6}}>Current Level / Program of Study</label>
                    <select name="ig_level" required onChange={handleChange}>
                      <option value="">Select Level</option>
                      <option>High School</option>
                      <option>Undergraduate Student</option>
                      <option>Graduate Student</option>
                      <option>Recent Graduate (within 1 year)</option>
                    </select>
                  </div>
                  <input type="text" name="ig_fieldOfStudy" placeholder="Field of Study / Major" required onChange={handleChange} />
                  <input type="date" name="ig_graduationDate" placeholder="Expected Graduation Date (Optional)" onChange={handleChange} />
                </div>
              </fieldset>

              <fieldset className="aj-fieldset">
                <legend>Section 3: Skills & Interests</legend>
                <div className="aj-form-grid">
                  <textarea name="ig_keySkills" rows={3} placeholder="Key Skills or Areas of Interest" required onChange={handleChange} />
                  <input type="text" name="ig_languages" placeholder="Languages Spoken (Optional)" onChange={handleChange} />
                  <input type="text" name="ig_software" placeholder="Software / Technical Skills (Optional)" onChange={handleChange} />
                </div>
              </fieldset>

              <fieldset className="aj-fieldset">
                <legend>Section 4: Availability & Motivation</legend>
                <div className="aj-form-grid">
                  <div>
                    <label className="aj-body" style={{display:'block', marginBottom:6}}>Preferred Work Type</label>
                    <select name="ig_prefWorkType" required onChange={handleChange}>
                      <option value="">Select</option>
                      <option>Internship (Short-term, 1–3 months)</option>
                      <option>Part-time / Flexible</option>
                      <option>Full-time (for recent graduates)</option>
                    </select>
                  </div>
                  <input type="date" name="ig_startDate" placeholder="Available Start Date" required onChange={handleChange} />
                  <textarea name="ig_motivation" rows={4} placeholder="Brief Motivation / Cover Note – Tell us why you want to join Intellink Nippon Consulting and what you hope to learn or contribute." required onChange={handleChange} />
                </div>
              </fieldset>
            </>
          )}

          <fieldset className="aj-fieldset">
            <legend><FaPaperclip /> Supporting Documents</legend>
            <div className="aj-uploaders">
              <label className="aj-file">
                <span>Upload CV/Resume</span>
                <input type="file" name="cv" accept=".pdf,.doc,.docx" required onChange={handleFileChange} />
              </label>
              <label className="aj-file">
                <span>Upload Cover Letter</span>
                <input type="file" name="coverLetter" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
              </label>
            </div>
          </fieldset>

          <fieldset className="aj-fieldset">
            <legend><FaLock /> Consent</legend>
            <label className="aj-check">
              <input type="checkbox" name="declaration" required onChange={handleChange} />
              I confirm all provided information is accurate.
            </label>
            <label className="aj-check">
              <input type="checkbox" name="consent" required onChange={handleChange} />
              I consent to the processing of my data in accordance with Intellink’s privacy policy.
            </label>
          </fieldset>

          <button type="submit" className="aj-btn aj-btn-primary aj-btn-block">Submit Application</button>
        </form>
      )}
    </div>
  );
}
