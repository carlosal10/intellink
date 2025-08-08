import './Sectors.css';
import useTranslate from '../hooks/useTranslate';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sectors() {
  const t = useTranslate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const industries = [
    {
      title: "Agriculture & Agri-tech",
      description: "Boosting productivity, market access, and sustainability across borders.",
      image: "/images/istockphoto-6.jpg"
    },
    {
      title: "Renewable Energy & Infrastructure",
      description: "Supporting energy and infrastructure firms with partnerships and regulation.",
      image: "/images/istockphoto-5.jpg"
    },
    {
      title: "Healthcare & Pharmaceuticals",
      description: "Improving medical product access, compliance, and innovation.",
      image: "/images/istockphoto-12.jpg"
    },
    {
      title: "Manufacturing & Industrial Goods",
      description: "Linking Japanese industrial suppliers with high-growth markets.",
      image: "/images/industrial.jpg"
    },
    {
      title: "ICT & Innovation",
      description: "Enabling digital transformation and scalable tech partnerships.",
      image: "/images/ict.jpg"
    },
    {
      title: "Consumer Goods & Retail",
      description: "Guiding brands with market entry, branding, and distribution.",
      image: "/images/retail.jpg"
    },
    {
      title: "Education & Skills Training",
      description: "Promoting global knowledge exchange through EdTech and partnerships.",
      image: "/images/education.jpg"
    },
    {
      title: "Tourism & Creative Economy",
      description: "Fostering cultural exchange and creative industry growth.",
      image: "/images/tourism.jpg"
    }
  ];

  const clients = [
    'Japanese companies exploring trade or expansion in Africa',
    'African SMEs seeking access to the Japanese market',
    'Development agencies and NGOs working on trade facilitation',
    'Importers, exporters, and distributors',
    'Investment promotion agencies and trade missions',
    'Investors and VCs scouting frontier opportunities',
    'Startups and social enterprises scaling globally'
  ];

  return (
    <section className="sectors-page">
      <div className="sectors-hero">
        <h1 data-aos="fade-up">Industries We Serve</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          We work across sectors where Japan–Africa collaboration creates social, economic, and technological impact.
        </p>
      </div>

      <div className="industries-section">
        {industries.map((sector, idx) => (
          <div className="industry-box" key={idx} data-aos="fade-up" data-aos-delay={100 * idx}>
            <img src={sector.image} alt={sector.title} className="sector-image" />
            <div className="sector-content">
              <h3>{sector.title}</h3>
              <p>{sector.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="clients-section">
        <h2 data-aos="fade-up">Our Clients Include</h2>
        <ul className="client-list">
          {clients.map((client, idx) => (
            <li key={idx} data-aos="fade-up" data-aos-delay={100 * idx}>
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
