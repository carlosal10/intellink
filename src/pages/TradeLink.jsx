import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TradeLink.css";

// Reusable Section wrapper
const Section = ({ title, children, className = "" }) => (
  <section className={`tl-section ${className}`}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

// Text + Image layout
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

export default function TradeLink() {
  const t = useTranslate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="trade-link">
      {/* Hero */}
      <section className="tl-hero" data-aos="fade-up">
        <div className="tl-hero__content">
          <h1>{t("tradeLink.hero.title")}</h1>
          <p>{t("tradeLink.hero.desc")}</p>
        </div>
        <div className="tl-hero__image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
            alt={t("tradeLink.hero.imgAlt")}
          />
        </div>
      </section>

      {/* Intro */}
      <Section title={t("tradeLink.intro.title")}>
        <p>{t("tradeLink.intro.text")}</p>
      </Section>

      {/* What We Offer */}
      <TextImageBlock
        title={t("tradeLink.offer.title")}
        image={{
          src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
          alt: t("tradeLink.offer.imgAlt"),
        }}
      >
        <ul className="tl-list">
          {t("tradeLink.offer.points").map((p, i) => (
            <li key={i}>
              <strong>{p[0]}:</strong> {p[1]}
            </li>
          ))}
        </ul>
      </TextImageBlock>

      {/* Why TradeLink */}
      <TextImageBlock
        title={t("tradeLink.why.title")}
        reverse
        image={{
          src: "/images/photo-15.avif",
          alt: t("tradeLink.why.imgAlt"),
        }}
      >
        <ul className="tl-list">
          {t("tradeLink.why.points").map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </TextImageBlock>

      {/* Use Cases */}
      <Section title={t("tradeLink.cases.title")}>
        <ul className="tl-list">
          {t("tradeLink.cases.items").map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <section className="tl-cta" data-aos="fade-up">
        <h2>{t("tradeLink.cta.title")}</h2>
        <p>{t("tradeLink.cta.desc")}</p>
        <Link to="/contact" className="cta-btn">
          {t("tradeLink.cta.button")}
        </Link>
      </section>
    </div>
  );
}
