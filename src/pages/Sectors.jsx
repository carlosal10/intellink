import "./Sectors.css";
import useTranslate from "../hooks/useTranslate";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGlobeAfrica, FaFlag, FaBolt } from "react-icons/fa";

export default function Sectors() {
  const t = useTranslate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const industries = [
    {
      title: "Agriculture & Agri-tech",
      description:
        "Boosting productivity, market access, and sustainability across borders.",
      image: "/images/Agritech.jpg",
    },
    {
      title: "Renewable Energy & Infrastructure",
      description:
        "Supporting energy and infrastructure firms with partnerships and regulation.",
      image: "/images/RenewableEnergy.jpg",
    },
    {
      title: "Healthcare & Pharmaceuticals",
      description:
        "Improving medical product access, compliance, and innovation.",
      image: "/images/istockphoto-12.jpg",
    },
    {
      title: "Manufacturing & Industrial Goods",
      description:
        "Linking Japanese industrial suppliers with high-growth markets.",
      image: "/images/Manufacturing.jpg", // (Removed stray space in filename)
    },
    {
      title: "ICT & Innovation",
      description:
        "Enabling digital transformation and scalable tech partnerships.",
      image: "/images/ICT&Innovation.jpg",
    },
    {
      title: "Consumer Goods & Retail",
      description:
        "Guiding brands with market entry, branding, and distribution.",
      image: "/images/ConsumerGoods.jpg",
    },
    {
      title: "Education & Skills Training",
      description:
        "Promoting global knowledge exchange through EdTech and partnerships.",
      image: "/images/education.jpg",
    },
    {
      title: "Tourism & Creative Economy",
      description:
        "Fostering cultural exchange and creative industry growth.",
      image: "/images/tourism.jpg",
    },
  ];

  const clients = [
    "Japanese companies exploring trade or expansion in Africa",
    "African SMEs seeking access to the Japanese market",
    "Development agencies and NGOs working on trade facilitation",
    "Importers, exporters, and distributors",
    "Investment promotion agencies and trade missions",
    "Investors and VCs scouting frontier opportunities",
    "Startups and social enterprises scaling globally",
  ];

  return (
    <section className="sectors-page">
      {/* Hero */}
      <div className="sectors-hero">
         <video
          className="bridge-video"
          src="/images/Sectors.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="sectors-hero-overlay" />
        <div className="sectors-hero-inner">
          <h1 data-aos="fade-up">
            {t("sectorsPage.heroTitle") || "Industries We Serve"}
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            {t("sectorsPage.heroSubtitle") ||
              "We work across sectors where Japan–Africa collaboration creates social, economic, and technological impact."}
          </p>
        </div>
      </div>

      {/* Industries */}
      <div className="industries-section">
        <div className="industries-grid">
          {industries.map((sector, idx) => (
            <article
              className="industry-card"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={Math.min(100 * idx, 400)}
            >
              <div className="industry-media">
                <img
                  src={sector.image}
                  alt={sector.title}
                  onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  loading="lazy"
                />
              </div>
              <div className="industry-body">
                <h3>{sector.title}</h3>
                <p>{sector.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div className="clients-section">
        <h2 data-aos="fade-up">
          {t("sectorsPage.clientsTitle") || "Our Clients Include"}
        </h2>
        <ul className="client-list">
          {clients.map((client, idx) => (
            <li key={idx} data-aos="fade-up" data-aos-delay={Math.min(80 * idx, 320)}>
              {client}
            </li>
          ))}
        </ul>
      </div>

      {/* Why Africa, Why Japan, Why Now */}
      <div
        className="why-wrapper"
        style={{
          backgroundImage: "url('/images/whyafrikawhyjapan.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="why-overlay" />
        <div className="why-inner">
          <h2 className="why-title" data-aos="zoom-in">
            Why Africa, Why Japan, Why Now
          </h2>

          <div className="why-grid">
            {/* Africa card */}
            <div className="why-card" data-aos="fade-up" data-aos-delay="50">
              <div className="why-icon badge-africa">
                <FaGlobeAfrica />
              </div>
              <h3>Africa: The 21st Century’s Great Frontier</h3>
              <p>
                Africa is rapidly emerging as a global growth engine. With a
                young, dynamic population, expanding urban infrastructure, and
                soaring demand for technology, clean energy, and advanced
                manufacturing, the continent presents opportunities for
                businesses ready to engage strategically.
              </p>
            </div>

            {/* Japan card */}
            <div className="why-card" data-aos="fade-up" data-aos-delay="120">
              <div className="why-icon badge-japan">
                <FaFlag />
              </div>
              <h3>Japan: Innovation Meets Opportunity</h3>
              <p>
                Japan’s expertise in technology, quality management, and
                strategic planning is a powerful asset for businesses expanding
                into emerging markets. Precision, reliability, and innovation
                from Japan complement the dynamism of African markets.
              </p>
            </div>

            {/* Now card */}
            <div className="why-card" data-aos="fade-up" data-aos-delay="190">
              <div className="why-icon badge-now">
                <FaBolt />
              </div>
              <h3>Why Now</h3>
              <p>
                The convergence of Africa’s growth and Japan’s global ambitions
                creates a timely moment for partnership. Acting today enables
                early market presence, trusted networks, and long-term
                relationships aligned with sustainable growth.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section" data-aos="zoom-in">
            <h3>Seize the opportunity at the intersection of Japan and Africa.</h3>
            <Link to="/contact" className="cta-button">
              Get Started →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
