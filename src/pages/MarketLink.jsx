import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaHandshake, FaGlobeAfrica, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import useTranslate from "../hooks/useTranslate";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MarketLink.css";

export default function MarketLink() {
  const t = useTranslate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
          {t("marketLink.services.items").map((item, i) => {
            const icons = [FaChartLine, FaHandshake, FaGlobeAfrica, FaLightbulb];
            const Icon = icons[i];
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
          {t("marketLink.why.points").map((point, i) => (
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
          {t("marketLink.ideal.items").map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
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
