import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import useTranslate from "../hooks/useTranslate";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "./MarketLink.css";

export default function MarketLink() {
  const t = useTranslate();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://intellink-8w9t.onrender.com/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit application");
      toast.success("Application submitted successfully!");
      setFormData({
        firstName: "",
        middleName: "",
        surname: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  const hero = t("marketLink.hero", { returnObjects: true }) || {};
  const intro = t("marketLink.intro", { returnObjects: true }) || {};
  const offer = t("marketLink.offer", { returnObjects: true }) || {};
  const casesData = t("marketLink.cases", { returnObjects: true }) || {};
  const ideal = t("marketLink.ideal", { returnObjects: true }) || {};

  return (
    <div className="marketlink-page">
      {/* HERO */}
      <section className="marketlink-hero" data-aos="fade-up" style={{
          backgroundImage: `url('/images/MarketLink1.jpg')`,
        }}>
        <div className="marketlink-overlay">
          <h1>{hero?.title}</h1>
          <p>{hero?.desc}</p>
          <Link to="/contact" className="hero-cta">{hero?.button}</Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="marketlink-intro" data-aos="fade-up">
        <p>{intro?.text}</p>
      </section>

      {/* OFFER / SOLUTIONS */}
      <section className="marketlink-offer" data-aos="fade-up" style={{
          backgroundImage: `url('/images/MarketLink.jpg')`,
          backgroundRepeat:'no-repeat',
          backgroundSize: 'cover'
        }}>
        <h2>{offer?.title}</h2>
        <ul>
          {(offer?.points || []).map((point, i) => (
            <li key={i}><FaCheckCircle /> {point}</li>
          ))}
        </ul>
      </section>

      {/* CASES / USE CASES */}
      <section className="marketlink-cases" data-aos="fade-up">
        <h2>{casesData?.title}</h2>
        <ul>
          {(casesData?.items || []).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

     {/* IDEAL USERS */}
<section className="marketlink-ideal" data-aos="fade-up">
  <h2>{ideal?.title}</h2>
  <div className="ideal-grid">
    {(ideal?.items || []).map((item, i) => (
      <div key={i} className="ideal-card" data-aos="zoom-in">
        <h3>{item}</h3>
      </div>
    ))}
  </div>
</section>


    
      
        <section className="page-cta" data-aos="fade-up">
          <h3> Get the Insights You Need to Expand</h3>
          <p> From feasibility studies to consumer testing, MarketLink™ equips you with the intelligence to make confident, data-driven decisions before entering new markets.</p>
          <button onConClick={() => setShowForm(!showForm)} className="cta-btn">
            Discover Your Market Potential
          </button>
        </section>
    
    

      {/* APPLICATION FORM */}
      {showForm && (
        <section className="marketlink-application" data-aos="fade-up">
          <h2>Application Form</h2>
          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-row">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
              <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Middle Name" />
              <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname" required />
            </div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
            <input type="text" name="position" value={formData.position} onChange={handleChange} placeholder="Position Applied For" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows="4"></textarea>
            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </section>
      )}
    </div>
  );
}
