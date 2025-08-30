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
  const [submitting, setSubmitting] = useState(false);

  // ---- image helpers & filenames (ensure these files exist under public/images) ----
  const pickImage = (arr, idx) => `/images/${arr[idx % arr.length]}`;
  const onImgError = (e) => {
    e.currentTarget.src = "/images/placeholder.jpg"; // add a placeholder image here
  };

  const WHY_IMAGES = [
    "isto-88.jpg",
    "ist612.jpg",
    "ist94.jpg",
    "ist12.jpg",
    "istockphoto-16.jpg",
    "istockphoto-15.jpg",
  ];

  const INDUSTRY_IMAGES = [
    "istockphoto-3.jpg",
    "istockphoto-10.jpg",
    "istockphoto-6.jpg",
    "istockphoto-12.jpg",
    "istockphoto-8.jpg",
    "istockphoto-10.jpg",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles((prev) => ({ ...prev, [name]: fileList?.[0] || null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
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
      alert(data?.message || "Application submitted!");
      // optional: light reset
      setForm((prev) => ({ ...prev, linkedin: "" }));
      setFiles({ cv: null, coverLetter: null });
    } catch (err) {
      console.error(err);
      alert("Error submitting application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Safely read arrays from translations
  const why = t("careers.whyWorkWithUs.points", { returnObjects: true }) || [];
  const industries = t("careers.industries.points", { returnObjects: true }) || [];
  const capabilities = t("careers.capabilities.points", { returnObjects: true }) || [];
  const positions = t("careers.positions.sampleRoles", { returnObjects: true }) || [];

  return (
    <div className="africa-japan-page">
      {/* HERO with image background */}
      <section
        className="recruitment-hero"
        style={{ backgroundImage: "url('/images/CareerPageWhyworkWithUs.jpg')" }}
        aria-label="Careers hero"
      >
        <div className="r-hero-overlay">
          <h1 className="r-hero-title">{t("careers.hero.header")}</h1>
          <p className="r-hero-tagline">{t("careers.hero.tagline")}</p>
        </div>
      </section>

      <main className="careers-page max-w-6xl mx-auto px-4 sm:px-6">
        {/* Overview — text + image */}
        <section className="r-section r-split">
          <div className="r-media">
            <img src="/images/io.jpg" alt="Intellink overview" loading="lazy" onError={onImgError} />
          </div>
          <div className="r-content">
            <h2 className="r-h2">{t("careers.overview.title")}</h2>
            <p className="r-p">{t("careers.overview.text")}</p>
          </div>
        </section>

        {/* Why Work With Us — image-backed cards */}
        <section className="r-section">
          <h2 className="r-h2">{t("careers.whyWorkWithUs.title")}</h2>
          <div className="r-card-grid">
            {why.map((point, idx) => (
              <article className="r-card" key={`why-${idx}`}>
                <div className="r-card-media">
                  <img
                    src={pickImage(WHY_IMAGES, idx)}
                    alt="Why work with us"
                    loading="lazy"
                    onError={onImgError}
                  />
                </div>
                <div className="r-card-body">
                  <p>{point}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Industries — mosaic */}
        <section className="r-section">
          <h2 className="r-h2">{t("careers.industries.title")}</h2>
          <div className="r-mosaic">
            {industries.map((item, idx) => (
              <div className="r-mosaic-item" key={`ind-${idx}`}>
                <img
                  src={pickImage(INDUSTRY_IMAGES, idx)}
                  alt={item}
                  loading="lazy"
                  onError={onImgError}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities — image + pill list */}
        <section className="r-section r-split reverse">
          <div className="r-media">
            <img src="/images/ist94.jpg" alt="Capabilities" loading="lazy" onError={onImgError} />
          </div>
          <div className="r-content">
            <h2 className="r-h2">{t("careers.capabilities.title")}</h2>
            <ul className="r-pills">
              {capabilities.map((cap, idx) => (
                <li className="r-pill" key={`cap-${idx}`}>{cap}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Positions — compact cards */}
        <section className="r-section">
          <h2 className="r-h2">{t("careers.positions.title")}</h2>
          <div className="r-compact-cards">
            {positions.map((role, idx) => (
              <div className="r-compact-card" key={`role-${idx}`}>
                <img
                  src={pickImage(WHY_IMAGES, idx)} // reuse set or create dedicated array
                  alt="Role visual"
                  loading="lazy"
                  onError={onImgError}
                />
                <h3>{role}</h3>
              </div>
            ))}
          </div>
          <p className="r-note">{t("careers.positions.note")}</p>
        </section>

        {/* CTA — bold image background */}
        <section className="r-cta" style={{ backgroundImage: "url('/images/ist12.jpg')" }}>
          <div className="r-cta-overlay">
            <p className="r-cta-text">{t("careers.ctaSection.text")}</p>
            <button
              type="button"
              className="r-btn r-btn-primary"
              onClick={() => setShowForm((s) => !s)}
              aria-expanded={showForm}
              aria-controls="recruitment-form"
            >
              {t("careers.ctaSection.button")}
            </button>
          </div>
        </section>

        {/* FORM — appears when toggled */}
        {showForm && (
          <form
            id="recruitment-form"
            onSubmit={handleSubmit}
            className="recruitment-form"
            encType="multipart/form-data"
          >
            <h2 className="r-form-title">
              <FaUserAlt /> Application Form
            </h2>

            <fieldset>
              <legend>Personal Information</legend>
              <div className="r-grid-2">
                <input name="fullName" placeholder="Full Name" required onChange={handleChange} />
                <input type="date" name="dob" required onChange={handleChange} />
              </div>
              <div className="r-grid-2">
                <input name="nationality" placeholder="Nationality" required onChange={handleChange} />
                <input name="location" placeholder="Location (City, Country)" required onChange={handleChange} />
              </div>
              <div className="r-grid-2">
                <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
                <input name="phone" placeholder="Phone Number" required onChange={handleChange} />
              </div>
              <input name="linkedin" placeholder="LinkedIn / Website / Portfolio" onChange={handleChange} />
            </fieldset>

            <fieldset>
              <legend><FaPaperclip /> Supporting Documents</legend>
              <label className="r-file">
                <span>Upload CV/Resume</span>
                <input type="file" name="cv" accept=".pdf,.doc,.docx" required onChange={handleFileChange} />
              </label>
              <label className="r-file">
                <span>Upload Cover Letter</span>
                <input type="file" name="coverLetter" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
              </label>
            </fieldset>

            <fieldset>
              <legend><FaLock /> Consent</legend>
              <label className="r-check">
                <input type="checkbox" name="declaration" required onChange={handleChange} />
                <span>I confirm all provided information is accurate.</span>
              </label>
              <label className="r-check">
                <input type="checkbox" name="consent" required onChange={handleChange} />
                <span>I consent to the processing of my data in accordance with Intellink’s privacy policy.</span>
              </label>
            </fieldset>

            <button type="submit" className="r-btn r-btn-accent" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
