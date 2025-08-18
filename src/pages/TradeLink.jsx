import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TradeLink.css";

export default function TradeLinkPage() {
  const t = useTranslate("tradeLink") || {};

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const TextImageBlock = ({ title, children, image, reverse }) => (
    <div className={`page-block ${reverse ? "reverse" : ""}`} data-aos="fade-up">
      <div className="block-text">
        {title && <h3>{title}</h3>}
        {children}
      </div>
      <div className="block-image">
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );

  return (
    <div className="page-shell">
      {/* HERO */}
      <section
        className="page-hero"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="page-hero-overlay">
          <h1>{t.hero?.title}</h1>
          <p>{t.hero?.desc}</p>
          <Link to="/contact" className="hero-cta">Contact Us Today →</Link>
        </div>
      </section>

      {/* INTRO */}
      {t.intro && (
        <section className="page-section">
          <h3>{t.intro.title}</h3>
          <p>{t.intro.text}</p>
        </section>
      )}

      {/* WHAT WE OFFER */}
      {t.offer && (
  <TextImageBlock
    title={t.offer.title}
    image={{
      src: t.offer.imgSrc || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      alt: t.offer.imgAlt
    }}
  >
    <ul>
      {t.offer.points?.map((p, i) => (
        <li key={i}>
          <strong>{p.title}:</strong> {p.desc}
        </li>
      ))}
    </ul>
  </TextImageBlock>
)}


      {/* WHY TRADELINK */}
      {t.why && (
        <TextImageBlock
          title={t.why.title}
          reverse
          image={{ src: t.why.imgSrc || "/images/photo-15.avif", alt: t.why.imgAlt }}
        >
          <ul>
            {t.why.points?.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </TextImageBlock>
      )}

      {/* USE CASES */}
      {t.cases && (
        <section className="page-section">
          <h3>{t.cases.title}</h3>
          <ul>
            {t.cases.items?.map((item, i) => (
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
