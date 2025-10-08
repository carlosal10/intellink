import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import useTranslate from "../hooks/useTranslate";
import "./ExpertConnect.css";
import "./MarketLink.css";
import "./TradeLink.css";

export default function TradeLinkPage() {
  const t = useTranslate("tradeLink") || {};

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = t.offer?.points || [];
  const cases = t.cases?.items || [];

  return (
    <div className="ec-shell">
      {/* HERO (replicates ExpertConnect style) */}
      <section
        className="ec-hero"
        style={{ backgroundImage: `url('/images/TradeLink1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
         }}
        data-aos="fade-up"
      >
        <div className="ec-hero-fade" />
        <div className="ec-hero-overlay tl-hero-overlay">
         
          <h1 className="ec-hero-title">{t.hero?.title || "TradeLink"}</h1>
           {t.hero?.tagline && <span className="ec-hero-chip">{t.hero.tagline}</span>}
          {t.hero?.desc && <p className="ec-hero-desc">{t.hero.desc}</p>}
          <div className="ec-hero-cta tl-hero-cta">
            <Link to="/contact" className="btn btn-primary">
              {t.hero?.button || "Connect with a Partner"} <FaArrowRight />
            </Link>
            <a href="#services" className="btn btn-outline">Explore Services</a>
          </div>
        </div>
      </section>

      {/* INTRO (split layout) */}
      <section className="ec-section ec-section-alt" data-aos="fade-up">
        <div className="ec-container ec-split">
          <div className="ec-split-content">
            <h3 className="ec-h3">Cross-Border Business Made Simple</h3>
            <p className="ec-lead">{t.intro?.text}</p>
            <ul className="ec-list">
              <li><FaCheckCircle /> Precision, trust, and efficiency in every step</li>
              <li><FaCheckCircle /> Vetted partners across Japan and Africa</li>
              <li><FaCheckCircle /> On-the-ground coordination and compliance</li>
            </ul>
          </div>
          <div className="ec-split-media">
            <img src={t.offer?.imgSrc || "/images/TradeLink2.jpg"} alt={t.offer?.imgAlt || "TradeLink"} />
          </div>
        </div>
      </section>

      {/* SERVICES (cards) */}
      <section id="services" className="ec-section" data-aos="fade-up">
        <div className="ec-container">
          <div className="ec-section-head">
            <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 3.5rem)", color: "#F1c401" }} className="ec-h3">{t.offer?.title || "Services"}</h3>
            <p className="ec-sub">Practical support from sourcing to market access to events.</p>
          </div>
          <div className="ec-grid ec-grid-3">
            {services.map((s, i) => (
              <div key={i} className="ec-card ec-card-soft" data-aos="zoom-in" data-aos-delay={i * 80}>
                <div className="ec-card-icon"><FaCheckCircle /></div>
                <h4>{s.title}</h4>
                <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", color: "#243149" }}>{s.body || s.desc}</p>
                <div style={{ marginTop: 12 }}>
                  <Link to="/contact" className="btn btn-primary btn-card">
                    {s.cta || "Talk to Us"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES (cards) */}
      <section className="ec-section ec-section-alt" data-aos="fade-up">
        <div className="ec-container">
          <div className="ec-section-head">
            <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 3.5rem)", color: "#F11" }} className="ec-h3">{t.cases?.title || "TradeLink Use Cases"}</h3>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", color: "#243149" }} className="ec-sub">Real outcomes from cross-border collaboration.</p>
          </div>
          <div className="ec-grid">
            {cases.map((c, i) => (
              <div key={i} className="ec-card tl-case-card" data-aos="zoom-in" data-aos-delay={i * 80}>
                <h4 style={{ marginTop: 0, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F11" }}>{c.title || (typeof c === 'string' ? `Case ${i+1}` : "")}</h4>
                {c.body && <p>{c.body}</p>}
                {c.result && (
                  <div className="tl-result-badge">
                    <strong>Result:</strong> {c.result}
                  </div>
                )}
                {!c.body && typeof c === 'string' && <p>{c}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY (glass block) */}
      {t.why && (
        <section style={{ background: "none", marginTop: "5rem", zIndex: 999 }} className="ec-section" data-aos="fade-up">
          <div className="ec-container">
            <div className="glass">
              <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 3rem)", color: "#f11" }} className="ec-h3">{t.why.title}</h3>
              {(t.why.points || []).map((p, i) => (
                <p key={i} className="ec-lead" style={{ marginBottom: 8 }}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA (sticky bar) */}
      {t.cta && (
        <div style={{ marginTop: "clamp(1rem, 2.3vw, 2rem)" }} className="ec-cta" data-aos="fade-up">
          <div className="ec-cta-inner">
            <div className="ec-cta-left">
              <div>
                <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 3.5rem)", color: "#F1c401" }}>{t.cta.title}</h3>
                <p>{t.cta.desc} {t.cta?.contactInfo && <span> {t.cta.contactInfo}</span>}</p>
              </div>
            </div>
            <div className="ec-cta-right">
              <Link to="/contact" className="btn btn-primary">
                {t.cta.button} <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
