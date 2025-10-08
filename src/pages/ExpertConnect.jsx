// src/pages/ExpertConnectPage.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardCheck,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaUpload,
  FaTrash,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTranslate from "../hooks/useTranslate";
import "./ExpertConnect.css";
import "./MarketLink.css";

export default function ExpertConnectPage() {
  const t = useTranslate("expertConnect") || {};
  const isLoading = !t?.title && !t?.tagline;

  // Default English content as fallback when translations are missing
  const defaults = {
    title: "ExpertConnect",
    tagline: "Connecting Your Business with the Right Expertise, On Demand",
    heroDescription:
      "Access industry specialists in Japan and Africa for one-off projects, short-term assignments, or ongoing consultation. ExpertConnect ensures you find credible experts with the right local knowledge and global perspectives to achieve your business goals.",
    cta: { alt: "Find an Expert Today" },
    intro:
      "We understand the importance of finding the right expertise at the right time. ExpertConnect bridges businesses with seasoned professionals who possess the sector-specific skills, experience, and insights needed for strategic growth. Whether you are tackling complex projects, entering new markets, or seeking operational guidance, ExpertConnect provides fast, reliable access to the experts you need.",
    services: {
      title: "Services",
      description:
        "We understand the importance of finding the right expertise at the right time. ExpertConnect bridges businesses with seasoned professionals who possess the sector-specific skills, experience, and insights needed for strategic growth. Whether you are tackling complex projects, entering new markets, or seeking operational guidance, ExpertConnect provides fast, reliable access to the experts you need.",
      items: [
        {
          title: "On-Demand Expert Engagement",
          body:
            "Need advice or specialized skills quickly? ExpertConnect connects you with consultants ready to engage immediately, whether for a one-off project, short-term assignment, or ongoing support. We ensure you get the right expertise when and where you need it, saving time and reducing project risk.",
          cta: "Connect with an Expert for Your Project.",
        },
        {
          title: "Industry & Sector Specialization",
          body:
            "We match businesses with experts who have deep sector knowledge, spanning finance, energy, technology, manufacturing, trade, and more. By leveraging our extensive database, we ensure your team gains actionable insights from professionals who understand both local and global market dynamics.",
          cta: "Discover Industry Specialists Today.",
        },
        {
          title: "Strategic Advisory & Market Insights",
          body:
            "ExpertConnect goes beyond simple consultation. Our experts provide strategic guidance, market intelligence, and regulatory insights to help businesses make informed decisions. Whether it’s navigating cross-border trade, understanding consumer trends, or structuring complex projects, we connect you with advisors who deliver results.",
          cta: "Get Strategic Insights from Experienced Experts.",
        },
      ],
    },
    useCases: {
      title: "ExpertConnect Use Cases",
      items: [
        {
          title: "Japanese Tech Firm Expanding to Africa",
          points: [
            "A Japanese renewable energy company wanted to enter East Africa but lacked knowledge of local regulations, consumer behavior, and distribution channels.",
            "ExpertConnect matched them with an energy sector consultant based in Nairobi, who provided market intelligence reports, government engagement strategies, and local partner introductions.",
          ],
          result:
            "The company launched successfully with reduced risk and faster market entry.",
        },
        {
          title: "African Agribusiness Scaling to Japan",
          points: [
            "An agribusiness cooperative in Ghana producing organic cocoa wants to enter the Japanese premium food market. They lack knowledge of Japanese import regulations, consumer preferences, and retail distribution channels.",
            "Through ExpertConnect, they are matched with a Japanese food industry consultant specializing in imports and retail placement.",
            "The expert helps them navigate compliance requirements, advises on branding and packaging for Japanese consumers, and introduces them to potential distribution partners.",
          ],
          result:
            "The cooperative secures shelf space in Tokyo specialty stores and establishes a sustainable export pipeline.",
        },
        {
          title: "Policy Advisory for Trade & Investment",
          points: [
            "A regional African government agency sought to design policies that attract Japanese investors into manufacturing and technology.",
            "ExpertConnect connected them with a former Japanese trade policy advisor, who helped draft investment-friendly policies, share case studies, and prepare the agency team for high-level dialogues.",
          ],
          result:
            "The region launched a competitive policy framework, boosting investor confidence and generating new joint ventures.",
        },
      ],
    },
    whyWorks: {
      title: "Why ExpertConnect Works",
      points: [
        "Access expertise quickly and efficiently",
        "Reduce operational and market risks",
        "Make informed, strategic decisions",
      ],
      cta:
        "Reach out today to find the experts who can drive your business forward.",
    },
    forExperts: {
      title: "For Experts: Share Your Knowledge, Expand Your Impact",
      description:
        "ExpertConnect is not just for businesses—it’s a platform for professionals seeking consulting opportunities across Japan and Africa. We connect experts with companies that need their sector-specific knowledge, skills, and strategic insight, enabling mutually beneficial collaborations.",
      whyJoin: {
        title: "Why Join ExpertConnect?",
        points: [
          "Access Diverse Opportunities: Work on one-off projects, short-term assignments, or ongoing engagements across multiple industries.",
          "Flexible Work Arrangements: Choose assignments that fit your schedule, expertise, and career goals.",
          "Expand Your Influence: Apply your skills to real-world business challenges, from market entry strategies to operational optimization.",
          "Connect Across Borders: Engage with businesses in Japan and Africa, gaining global exposure while leveraging local insights.",
        ],
      },
      gettingStarted: {
        title: "Getting Started is Easy",
        steps: [
          "Register Your Profile: Share your experience, skills, and areas of expertise.",
          "Match with Projects: We connect you with companies seeking your knowledge.",
          "Collaborate & Deliver: Engage on projects that align with your interests and availability.",
        ],
      },
      cta: "Join Our Expert Network Today",
    },
    contactBox: {
      title: "Contact",
      lines: [
        "+81-80-5643-1501",
        "www.intellink-nippon.co.jp",
        "g-owuor@intellink-nippon.co.jp",
        "5th Floor, FPG Links Jinnan,",
        "1-11-4 Jinnan, Shibuya-ku, Tokyo",
      ],
    },
  };

  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  // no step state in single-page form
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    // Section 1: Personal Information
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    country: "",
    city: "",

    // Section 2: Contact Information
    email: "",
    phone: "",
    linkedin: "",
    preferredContact: "Email",

    // Section 3: Professional Background
    jobTitle: "",
    employer: "",
    yearsExperience: "",
    yearsSpecialization: "",
    availability: [],

    // Section 4: Areas of Expertise
    industrySectors: [],
    functionalExpertise: [],
    regionExpertise: [],
    keySkills: [],

    // Section 5: Qualifications & Credentials
    highestAcademicQualification: "",
    certifications: [],
    languages: [],

    // Section 6: Experience Portfolio
    projects: [{ title: "", role: "", description: "" }],
    publications: [],
    references: [],

    // Section 7: Engagement Preferences
    workArrangement: "Remote",
    expectedRate: "",
    willingToTravel: "No",
    travelRegions: "",
    noticePeriod: "Immediate",

    // Section 8: Supporting Documents
    resume: null,
    portfolioFiles: [],

    // Section 9: Consent & Declaration
    consentShareProfile: false,
    declarationAccurate: false,
  });

  const resumeInputRef = useRef(null);
  const portfolioInputRef = useRef(null);

  // Options
  const AVAILABILITY = ["Full-time", "Part-time", "Short-term contract", "Advisory", "On-demand"];
  const SECTORS = ["Finance", "Healthcare", "Energy", "Technology", "Agriculture", "Education", "Consulting", "Trade", "Manufacturing", "Public Sector"];
  const FUNCTIONS = ["Strategy", "Market Research", "Project Management", "Operations", "Finance", "Legal", "HR", "IT", "Engineering", "Supply Chain", "Marketing", "ESG"];
  const REGIONS = ["Africa", "Japan", "Asia-Pacific", "Europe", "Global"];
  const GENDERS = ["Male", "Female", "Non-binary", "Prefer not to say"];
  const CONTACT_METHODS = ["Email", "Phone", "WhatsApp", "LinkedIn"];
  const WORK_ARRANGEMENTS = ["On-site", "Remote", "Hybrid"];
  const NOTICE = ["Immediate", "2 weeks", "1 month", "2 months"];

  // Aliases to render content (use translations if available, else English defaults)
  const SVC = t.services || defaults.services;
  const UCC = t.useCases || defaults.useCases;
  const WHY = t.whyWorks || defaults.whyWorks;
  const FX = t.forExperts || defaults.forExperts;

  // No steps in single-page form

  // Helpers
  function updateField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  }
  function toggleFromArray(name, item) {
    setForm((prev) => {
      const set = new Set(prev[name]);
      set.has(item) ? set.delete(item) : set.add(item);
      return { ...prev, [name]: Array.from(set) };
    });
  }

  // No step-wise validation

  async function handleSubmit(e) {
    e?.preventDefault?.();
    // Single-pass validation
    const eAll = {};
    // Personal
    if (!form.firstName) eAll.firstName = "Required";
    if (!form.lastName) eAll.lastName = "Required";
    if (!form.dateOfBirth) eAll.dateOfBirth = "Required";
    if (!form.gender) eAll.gender = "Required";
    if (!form.nationality) eAll.nationality = "Required";
    if (!form.country) eAll.country = "Required";
    if (!form.city) eAll.city = "Required";
    // Contact
    if (!form.email) eAll.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) eAll.email = "Enter a valid email";
    if (!form.phone) eAll.phone = "Required";
    // Professional
    if (!form.jobTitle) eAll.jobTitle = "Required";
    if (!form.yearsExperience) eAll.yearsExperience = "Required";
    if (form.yearsExperience && Number(form.yearsExperience) < 0) eAll.yearsExperience = "Invalid";
    if (!form.yearsSpecialization) eAll.yearsSpecialization = "Required";
    // Expertise
    if (!form.industrySectors.length) eAll.industrySectors = "Select at least one";
    if (!form.functionalExpertise.length) eAll.functionalExpertise = "Select at least one";
    if (!form.regionExpertise.length) eAll.regionExpertise = "Select at least one";
    // Qualifications
    if (!form.highestAcademicQualification) eAll.highestAcademicQualification = "Required";
    // Documents
    if (!form.resume) eAll.resume = "Resume/CV is required";
    // Consent
    if (!form.consentShareProfile) eAll.consentShareProfile = "Required";
    if (!form.declarationAccurate) eAll.declarationAccurate = "Required";
    setErrors(eAll);
    if (Object.keys(eAll).length) return;

    setSubmitting(true);
    try {
      const endpoint = "https://intellink-8w9t.onrender.com/api/expert-connect";

      // Auto FormData if files exist; else JSON
      if (form.resume || (form.portfolioFiles && form.portfolioFiles.length)) {
        const fd = new FormData();
        const payload = { ...form };
        delete payload.resume;
        delete payload.portfolioFiles;
        // Append JSON as a plain string so multer treats it as a field
        fd.append("data", JSON.stringify(payload));
        if (form.resume) fd.append("resume", form.resume);
        (form.portfolioFiles || []).forEach((f, i) => fd.append(`portfolio_${i + 1}`, f));

        const res = await fetch(endpoint, { method: "POST", body: fd });
        if (!res.ok) throw new Error("Failed to submit form");
      } else {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Failed to submit form");
      }

      toast.success("Application submitted successfully, we're reviewing it.", {
        position: "top-right",
        autoClose: 3000,
      });
      setShowForm(false);
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setSubmitting(false);
    }
  }

  // Small UI helpers
  // Progress removed (single-page form)
  const Error = ({ msg }) => (msg ? <p className="ec-error">{msg}</p> : null);
  const Hint = ({ children }) => <p className="ec-hint">{children}</p>;

  function ChipInput({ label, name, values, placeholder, onChange }) {
    const [draft, setDraft] = useState("");
    function add(val) {
      const v = (val ?? draft).trim(); if (!v) return;
      onChange([...(values || []), v]); setDraft("");
    }
    function remove(idx) { onChange(values.filter((_, i) => i !== idx)); }
    return (
      <div className="ec-field">
        <label>{label}</label>
        <div style={{ fontSize: "clamp(1rem, 2.3vw, 1.5rem)", color: "#243149" }} className="ec-chipbox" onClick={() => document.getElementById(name)?.focus?.()}>
          {(values || []).map((v, i) => (
            <span className="ec-chip" key={`${name}-${i}`}>{v}
              <button type="button" aria-label="Remove" onClick={() => remove(i)}>×</button>
            </span>
          ))}
          <input
            id={name}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); add(); } }}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }

  function TagSelect({ label, options, values, name, onToggle, error }) {
    return (
      <div className="ec-field">
        <label>{label}</label>
        <div className="ec-tags">
          {options.map((opt) => (
            <button
              key={`${name}-${opt}`}
              type="button"
              className={`ec-tag ${values.includes(opt) ? "active" : ""}`}
              onClick={() => onToggle(name, opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <Error msg={error} />
      </div>
    );
  }

  function RepeaterProjects() {
    function update(idx, key, value) {
      const clone = [...form.projects]; clone[idx] = { ...clone[idx], [key]: value }; updateField("projects", clone);
    }
    function add() { updateField("projects", [...form.projects, { title: "", role: "", description: "" }]); }
    function remove(idx) {
      const clone = form.projects.filter((_, i) => i !== idx);
      updateField("projects", clone.length ? clone : [{ title: "", role: "", description: "" }]);
    }
    return (
      <div className="ec-repeater">
        {form.projects.map((p, i) => (
          <div className="ec-repeater-row" key={`proj-${i}`}>
            <div className="ec-grid-3">
              <div className="ec-field"><label>Project / Assignment</label>
                <input value={p.title} onChange={(e) => update(i, "title", e.target.value)} placeholder="e.g., Market Entry for East Africa" />
              </div>
              <div className="ec-field"><label>Role</label>
                <input value={p.role} onChange={(e) => update(i, "role", e.target.value)} placeholder="e.g., Lead Consultant" />
              </div>
              <div className="ec-field"><label>Short Description</label>
                <input value={p.description} onChange={(e) => update(i, "description", e.target.value)} placeholder="Outcome, scope, impact" />
              </div>
            </div>
            <div className="ec-row-actions">
              <button type="button" className="btn btn-ghost" onClick={() => remove(i)}>
                <FaTrash /> Remove
              </button>
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-soft" onClick={add}>+ Add Project</button>
      </div>
    );
  }

  // Step renderers
  function StepPersonal() {
    return (
      <div className="ec-grid-4">
        <div className="ec-field"><label>First Name</label>
          <input value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} />
          <Error msg={errors.firstName} />
        </div>
        <div className="ec-field"><label>Middle Name</label>
          <input value={form.middleName} onChange={(e) => updateField("middleName", e.target.value)} />
        </div>
        <div className="ec-field"><label>Last Name</label>
          <input value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} />
          <Error msg={errors.lastName} />
        </div>
        <div className="ec-field"><label>Date of Birth</label>
          <input type="date" value={form.dateOfBirth} onChange={(e) => updateField("dateOfBirth", e.target.value)} />
          <Error msg={errors.dateOfBirth} />
        </div>
        <div className="ec-field"><label>Gender</label>
          <select value={form.gender} onChange={(e) => updateField("gender", e.target.value)}>
            <option value="">Select</option>
            {GENDERS.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
          <Error msg={errors.gender} />
        </div>
        <div className="ec-field"><label>Nationality</label>
          <input value={form.nationality} onChange={(e) => updateField("nationality", e.target.value)} />
          <Error msg={errors.nationality} />
        </div>
        <div className="ec-field"><label>Country of Residence</label>
          <input value={form.country} onChange={(e) => updateField("country", e.target.value)} />
          <Error msg={errors.country} />
        </div>
        <div className="ec-field"><label>City/Region</label>
          <input value={form.city} onChange={(e) => updateField("city", e.target.value)} />
          <Error msg={errors.city} />
        </div>
      </div>
    );
  }

  function StepContact() {
    return (
      <div className="ec-grid-4">
        <div className="ec-field"><label>Email Address</label>
          <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
          <Error msg={errors.email} />
        </div>
        <div className="ec-field"><label>Phone/WhatsApp Number</label>
          <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
          <Error msg={errors.phone} />
        </div>
        <div className="ec-field"><label>LinkedIn / Portfolio</label>
          <input value={form.linkedin} onChange={(e) => updateField("linkedin", e.target.value)} placeholder="https://..." />
        </div>
        <div className="ec-field"><label>Preferred Method of Contact</label>
          <select value={form.preferredContact} onChange={(e) => updateField("preferredContact", e.target.value)}>
            {CONTACT_METHODS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      </div>
    );
  }

  function StepProfessional() {
    return (
      <div className="ec-grid-4">
        <div className="ec-field"><label>Current Job Title / Designation</label>
          <input value={form.jobTitle} onChange={(e) => updateField("jobTitle", e.target.value)} />
          <Error msg={errors.jobTitle} />
        </div>
        <div className="ec-field"><label>Current Employer / Organization</label>
          <input value={form.employer} onChange={(e) => updateField("employer", e.target.value)} placeholder="Optional if freelance" />
        </div>
        <div className="ec-field"><label>Years of Professional Experience</label>
          <input type="number" min="0" value={form.yearsExperience} onChange={(e) => updateField("yearsExperience", e.target.value)} />
          <Error msg={errors.yearsExperience} />
        </div>
        <div className="ec-field"><label>Total Years of Expertise in Specialization</label>
          <input type="number" min="0" value={form.yearsSpecialization} onChange={(e) => updateField("yearsSpecialization", e.target.value)} />
          <Error msg={errors.yearsSpecialization} />
        </div>
        <TagSelect
          label="Availability"
          name="availability"
          options={AVAILABILITY}
          values={form.availability}
          onToggle={toggleFromArray}
        />
      </div>
    );
  }

  function StepExpertise() {
    return (
      <>
        <TagSelect
          label="Industry Sector"
          name="industrySectors"
          options={SECTORS}
          values={form.industrySectors}
          onToggle={toggleFromArray}
          error={errors.industrySectors}
        />
        <TagSelect
          label="Functional Expertise"
          name="functionalExpertise"
          options={FUNCTIONS}
          values={form.functionalExpertise}
          onToggle={toggleFromArray}
          error={errors.functionalExpertise}
        />
        <TagSelect
          label="Region of Expertise"
          name="regionExpertise"
          options={REGIONS}
          values={form.regionExpertise}
          onToggle={toggleFromArray}
          error={errors.regionExpertise}
        />
        <ChipInput
          label="Key Skills"
          name="keySkills"
          values={form.keySkills}
          placeholder="Type a skill and press Enter"
          onChange={(vals) => updateField("keySkills", vals)}
        />
      </>
    );
  }

  function StepQualifications() {
    return (
      <div className="ec-grid-4">
        <div style={{ fontSize: "clamp(1rem, 2.3vw, 1.5rem)", color: "#243149" }} className="ec-field"><label>Highest Academic Qualification</label>
          <input value={form.highestAcademicQualification} onChange={(e) => updateField("highestAcademicQualification", e.target.value)} />
          <Error msg={errors.highestAcademicQualification} />
        </div>
        <ChipInput 
          label="Professional Certifications (CFA, PMP, etc.)"
          name="certifications"
          values={form.certifications}
          placeholder="Type and press Enter"
          onChange={(vals) => updateField("certifications", vals)}
        />
        <ChipInput
          label="Languages Spoken (with proficiency)"
          name="languages"
          values={form.languages}
          placeholder="e.g., English — Fluent"
          onChange={(vals) => updateField("languages", vals)}
        />
      </div>
    );
  }

  function StepPortfolio() {
    return (
      <>
        <RepeaterProjects />
        <ChipInput style={{ marginTop: "1.5rem", fontSize: "clamp(1rem, 2.3vw, 1.5rem)", color: "#243149" }}
          label="Publications / Research / Thought Leadership"
          name="publications"
          values={form.publications}
          placeholder="Title or link — press Enter"
          onChange={(vals) => updateField("publications", vals)}
        />
        <ChipInput 
          style={{ marginTop: "1.5rem", fontSize: "clamp(1rem, 2.3vw, 1.5rem)", color: "#243149" }} 
          label="References (optional)"
          name="references"
          values={form.references}
          placeholder="Name — Contact"
          onChange={(vals) => updateField("references", vals)}
        />
      </>
    );
  }

  function StepEngagement() {
    return (
      <div className="ec-grid-4">
        <div className="ec-field"><label>Preferred Work Arrangement</label>
          <select value={form.workArrangement} onChange={(e) => updateField("workArrangement", e.target.value)}>
            {WORK_ARRANGEMENTS.map((w) => <option key={w} value={w}>{w}</option>)}
          </select>
        </div>
        <div className="ec-field"><label>Expected Daily/Hourly Rate (optional / negotiable)</label>
          <input value={form.expectedRate} onChange={(e) => updateField("expectedRate", e.target.value)} placeholder="$ / day or $ / hr" />
        </div>
        <div className="ec-field"><label>Willingness to Travel</label>
          <select value={form.willingToTravel} onChange={(e) => updateField("willingToTravel", e.target.value)}>
            <option>No</option><option>Yes</option>
          </select>
          <Hint>Specify regions if yes.</Hint>
        </div>
        {form.willingToTravel === "Yes" && (
          <div className="ec-field"><label>Travel Regions</label>
            <input value={form.travelRegions} onChange={(e) => updateField("travelRegions", e.target.value)} placeholder="e.g., East Africa, Japan" />
          </div>
        )}
        <div className="ec-field"><label>Availability Notice Period</label>
          <select value={form.noticePeriod} onChange={(e) => updateField("noticePeriod", e.target.value)}>
            {NOTICE.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>
    );
  }

  function StepDocuments() {
    return (
      <div className="ec-grid-2">
        <div className="ec-field">
          <label>Upload Resume/CV <span className="req">*</span></label>
          <div className="ec-uploader" onClick={() => resumeInputRef.current?.click?.()}>
            <FaUpload />
            <div>
              <strong style={{ fontSize: "clamp(1rem, 2.3vw, 1.5rem)", color: "#243149" }}>{form.resume ? form.resume.name : "Choose file or drop here"}</strong>
              <p className="ec-hint">PDF / DOCX preferred</p>
            </div>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.rtf"
              ref={resumeInputRef}
              style={{ display: "none" }}
              onChange={(e) => updateField("resume", e.target.files?.[0] || null)}
            />
          </div>
          <Error msg={errors.resume} />
        </div>
        <div className="ec-field">
          <label>Upload Portfolio / Case Studies (optional)</label>
          <div className="ec-uploader" onClick={() => portfolioInputRef.current?.click?.()}>
            <FaUpload />
            <div>
              <strong style={{ fontSize: "clamp(1rem, 2.3vw, 1.5rem)", color: "#243149" }}>{form.portfolioFiles?.length ? `${form.portfolioFiles.length} file(s) selected` : "Choose files or drop here"}</strong>
              <p className="ec-hint">PDF / PPT / Images</p>
            </div>
            <input
              type="file"
              multiple
              accept=".pdf,.ppt,.pptx,.png,.jpg,.jpeg,.webp"
              ref={portfolioInputRef}
              style={{ display: "none" }}
              onChange={(e) => updateField("portfolioFiles", Array.from(e.target.files || []))}
            />
          </div>
        </div>
      </div>
    );
  }

  function StepConsent() {
    return (
      <div className="ec-stack">
        <label className="ec-check">
          <input
            type="checkbox"
            checked={form.consentShareProfile}
            onChange={(e) => updateField("consentShareProfile", e.target.checked)}
          />
          <span style={{ fontSize: "clamp(1rem, 2.3vw, 1.5rem)", color: "#243149" }}>I consent for Intellink Nippon Consulting LLC to share my profile with potential clients.</span>
        </label>
        <Error msg={errors.consentShareProfile} />
        <label className="ec-check">
          <input
            type="checkbox"
            checked={form.declarationAccurate}
            onChange={(e) => updateField("declarationAccurate", e.target.checked)}
          />
          <span style={{ fontSize: "clamp(1rem, 2.3vw, 1.5rem)", color: "#243149" }}  >I declare that the information provided is accurate.</span>
        </label>
        <Error msg={errors.declarationAccurate} />
      </div>
    );
  }

  

  // renderStep removed (single-page form)

  return (
    <div className="marketlink-page expertconnect-page">
      {isLoading && (
        <div className="ec-loading">
          <div className="spinner" />
          <p>Loading content...</p>
        </div>
      )}

      {/* HERO */}
      <section
        className="ec-hero"
        style={{ display: isLoading ? "none" : "block" }}
      >
        <video className="ec-hero-video"
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="/images/expert-hero1.mp4" type="video/mp4" 
        />
        
        <div className="ec-hero-overlay">
         
          <h1 className="ec-hero-title">{t?.title || "ExpertConnect™"}</h1>
          <p className="ec-hero-sub">{t?.tagline || "Connecting you with the expertise you need to succeed."}</p>
          {t?.heroDescription && <p className="ec-hero-desc">{t.heroDescription}</p>}
          <div className="ec-hero-cta">
            <Link to="/contact" className="btn btn-outline">{t?.cta?.alt || "Find an Expert Today"}</Link>
            <button
              className="btn btn-primary"
              onClick={() => {
                setShowForm(true);
                setTimeout(() => document.getElementById("application")?.scrollIntoView({ behavior: "smooth", block: "start" }), 10);
              }}
            >
              Apply as Expert <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="ec-hero-fade" />
        
          
        
      </section>

      {/* INTRO */}
      {t?.intro && (
        <section className="ec-section ec-intro">
          <div className="ec-container">
            <div className="ec-intro-card glass">
              <h3 className="ec-h3">About ExpertConnect™</h3>
              <p>{t.intro}</p>
            </div>
          </div>
        </section>
      )}

      {/* SOLUTIONS OFFERED */}
      {false && (
        <section className="ec-section">
          <div className="ec-container ec-split">
            <div className="ec-split-media">
              <img
                src="/images/ExpertConnect.jpg"
                alt="Solutions Offered"
                onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                loading="lazy"
              />
            </div>
            <div className="ec-split-content">
              <h3 className="ec-h3">{t.whatIs.title}</h3>
              <ul className="ec-list">
                {(t.whatIs.points || []).map((p, i) => (
                  <li key={`whatIs-${i}`}>
                    <FaCheckCircle /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* USE CASES */}
      {false && (
        <section className="ec-section ec-section-alt">
          <div className="ec-container">
            <div className="ec-section-head">
              <h3 className="ec-h3">{t.expect.title}</h3>
            </div>
            <div className="ec-grid">
              {(t.expect.points || []).map((p, i) => (
                <div className="ec-card" key={`expect-${i}`}>
                  <div className="ec-card-icon"><FaClipboardCheck /></div>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* IDEAL USERS */}
      {t?.howItWorks && (
        <section className="ec-section">
          <div className="ec-container">
            <div className="ec-section-head">
              <h3 className="ec-h3" style={{ color: "var(--brand-gold)" }}>{t.howItWorks.title}</h3>
            </div>
            <div className="ec-grid ec-grid-3">
              {(t.howItWorks.points || []).map((p, i) => (
                <div className="ec-card ec-card-soft" key={`how-${i}`} style={{ borderTop: "4px solid var(--brand-gold)", 
                  color: "#000"
                }}>
                  <p style={{ color: "#000" }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SERVICES (new) */}
      {(SVC) && (
        <section className="ec-section">
          <div className="ec-container">
            <div className="ec-section-head">
              <h3 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#E63946" }} className="ec-h3">{SVC.title || "Services"}</h3>
              {SVC.description && <p style={{ fontSize: "clamp(1rem, 2.3vw, 1.5rem)", color: "#000" }} className="ec-lead">{SVC.description}</p>}
            </div>
            <div className="ec-grid">
              {(SVC.items || []).map((s, i) => (
                <div className="ec-card" key={`svc-${i}`}>
                  <h4 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", color: "#E63946" }} className="ec-h4">{s.title}</h4>
                  <p>{s.body}</p>
                  {s.cta && (
                    <div className="ec-card-actions">
                      <Link to="/contact" className="btn btn-soft">{s.cta}</Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* USE CASES (new) */}
      {(UCC) && (
        <section className="ec-section ec-section-alt">
          <div className="ec-container">
            <div className="ec-section-head">
              <h3 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#000" }} className="ec-h3">{UCC.title || "Use Cases"}</h3>
            </div>
            <div className="ec-grid">
              {(UCC.items || []).map((c, i) => (
                <div className="ec-card" key={`case-${i}`}>
                  <div className="ec-card-icon"></div>
                  <h4 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", color: "#000" }} className="ec-h4">{c.title}</h4>
                  {(c.points || []).map((p, j) => (
                    <p key={`cp-${i}-${j}`}>{p}</p>
                  ))}
                  {c.result && <p><strong>Result:</strong> {c.result}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY IT WORKS (new) */}
      {(WHY) && (
        <section className="ec-section">
          <div className="ec-container">
            <div className="ec-section-head">
              <h3 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }} className="ec-h3">{WHY.title}</h3>
            </div>
            <ul className="ec-list">
              {(WHY.points || []).map((p, i) => (
                <li style={{fontSize: "clamp(1rem, 2.3vw, 1.5rem)"}} key={`why-${i}`}>
                  <FaCheckCircle /> {p}
                </li>
              ))}
            </ul>
            {WHY.cta && (
              <div className="ec-hero-cta" style={{marginTop: 16}}>
                <Link to="/contact" className="btn btn-primary">{WHY.cta}</Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FOR EXPERTS (new) */}
      {(FX) && (
        <section className="ec-section ec-section-alt">
          <div className="ec-container">
            <div className="ec-section-head">
              <h3 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }} className="ec-h3">{FX.title}</h3>
              {FX.description && <p style={{ fontSize: "clamp(1rem, 2.3vw, 1.5rem)", }} className="ec-lead">{FX.description}</p>}
            </div>
            {FX.whyJoin && (
              <div className="ec-split">
                <div className="ec-split-content">
                  <h4 className="ec-h4">{FX.whyJoin.title}</h4>
                  <ul className="ec-list">
                    {(FX.whyJoin.points || []).map((p, i) => (
                      <li style={{fontSize: "clamp(1rem, 2.3vw, 1.5rem)", }} key={`wj-${i}`}><FaCheckCircle /> {p}</li>
                    ))}
                  </ul>
                </div>
                <div className="ec-split-content">
                  <h4 className="ec-h4">{FX.gettingStarted?.title || "Getting Started is Easy"}</h4>
                  <ol className="ec-list numbered">
                    {(FX.gettingStarted?.steps || []).map((s, i) => (
                      <li style={{fontSize: "clamp(1rem, 2.3vw, 1.5rem)"}} key={`gs-${i}`}>{s}</li>
                    ))}
                  </ol>
                  {FX.cta && (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setShowForm(true);
                        setTimeout(() => document.getElementById("application")?.scrollIntoView({ behavior: "smooth", block: "start" }), 10);
                      }}
                    >
                      {FX.cta}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      

      {/* REGISTER CTA BLOCK */}
      {t?.register && (
        <section className="ec-section">
          <div className="ec-container ec-split reverse">
            <div className="ec-split-media">
              <img
                src="/images/istockphoto-4.avif"
                alt="Tap into expertise"
                onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                loading="lazy"
              />
            </div>
            <div className="ec-split-content">
              <h3 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#000" }} className="ec-h3">{t.register.title}</h3>
              {t.register.description && <p style={{ fontSize: "clamp(1rem, 2.3vw, 1.5rem)", color: "#000" }} className="ec-lead">{t.register.description}</p>}
              <div className="ec-hero-cta">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setShowForm(true);
                    setTimeout(() => document.getElementById("application")?.scrollIntoView({ behavior: "smooth", block: "start" }), 10);
                  }}
                >
                  {t.register.ctaButton || "Request an Expert →"}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* INLINE WIZARD (toggleable) */}
      {showForm && (
        <section id="application" className="ec-section">
          <div className="ec-container">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,marginBottom:6}}>
              <h3 className="ec-h3" style={{margin:0}}>Register As an Expert</h3>
              <button type="button" className="btn btn-ghost" onClick={() => setShowForm(false)}>Hide form</button>
            </div>

            <form className="ec-form" onSubmit={handleSubmit} onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSubmit(e); }}>
              <div className="ec-card ec-card-soft">
                <h4 className="ec-h4" style={{marginTop:0}}>Personal Information</h4>
                {StepPersonal()}
              </div>
              <div className="ec-card ec-card-soft">
                <h4 className="ec-h4" style={{marginTop:0}}>Contact Information</h4>
                {StepContact()}
              </div>
              <div className="ec-card ec-card-soft">
                <h4 className="ec-h4" style={{marginTop:0}}>Professional Background</h4>
                {StepProfessional()}
              </div>
              <div className="ec-card ec-card-soft">
                <h4 className="ec-h4" style={{marginTop:0}}>Areas of Expertise</h4>
                {StepExpertise()}
              </div>
              <div className="ec-card ec-card-soft">
                <h4 className="ec-h4" style={{marginTop:0}}>Qualifications & Credentials</h4>
                {StepQualifications()}
              </div>
              <div className="ec-card ec-card-soft">
                <h4 className="ec-h4" style={{marginTop:0}}>Experience Portfolio</h4>
                {StepPortfolio()}
              </div>
              <div className="ec-card ec-card-soft">
                <h4 className="ec-h4" style={{marginTop:0}}>Engagement Preferences</h4>
                {StepEngagement()}
              </div>
              <div className="ec-card ec-card-soft">
                <h4 className="ec-h4" style={{marginTop:0}}>Supporting Documents</h4>
                {StepDocuments()}
              </div>
              <div className="ec-card ec-card-soft">
                <h4 className="ec-h4" style={{marginTop:0}}>Consent & Declaration</h4>
                {StepConsent()}
              </div>
              <div className="ec-wizard-nav" style={{justifyContent:'flex-end'}}>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* CTA BAR (sticky) */}
      <section className="ec-cta">
        <div className="ec-cta-inner">
          <div className="ec-cta-left"><FaRocket /><div><h3 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#F63946" }}>{t?.cta?.title || "Ready to move faster?"}</h3><p style={{ fontSize: "clamp(1rem, 2.3vw, 1.5rem)", color: "#000" }}>{t?.cta?.subtitle || "Join as an expert or request one."}</p></div></div>
          <div className="ec-cta-right">
            <button
              className="btn btn-primary"
              onClick={() => {
                setShowForm(true);
                setTimeout(() => document.getElementById("application")?.scrollIntoView({ behavior: "smooth", block: "start" }), 10);
              }}
            >
              Apply as Expert
            </button>
            <Link to="/contact" className="btn btn-outline">Talk to Us</Link>
          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
}



