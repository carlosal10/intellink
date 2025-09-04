import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";
import "./MarketLink.css";

export default function TradeLinkPage() {
  const t = useTranslate("tradeLink") || {};

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="marketlink-page">
      {/* HERO */}
      <section
        className="marketlink-hero"
        data-aos="fade-up"
        style={{ backgroundImage: `url('/images/TradeLink1.jpg')` }}
      >
        <div className="marketlink-overlay">
          <h1>{t.hero?.title}</h1>
          <p>{t.hero?.desc}</p>
          <Link to="/contact" className="hero-cta">
            {t.hero?.button || "Connect With the Right Market"}
          </Link>
        </div>
      </section>

      {/* INTRO */}
      {t.intro && (
        <section className="marketlink-intro" data-aos="fade-up">
          <p>{t.intro.text}</p>
        </section>
      )}

      {/* OFFER / SOLUTIONS */}
      {t.offer && (
        <section
          className="marketlink-offer"
          data-aos="fade-up"
          style={{
            backgroundImage: `url('${t.offer.imgSrc || "/images/MarketLink.jpg"}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2>{t.offer.title}</h2>
          <ul>
            {(t.offer.points || []).map((p, i) => (
              <li key={i}>
                <FaCheckCircle /> {p?.title ? (
                  <><strong>{p.title}:</strong> {p.desc}</>
                ) : (
                  <>{p}</>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* WHY / REASONS */}
      {t.why && (
        <section className="marketlink-cases" data-aos="fade-up">
          <h2>{t.why.title}</h2>
          <ul>
            {(t.why.points || []).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* USE CASES */}
      {t.cases && (
        <section className="marketlink-cases" data-aos="fade-up">
          <h2>{t.cases.title}</h2>
          <ul>
            {(t.cases.items || []).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* CTA */}
      {t.cta && (
        <section className="page-cta" data-aos="fade-up">
          <h3>{t.cta.title}</h3>
          <p>{t.cta.desc}</p>
          <Link to="/contact" className="cta-btn">
            {t.cta.button}
          </Link>
        </section>
      )}
    </div>
  );
}

