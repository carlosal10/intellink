import React, { useState } from "react";
import { FaUserAlt, FaPaperclip, FaLock } from "react-icons/fa";
import useTranslate from "../hooks/useTranslate";
import "./RecruitmentForm.css";

export default function AfricaToJapanRecruitment() {
  const t = useTranslate();

  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    nationality: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    declaration: false,
    consent: false,
  });
  const [files, setFiles] = useState({ cv: null, coverLetter: null });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };
const [showForm, setShowForm] = useState(false);
  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles((prev) => ({ ...prev, [name]: fileList[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => formData.append(key, val));
      if (files.cv) formData.append("cv", files.cv);
      if (files.coverLetter) formData.append("coverLetter", files.coverLetter);

      const res = await fetch("https://intellink-8w9t.onrender.com/api/recruitment", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Error submitting application. Please try again.");
    }
  };

  return (
    <div className="africa-japan-page">
      {/* === CAREERS CONTENT === */}
      <div className="careers-page px-6 py-12 max-w-5xl mx-auto font-sans text-gray-800">
        {/* Hero Section */}
        <section className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4">{t("careers.hero.header")}</h1>
          <p className="text-lg mb-6">{t("careers.hero.tagline")}</p>
        </section>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">{t("careers.overview.title")}</h2>
          <p>{t("careers.overview.text")}</p>
        </section>

        {/* Why Work With Us */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">{t("careers.whyWorkWithUs.title")}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {t("careers.whyWorkWithUs.points")?.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>

        {/* Industries */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">{t("careers.industries.title")}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {t("careers.industries.points")?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Capabilities */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">{t("careers.capabilities.title")}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {t("careers.capabilities.points")?.map((cap, idx) => (
              <li key={idx}>{cap}</li>
            ))}
          </ul>
        </section>

        {/* Positions */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">{t("careers.positions.title")}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {t("careers.positions.sampleRoles")?.map((role, idx) => (
              <li key={idx}>{role}</li>
            ))}
          </ul>
          <p className="mt-2 italic">{t("careers.positions.note")}</p>
        </section>

        {/* Ideal Candidates */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">{t("careers.idealCandidates.title")}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {t("careers.idealCandidates.points")?.map((trait, idx) => (
              <li key={idx}>{trait}</li>
            ))}
          </ul>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-10">
          <p className="text-lg mb-4">{t("careers.ctaSection.text")}</p>
          <button onClick={() => setShowForm(!showForm)} className="submit-btn">{t("careers.ctaSection.button")}</button>
        </section>
      </div>

      
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="recruitment-form"
          encType="multipart/form-data"
        >
        <h2>
          <FaUserAlt /> Application Form
        </h2>

        <fieldset>
          <legend>Personal Information</legend>
          <input name="fullName" placeholder="Full Name" required onChange={handleChange} />
          <input type="date" name="dob" required onChange={handleChange} />
          <input name="nationality" placeholder="Nationality" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <input name="location" placeholder="Location (City, Country)" required onChange={handleChange} />
          <input name="linkedin" placeholder="LinkedIn / Website / Portfolio" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend><FaPaperclip /> Supporting Documents</legend>
          <label>
            Upload CV/Resume
            <input type="file" name="cv" accept=".pdf,.doc,.docx" required onChange={handleFileChange} />
          </label>
          <label>
            Upload Cover Letter
            <input type="file" name="coverLetter" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
          </label>
        </fieldset>

        <fieldset>
          <legend><FaLock /> Consent</legend>
          <label>
            <input type="checkbox" name="declaration" required onChange={handleChange} />
            I confirm all provided information is accurate.
          </label>
          <label>
            <input type="checkbox" name="consent" required onChange={handleChange} />
            I consent to the processing of my data in accordance with Intellink’s privacy policy.
          </label>
        </fieldset>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>)}
    </div>
  );
}
