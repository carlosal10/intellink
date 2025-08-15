import React, { useState } from "react";
import { FaGlobe, FaClipboardCheck, FaRocket } from "react-icons/fa";
import useTranslate from "../hooks/useTranslate";
import "./ExpertConnect.css";

const Section = ({ title, children }) => (
  <section className="ec-section">
    {title && <h3 className="ec-section-title">{title}</h3>}
    {children}
  </section>
);

export default function ExpertConnect() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    reason: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const t = useTranslate("expertConnect") || {};
  const isLoading = !t?.title && !t?.tagline;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("https://intellink-8w9t.onrender.com/api/expert-connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit application");

      setSuccessMsg("✅ Application submitted successfully!");
      setFormData({ name: "", email: "", expertise: "", reason: "" });
    } catch (err) {
      setErrorMsg("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="expert-connect-section">
      {isLoading && (
        <div className="ec-loading">
          <p>Loading content...</p>
        </div>
      )}

      {/* Hero */}
      <div
        className="ec-hero"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div className="ec-hero-overlay">
          <div className="ec-hero-content">
            <h1>
              <FaGlobe /> {t?.title || ""}
            </h1>
            <h2>{t?.tagline || ""}</h2>
            <p>{t?.heroDescription || ""}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="ec-container">
        <Section>
          <p>{t?.intro || ""}</p>
        </Section>

        {/* ... existing sections ... */}

        {/* CTA */}
        <div className="ec-cta">
          <FaRocket className="ec-icon-large" />
          <h3>{t?.cta?.title}</h3>
          <p>{t?.cta?.text}</p>
          <button
            className="ec-btn"
            onClick={() => setShowForm(!showForm)}
          >
            {t?.cta?.button}
          </button>
        </div>

        {/* Application Form */}
        <div className={`ec-form-wrapper ${showForm ? "show" : ""}`}>
          {showForm && (
            <div className="ec-form">
              <form onSubmit={handleSubmit}>
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </label>
                <label>
                  Email Address
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </label>
                <label>
                  Expertise Area
                  <input
                    type="text"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    placeholder="Your expertise"
                    required
                  />
                </label>
                <label>
                  Why do you want to join?
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Tell us why"
                    required
                  ></textarea>
                </label>
                <button type="submit" className="ec-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>

              {successMsg && <p className="ec-success">{successMsg}</p>}
              {errorMsg && <p className="ec-error">{errorMsg}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
