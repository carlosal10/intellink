import React, { useEffect } from "react";
import useTranslate from "../hooks/useTranslate";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

export default function About() {
  const t = useTranslate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80, easing: "ease-out" });
  }, []);

  const whyPoints = (t("about.whyChooseUs.points") || []).map((p) => {
    if (typeof p !== "string") return { title: "", desc: "" };
    const [title, ...rest] = p.split(":");
    return { title: (title || "").trim(), desc: rest.join(":").trim() };
  });

  return (
    <main className="about2">
      {/* HERO / ABOUT US */}
      <section
        className="about-hero"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(11,37,69,.55), rgba(0,0,0,.65)), url('/images/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        data-aos="fade-up"
      >
        <div className="about-hero-inner">
          <h1 className="about-hero-title">{t("about.aboutUs") || "About Us"}</h1>
          <p className="about-hero-sub">{t("about.aboutText")}</p>


          <div className="about-hero-cta">
            <a href="/contact" className="abtn abtn-primary">
              Work with Us
            </a>
            <a href="/services" className="abtn abtn-outline">
              Explore Services
            </a>
          </div>
        </div>
        {/* Decorative map accent */}
       
      </section>

      {/* WHAT WE DO */}
      <section className="about2-section" data-aos="fade-up">
        <div className="about2-inner">
          <div className="about2-text">
            <h2 className="about2-heading">{t("about.whatWeDo") || "What We Do"}</h2>
            <div className="about2-body">
              <p>{t("about.whatWeDoText")}</p>
            </div>
            <div className="about-cards">
              {[
                {
                  title: t("services.marketIntelligence.title") || "Market Intelligence",
                  desc: t("services.marketIntelligence.description") || "Decision-grade research and insight.",
                },
                {
                  title: "Strategic Advisory",
                  desc: "Entry strategies, growth playbooks, and decision support.",
                },
                {
                  title: t("services.expertConnect.title") || "Expert Connections",
                  desc: t("services.expertConnect.description") || "On-demand sector specialists and regulators.",
                },
                {
                  title: "Trade Facilitation",
                  desc: "Partners, logistics, and compliance for cross-border trade.",
                },
              ].map((c, i) => (
                <article className="about-card" key={i}>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                  <a href="/services" className="abtn abtn-link">
                    Explore Services →
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Image #1 */}
          <div className="about2-media" data-aos="zoom-in">
            
            <span className="about2-badge">Cross-Border Focus</span>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="about2-section" data-aos="fade-up">
        <div className="about2-inner">
          <div className="about-single">
            <h2 className="about2-heading">{t("about.vision") || "Our Vision"}</h2>
            <div className="about-divider" />
            <p className="about-quote">{t("about.visionText")}</p>
          </div>
</div>

          
      </section>

      {/* MISSION */}
      <section className="about2-section" data-aos="fade-up">
        <div className="about2-inner">
          <div className="about-single">      
            <h2 className="about2-heading">{t("about.mission") || "Mission"}</h2>
            <p className="about-body-lg">{t("about.missionText")}</p>
            <ul className="about-bullets">
              {(whyPoints.slice(0, 3) || []).map((p, idx) => (
                <li key={`pill-${idx}`}>{p.title || p.desc}</li>
              ))}
            </ul>
          </div>

          
          
        </div>
      </section>

     

     

      {/* PHILOSOPHY */}
      {(t("about.philosophy") || t("about.philosophyText")) && (
        <section className="about2-section" data-aos="fade-up">
          <div className="about2-inner">
            <div className="about-single">        
              <h2 className="about2-heading">{t("about.philosophy") || "Our Philosophy"}</h2>
              <blockquote className="about-pull">{t("about.philosophyText")}</blockquote>
            </div>
          </div>
        </section>
      )}

      {/* VALUES */}
      {(t("about.values") || t("about.valuesList")) && (
        <section className="about2-section" data-aos="fade-up">
          <div className="about2-inner">
            <div className="about2-text">
              <h2 className="about2-heading">{t("about.values") || "Our Core Values"}</h2>
              <div className="about2-values">
                {(t("about.valuesList") || []).map((pair, idx) => (
                  <div className="about2-value" key={idx}>
                    <h4>{Array.isArray(pair) ? pair[0] : ""}</h4>
                    <p>{Array.isArray(pair) ? pair[1] : pair}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* OUR STORY */}
      <section className="about02-section" data-aos="fade-up">
        <div className="about2-inner">
          <div className="about02-text">
            <h2 className="about2-heading">{t("about.ourStory") || "Our Story"}</h2>
          </div>
          <div className="about-timeline">
            {[
              {  text: t("about.ourStoryText.paragraph1") },
              { text: t("about.ourStoryText.paragraph2") },
              { text: t("about.ourStoryText.paragraph3") },
            ]
              .filter((s) => s.text)
              .map((node, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-content">                    
                    <p>{node.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* END CTA */}
      <section className="about2-section" data-aos="fade-up">
        <div className="about2-inner about-cta-end">
          <h3>Let’s build across borders</h3>
          <div className="about-cta-actions">
            <a href="/services" className="abtn abtn-outline">
              Explore Services
            </a>
            <a href="/contact" className="abtn abtn-primary">
              Talk to Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
