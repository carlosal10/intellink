import React, { useState } from "react";
import { FaUserAlt, FaPaperclip, FaLock } from "react-icons/fa";
import useTranslate from "../hooks/useTranslate";
import "./RecruitmentForm.css";

export default function AfricaToJapanRecruitment() {
  const t = useTranslate();

  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    nationality: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
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
      Object.entries(form).forEach(([key, val]) => formData.append(key, val));
      if (files.cv) formData.append("cv", files.cv);
      if (files.coverLetter) formData.append("coverLetter", files.coverLetter);

      const res = await fetch("https://intellink-8w9t.onrender.com/api/recruitment", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Error submitting application. Please try again.");
    }
  };

  return (
    <div className="aj-shell">
      {/* ===== HERO (Image #1) ===== */}
      <header
        className="aj-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
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
            <button onClick={() => setShowForm(true)} className="aj-btn aj-btn-primary">
              {t("careers.ctaSection.button") || "Apply Now"}
            </button>
            <a href="#overview" className="aj-btn aj-btn-ghost">Learn more</a>
          </div>
        </div>
      </header>

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
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1400&auto=format&fit=crop"
              alt="Advisory collaboration"
              loading="lazy"
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

      {/* ===== CARDS: Capabilities ===== */}
      <section className="aj-section">
        <div className="aj-container">
          <h2 className="aj-h2">{t("careers.capabilities.title") || "Capabilities"}</h2>
          <div className="aj-grid">
            {(t("careers.capabilities.points") || []).map((p, i) => (
              <div className="aj-card" key={`cap-${i}`}>
                <p className="aj-body">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WIDE IMAGE (Image #3) ===== */}
      <section className="aj-banner">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
          alt="Strategy workshop"
          loading="lazy"
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
            <FaUserAlt /> Application Form
          </h2>

          <fieldset className="aj-fieldset">
            <legend>Personal Information</legend>
            <div className="aj-form-grid">
              <input name="fullName" placeholder="Full Name" required onChange={handleChange} />
              <input type="date" name="dob" required onChange={handleChange} />
              <input name="nationality" placeholder="Nationality" required onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
              <input name="phone" placeholder="Phone Number" required onChange={handleChange} />
              <input name="location" placeholder="Location (City, Country)" required onChange={handleChange} />
              <input name="linkedin" placeholder="LinkedIn / Website / Portfolio" onChange={handleChange} />
            </div>
          </fieldset>

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
