import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardCheck,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTranslate from "../hooks/useTranslate";
import "./ExpertConnect.css";

export default function ExpertConnectPage() {
  const t = useTranslate("expertConnect") || {};
  const isLoading = !t?.title && !t?.tagline;

  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target || {};
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://intellink-8w9t.onrender.com/api/expert-connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit form");
      toast.success(
        "Your application has been submitted successfully. We're reviewing it.",
        { position: "top-right", autoClose: 3000 }
      );
      setFormData({ name: "", email: "", expertise: "", message: "" });
      setTimeout(() => setShowForm(false), 500);
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="ec-shell">
      {isLoading && (
        <div className="ec-loading">
          <div className="spinner" />
          <p>Loading content...</p>
        </div>
      )}

      {/* HERO */}
      <section
        className="ec-hero"
        style={{
          backgroundImage:
            "url('/images/expert-hero.jpg'), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="ec-hero-overlay">
          <div className="ec-hero-chip">ExpertConnect™</div>
          <h1 className="ec-hero-title">{t?.title || ""}</h1>
          <p className="ec-hero-sub">{t?.tagline || ""}</p>
          <p className="ec-hero-desc">{t?.heroDescription || ""}</p>
          <div className="ec-hero-cta">
            <Link to="/contact" className="btn btn-outline">
              {t?.cta?.alt || "Contact Us"}
            </Link>
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(true)}
            >
              Request an Expert <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="ec-hero-fade" />
      </section>

      {/* INTRO */}
      {t?.intro && (
        <section className="ec-section ec-intro">
          <div className="ec-container">
            <div className="ec-intro-card glass">
              <h3 className="ec-h3">{t?.whatIs?.title || "What is ExpertConnect?"}</h3>
              <p>{t?.intro}</p>
            </div>
          </div>
        </section>
      )}

      {/* WHAT IS */}
      {t?.whatIs && (
        <section className="ec-section">
          <div className="ec-container ec-split">
            <div className="ec-split-media">
              <img
                src="/images/ExpertConnect.jpg"
                alt="What is ExpertConnect"
                onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                loading="lazy"
              />
            </div>
            <div className="ec-split-content">
              <h3 className="ec-h3">{t.whatIs.title}</h3>
              <p className="ec-lead">{t.whatIs.description}</p>
              <ul className="ec-list">
                {(t.whatIs.points || []).map((p, i) => (
                  <li key={i}>
                    <FaCheckCircle /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* WHAT TO EXPECT */}
      {t?.expect && (
        <section className="ec-section ec-section-alt">
          <div className="ec-container">
            <div className="ec-section-head">
              <h3 className="ec-h3">{t.expect.title}</h3>
              <p className="ec-sub">
                {t?.expect?.subtitle ||
                  "A curated experience from brief to engagement."}
              </p>
            </div>
            <div className="ec-grid">
              {(t.expect.points || []).map((p, i) => (
                <div className="ec-card" key={`expect-${i}`}>
                  <div className="ec-card-icon">
                    <FaClipboardCheck />
                  </div>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS (timeline) */}
      {t?.howItWorks && (
        <section className="ec-section">
          <div className="ec-container">
            <div className="ec-section-head">
              <h3 className="ec-h3">{t.howItWorks.title}</h3>
            </div>
            <ol className="ec-steps">
              {(t.howItWorks.steps || []).map((step, i) => (
                <li className="ec-step" key={`step-${i}`}>
                  <div className="ec-step-num">{i + 1}</div>
                  <div className="ec-step-body">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* WHY IT MATTERS */}
      {t?.whyItMatters && (
        <section className="ec-section ec-section-alt">
          <div className="ec-container">
            <div className="ec-section-head">
              <h3 className="ec-h3">{t.whyItMatters.title}</h3>
            </div>
            <div className="ec-grid ec-grid-3">
              {(t.whyItMatters.points || []).map((p, i) => (
                <div className="ec-card ec-card-soft" key={`why-${i}`}>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REGISTER */}
      {t?.register && (
        <section className="ec-section">
          <div className="ec-container ec-split reverse">
            <div className="ec-split-media">
              <img
                src="/images/istockphoto-4.avif"
                alt="Register as expert"
                onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                loading="lazy"
              />
            </div>
            <div className="ec-split-content">
              <h3 className="ec-h3">{t.register.title}</h3>
              <p className="ec-lead">{t.register.description}</p>

              <div className="ec-bulks">
                <div>
                  <h4>{t.register.whoTitle}</h4>
                  <ul className="ec-list">
                    {(t.register.whoPoints || []).map((p, i) => (
                      <li key={i}>
                        <FaCheckCircle /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>{t.register.howTitle}</h4>
                  <p>{t.register.howDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="ec-cta">
        <div className="ec-cta-inner">
          <div className="ec-cta-left">
            <FaRocket />
            <div>
              <h3>{t?.cta?.title || "Ready to move faster?"}</h3>
              <p>{t?.cta?.subtitle || "Tap into vetted market expertise on demand."}</p>
            </div>
          </div>
          <div className="ec-cta-right">
            <button className="btn btn-primary" onClick={() => setShowForm(true)}>
              Request an Expert
            </button>
            <Link to="/contact" className="btn btn-outline">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL FORM */}
      {showForm && (
        <div className="ec-modal" role="dialog" aria-modal="true">
          <div className="ec-modal-backdrop" onClick={() => setShowForm(false)} />
          <div className="ec-modal-card">
            <button
              className="ec-modal-close"
              aria-label="Close"
              onClick={() => setShowForm(false)}
            >
              <FaTimes />
            </button>
            <h3 className="ec-modal-title">ExpertConnect Application</h3>
            <form onSubmit={handleSubmit} className="ec-form">
              <div className="ec-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Haruto Akira"
                  required
                />
              </div>
              <div className="ec-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Haruto@company.com"
                  required
                />
              </div>
              <div className="ec-field">
                <label htmlFor="expertise">Your Expertise</label>
                <input
                  id="expertise"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  placeholder="e.g., Agribusiness, Regulatory Affairs"
                  required
                />
              </div>
              <div className="ec-field">
                <label htmlFor="message">Tell us more</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your focus, experience, and preferred engagement."
                  rows={4}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
