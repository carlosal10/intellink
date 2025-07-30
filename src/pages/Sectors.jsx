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
    'Agribusiness & Horticulture',
    'Energy & Sustainable Infrastructure',
    'Healthcare & Life Sciences',
    'Education, Skills & Workforce Development',
    'Information & Communication Technology (ICT)',
    'Consumer Goods & Retail',
    'Textiles, Crafts & Cultural Products',
  ];

  const clients = [
    'Japanese SMEs and large corporations',
    'African exporters and manufacturers',
    'Government agencies and development partners',
    'International NGOs and trade organizations',
    'Chambers of commerce and diaspora business networks',
  ];

  return (
    <section className="sectors-page">
      <div className="sectors-hero">
        <h1 data-aos="fade-up">Industries We Serve</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          We work across diverse sectors with high growth and partnership potential:
        </p>
      </div>

      <div className="industries-section">
        {industries.map((sector, idx) => (
          <div className="industry-box" key={idx} data-aos="fade-up" data-aos-delay={100 * idx}>
            <span className="sector-icon">✔</span>
            <p>{sector}</p>
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
