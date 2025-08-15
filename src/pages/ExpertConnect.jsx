import React, { useState, useRef } from "react";
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
  const t = useTranslate("expertConnect") || {};
  const isLoading = !t?.title && !t?.tagline;

  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleShowForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
          <button className="ec-btn" onClick={handleShowForm}>
            {t?.cta?.button}
          </button>
        </div>

        {/* Application Form */}
        {showForm && (
          <Section title="Expert Connect Application Form">
            <div ref={formRef} className="ec-form">
              <form>
                <label>
                  Full Name:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email Address:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Area of Expertise:
                  <input type="text" name="expertise" required />
                </label>
                <label>
                  Why do you want to join?
                  <textarea name="reason" required></textarea>
                </label>
                <button type="submit" className="ec-btn">
                  Submit Application
                </button>
              </form>
            </div>
          </Section>
        )}
      </div>
    </section>
  );
}
