import React from "react";
import { Link } from "react-router-dom";
import translations from "../translations";
import "./TradeLink.css";

// Reusable bits
const Section = ({ title, children, className = "" }) => (
  <section className={`tl-section ${className}`}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

const TextImageBlock = ({ title, children, image, reverse }) => (
  <div className={`tl-block ${reverse ? "reverse" : ""}`}>
    <div className="tl-block__text">
      {title && <h2>{title}</h2>}
      {children}
    </div>
    <div className="tl-block__image">
      <img src={image.src} alt={image.alt} />
    </div>
  </div>
);

export default function TradeLink({ lang = "en" }) {
  const locale = translations[lang] || translations.en;
  const t = locale.tradeLink;

  return (
    <div className="trade-link">
      {/* Hero */}
      <section className="tl-hero">
        <div className="tl-hero__content">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.desc}</p>
        </div>
        <div className="tl-hero__image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
            alt={t.hero.imgAlt}
          />
        </div>
      </section>

      {/* Intro */}
      <Section title={t.intro.title}>
        <p>{t.intro.text}</p>
      </Section>

      {/* What We Offer */}
      <TextImageBlock
        title={t.offer.title}
        image={{
          src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
          alt: t.offer.imgAlt,
        }}
      >
        <ul className="tl-list">
          {t.offer.points.map((p, i) => (
            <li key={i}>
              <strong>{p.title}:</strong> {p.desc}
            </li>
          ))}
        </ul>
      </TextImageBlock>

      {/* Why TradeLink */}
      <TextImageBlock
        title={t.why.title}
        reverse
        image={{
          src: "/images/photo-15.avif",
          alt: t.why.imgAlt,
        }}
      >
        <ul className="tl-list">
          {t.why.points.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </TextImageBlock>

      {/* Use Cases */}
      <Section title={t.cases.title}>
        <ul className="tl-list">
          {t.cases.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <section className="tl-cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.desc}</p>
        <Link to="/contact" className="cta-btn">{t.cta.button}</Link>
      </section>
    </div>
  );
}
