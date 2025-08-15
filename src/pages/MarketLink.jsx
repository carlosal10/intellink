import React, { useState, useEffect } from "react";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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

      {/* ABOUT */}
      <section className="marketlink-about" data-aos="fade-up">
        <div className="about-text">
          <h2>{t("marketLink.about.title")}</h2>
          <p>{t("marketLink.about.text")}</p>
        </div>
        <div className="about-image">
          <img
            src={t("marketLink.about.image") || "https://images.unsplash.com/photo-1556761175-4b46a572b786"}
            alt={t("marketLink.about.imgAlt")}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="marketlink-services" data-aos="fade-up">
        <h2>{t("marketLink.services.title")}</h2>
        <div className="services-grid">
          {(t("marketLink.services.items", { returnObjects: true }) || []).map((item, i) => {
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
          {(t("marketLink.why.points", { returnObjects: true }) || []).map((point, i) => (
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
          {(t("marketLink.ideal.items", { returnObjects: true }) || []).map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </section>

      {/* AFRICA → JAPAN */}
      <section className="marketlink-africa-japan" data-aos="fade-up">
        <h2>{t("marketLink.africaJapan.title")}</h2>

        {(t("marketLink.africaJapan.sections", { returnObjects: true }) || []).map((section, i) => (
          <section key={i} className="aj-section">
            <h4>{section.heading}</h4>
            {section.text && <p>{section.text}</p>}
            {section.list && (
              <ul>
                {section.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
            {section.numbered && (
              <ol>
                {section.numbered.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            )}
          </section>
        ))}

        {/* IMAGE CAROUSEL */}
        {(t("marketLink.africaJapan.images", { returnObjects: true }) || []).length > 0 && (
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            adaptiveHeight={true}
            className="aj-image-carousel"
          >
            {t("marketLink.africaJapan.images", { returnObjects: true }).map((img, i) => (
              <div key={i}>
                <img src={img} alt={`Africa→Japan ${i + 1}`} />
              </div>
            ))}
          </Slider>
        )}
      </section>

      {/* JOIN TEAM */}
      <section className="marketlink-join" data-aos="fade-up">
        <h2>{t("marketLink.join.title")}</h2>
        <p>{t("marketLink.join.desc")}</p>
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
