import React, { useState } from "react";
import { FaGlobe, FaClipboardCheck, FaRocket } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTranslate from "../hooks/useTranslate";
import "./ExpertConnect.css";

export default function ExpertConnectPage() {
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

      toast.success(
        "Your application has been submitted successfully, we're reviewing it.",
        { position: "top-right", autoClose: 3000 }
      );
      setFormData({ name: "", email: "", expertise: "", message: "" });
      setTimeout(() => setShowForm(false), 500);
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="page-shell">
      {isLoading && (
        <div className="page-loading">
          <p>Loading content...</p>
        </div>
      )}

      {/* HERO */}
      <section
        className="page-hero"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div className="page-hero-overlay">
          <h1>
             {t?.title || ""}
          </h1>
          <h2>{t?.tagline || ""}</h2>
          <p>{t?.heroDescription || ""}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="page-content">
        <div className="page-section">
          <p>{t?.intro || ""}</p>
        </div>

        {t?.whatIs && (
          <div className="page-section">
            <h3>{t.whatIs.title}</h3>
            <p>{t.whatIs.description}</p>
            <ul>
              {t.whatIs.points?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}

        {t?.expect && (
          <div className="page-section grid-cards">
            <h3>{t.expect.title}</h3>
            <div className="grid">
              {t.expect.points?.map((p, i) => (
                <div className="card" key={i}>
                  <FaClipboardCheck className="card-icon" />
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {t?.howItWorks && (
          <div className="page-section">
            <h3>{t.howItWorks.title}</h3>
            <ol>
              {t.howItWorks.steps?.map((step, i) => (
                <li key={i}>
                  <strong>{step.title}:</strong> {step.desc}
                </li>
              ))}
            </ol>
          </div>
        )}

        {t?.whyItMatters && (
          <div className="page-section grid-cards">
            <h3>{t.whyItMatters.title}</h3>
            <div className="grid">
              {t.whyItMatters.points?.map((p, i) => (
                <div className="card" key={i}>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {t?.register && (
          <div className="page-section">
            <h3>{t.register.title}</h3>
            <p>{t.register.description}</p>
            <h4>{t.register.whoTitle}</h4>
            <ul>
              {t.register.whoPoints?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <h4>{t.register.howTitle}</h4>
            <p>{t.register.howDescription}</p>
          </div>
        )}

        {/* CTA */}
        <div className="page-cta">
          <FaRocket className="cta-icon" />
          <h3>{t?.cta?.title}</h3>
          <p>{t?.cta?.text}</p>
          <button className="cta-btn" onClick={() => setShowForm(!showForm)}>
            {t?.cta?.button}
          </button>
        </div>

        {/* FORM */}
        {showForm && (
          <div className="page-form">
            <h3>ExpertConnect Application Form</h3>
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
              />
              <button type="submit" className="form-btn">
                Submit Application
              </button>
            </form>
          </div>
        )}
      </section>

      <ToastContainer />
    </div>
  );
}
