import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaHandshake,
  FaGlobeAfrica,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";
import useTranslate from "../hooks/useTranslate";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "./MarketLink.css";

export default function MarketLink() {
  const t = useTranslate();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://intellink-8w9t.onrender.com/api/applications",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to submit application");

      toast.success("Application submitted successfully!");
      setFormData({
        firstName: "",
        middleName: "",
        surname: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  // Safe helper with warning
const safeArray = (key) => {
  const val = t(key, { returnObjects: true });
  if (!Array.isArray(val)) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[MarketLink] Missing or invalid array for key: "${key}". Received:`,
        val
      );
    }
    return [];
  }
  return val;
};


  return (
    <div className="marketlink-page">
      {/* HERO */}
      <section className="marketlink-hero" data-aos="fade-up">
        <div>
          <h1>{t("marketLink.hero.title")}</h1>
          <p>{t("marketLink.hero.desc")}</p>
          <Link to="/contact" className="hero-cta">
            {t("marketLink.hero.button")}
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="marketlink-intro" data-aos="fade-up">
        <p>{t("marketLink.intro.text")}</p>
      </section>

      {/* WHAT IS */}
      <section className="marketlink-about" data-aos="fade-up">
        <div className="about-text">
          <h2>{t("marketLink.about.title")}</h2>
          <p>{t("marketLink.about.text")}</p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt={t("marketLink.about.imgAlt")}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="marketlink-services" data-aos="fade-up">
        <h2>{t("marketLink.services.title")}</h2>
        <div className="services-grid">
          {safeArray("marketLink.services.items").map((item, i) => {
            const icons = [FaChartLine, FaHandshake, FaGlobeAfrica, FaLightbulb];
            const Icon = icons[i % icons.length];
            return (
              <div className="service-card" key={i}>
                <Icon className="service-icon" />
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="marketlink-why" data-aos="fade-up">
        <h2>{t("marketLink.why.title")}</h2>
        <ul>
          {safeArray("marketLink.why.points").map((point, i) => (
            <li key={i}>
              <FaCheckCircle /> {point}
            </li>
          ))}
        </ul>
      </section>

      {/* IDEAL FOR */}
      <section className="marketlink-ideal" data-aos="fade-up">
        <h2>{t("marketLink.ideal.title")}</h2>
        <div className="ideal-tags">
          {safeArray("marketLink.ideal.items").map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </section>

      {/* AFRICA TO JAPAN */}
      <section className="marketlink-africa-japan" data-aos="fade-up">
        <h2>{t("marketLink.africaJapan.title")}</h2>
        <h3>{t("marketLink.africaJapan.subtitle")}</h3>
        <p>{t("marketLink.africaJapan.intro")}</p>
        <p className="mission">{t("marketLink.africaJapan.mission")}</p>

        {/* Images */}
        <div className="africa-japan-images">
          {safeArray("marketLink.africaJapan.images").map((src, i) => (
            <img key={i} src={src} alt={`africa-japan-${i}`} />
          ))}
        </div>

        {/* Why Japan */}
        <div className="why-japan">
          <div className="offers">
            <h4>{t("marketLink.africaJapan.whyJapan.title")}</h4>
            <h5>Japan offers:</h5>
            <ul>
              {safeArray("marketLink.africaJapan.whyJapan.offers").map(
                (item, i) => (
                  <li key={i}>{item}</li>
                )
              )}
            </ul>
          </div>
          <div className="challenges">
            <h5>Yet many African enterprises face:</h5>
            <ul>
              {safeArray("marketLink.africaJapan.whyJapan.challenges").map(
                (item, i) => (
                  <li key={i}>{item}</li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="services-list">
          <h4>{t("marketLink.africaJapan.services.title")}</h4>
          <ol>
            {safeArray("marketLink.africaJapan.services.list").map(
              (service, i) => (
                <li key={i}>
                  <strong>{service[0]}</strong>
                  <p>{service[1]}</p>
                </li>
              )
            )}
          </ol>
        </div>

        {/* Beneficiaries */}
        <div className="beneficiaries">
          <h4>{t("marketLink.africaJapan.beneficiaries.title")}</h4>
          <div className="tags">
            {safeArray("marketLink.africaJapan.beneficiaries.items").map(
              (b, i) => (
                <span key={i}>{b}</span>
              )
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="africa-japan-cta">
          <h4>{t("marketLink.africaJapan.cta.title")}</h4>
          <p>{t("marketLink.africaJapan.cta.text")}</p>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="marketlink-application" data-aos="fade-up">
        <h2>Application Form</h2>
        <form onSubmit={handleSubmit} className="application-form">
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Middle Name"
            />
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Surname"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position Applied For"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows="4"
          ></textarea>
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </section>

      {/* FINAL CTA */}
      <section className="marketlink-finalcta" data-aos="fade-up">
        <h2>{t("marketLink.finalCTA.title")}</h2>
        <p>{t("marketLink.finalCTA.desc")}</p>
        <Link to="/contact" className="final-cta-btn">
          {t("marketLink.finalCTA.button")}
        </Link>
      </section>
    </div>
  );
}
