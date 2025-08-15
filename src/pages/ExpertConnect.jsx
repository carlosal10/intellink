import React, { useState } from "react";
import { FaGlobe, FaClipboardCheck, FaRocket } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTranslate from "../hooks/useTranslate";
import "./ExpertConnect.css";

const Section = ({ title, children }) => (
  <section className="ec-section">
    {title && <h3 className="ec-section-title">{title}</h3>}
    {children}
  </section>
);

export default function ExpertConnect() {
  const t = useTranslate("expertConnect") || {};
  const isLoading = !t?.title && !t?.tagline;

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://intellink-8w9t.onrender.com/api/expert-connect",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to submit form");

      toast.success("Your application has been submitted successfully, we're reviewing it.", {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData({ name: "", email: "", expertise: "", message: "" });
      setTimeout(() => setShowForm(false), 500); // smooth close after toast
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
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

        <Section title={t?.whatIs?.title}>
          <p>{t?.whatIs?.description}</p>
          <ul className="ec-list">
            {t?.whatIs?.points?.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </Section>

        <Section title={t?.expect?.title}>
          <div className="ec-grid">
            {t?.expect?.points?.map((item, idx) => (
              <div key={idx} className="ec-card">
                <FaClipboardCheck className="ec-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t?.howItWorks?.title}>
          <ol className="ec-steps">
            {t?.howItWorks?.steps?.map((step, idx) => (
              <li key={idx}>
                <strong>{step.title}:</strong> {step.desc}
              </li>
            ))}
          </ol>
        </Section>

        <Section title={t?.whyItMatters?.title}>
          <div className="ec-grid">
            {t?.whyItMatters?.points?.map((point, idx) => (
              <div key={idx} className="ec-card">
                <p>{point}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t?.register?.title}>
          <p>{t?.register?.description}</p>
          <h4>{t?.register?.whoTitle}</h4>
          <ul className="ec-list">
            {t?.register?.whoPoints?.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <h4>{t?.register?.howTitle}</h4>
          <p>{t?.register?.howDescription}</p>
        </Section>

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

        {/* Application Form - Animated */}
        {showForm && (
          <div className="ec-form-container slide-down">
            <h3>Join Expert Connect</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="expertise"
                placeholder="Your Expertise"
                value={formData.expertise}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Tell us more..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="ec-btn-submit">
                Submit Application
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </section>
  );
}
