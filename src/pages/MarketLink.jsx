import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaHandshake, FaGlobeAfrica, FaLightbulb, FaCheckCircle } from "react-icons/fa";
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
  const [showForm, setShowForm] = useState(false);

  const africaJapanRef = useRef(null);
  const [animateTyping, setAnimateTyping] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Scroll-triggered typing animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateTyping(true);
          setTimeout(() => setAnimateTyping(false), 10000); // Reset after 10s
        }
      },
      { threshold: 0.3 }
    );
    if (africaJapanRef.current) observer.observe(africaJapanRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://intellink-8w9t.onrender.com/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
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

  const africaJapan = t("marketLink.africaJapan");

  return (
    <div className="marketlink-page">
      {/* HERO */}
      <section className="marketlink-hero" data-aos="fade-up">
        <div>
          <h1>{t("marketLink.hero.title")}</h1>
          <p>{t("marketLink.hero.desc")}</p>
          <Link to="/contact" className="hero-cta">{t("marketLink.hero.button")}</Link>
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
          <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786" alt={t("marketLink.about.imgAlt")} />
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
            <li key={i}><FaCheckCircle /> {point}</li>
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
      <section className="marketlink-africa-japan" ref={africaJapanRef} data-aos="fade-up">
        <h2 className={animateTyping ? "typing-animation" : ""}>{africaJapan.title}</h2>
        <p>{africaJapan.p1}</p>
        <p>{africaJapan.p2}</p>

        <div className="why-japan">
          <h4>{africaJapan.whyJapan.title}</h4>
          <div className="cards-grid">
            {africaJapan.whyJapan.offers.map((offer, i) => (
              <div className="why-card" key={`offer-${i}`}>
                <FaLightbulb className="card-icon" />
                <p>{offer}</p>
              </div>
            ))}
            {africaJapan.whyJapan.challenges.map((challenge, i) => (
              <div className="why-card challenge" key={`challenge-${i}`}>
                <FaHandshake className="card-icon" />
                <p>{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="services-list">
          <h4>{africaJapan.services.title}</h4>
          <ol>
            {africaJapan.services.list.map((item, i) => (<li key={i}>{item}</li>))}
          </ol>
        </div>

        <div className="beneficiaries">
          <h4>Beneficiaries</h4>
          <div className="tags scroll-horizontal">
            {africaJapan.beneficiaries.items.map((item, i) => (<span key={i}>{item}</span>))}
          </div>
        </div>

        <div className="africa-japan-cta">
          <h4>{africaJapan.cta.title}</h4>
          <p>{africaJapan.cta.text}</p>
          <button className="ec-btn" onClick={() => setShowForm(!showForm)}>
            {africaJapan.cta.button}
          </button>
        </div>
      </section>

      {/* APPLICATION FORM */}
      {showForm && (
        <section className="marketlink-application" data-aos="fade-up">
          <h2>Application Form</h2>
          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-row">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
              <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Middle Name" />
              <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname" required />
            </div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
            <input type="text" name="position" value={formData.position} onChange={handleChange} placeholder="Position Applied For" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows="4"></textarea>
            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="marketlink-finalcta" data-aos="fade-up">
        <h2>{t("marketLink.finalCTA.title")}</h2>
        <p>{t("marketLink.finalCTA.desc")}</p>
        <Link to="/contact" className="final-cta-btn">{t("marketLink.finalCTA.button")}</Link>
      </section>
    </div>
  );
}
