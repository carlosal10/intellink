import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaClipboardCheck, FaRocket, FaCheckCircle, FaArrowRight, FaUpload, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTranslate from "../hooks/useTranslate";
import "./ExpertConnect.css";

export default function ExpertConnectPage() {
  const t = useTranslate("expertConnect") || {};
  const isLoading = !t?.title && !t?.tagline;

  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    country: "",
    city: "",
    email: "",
    phone: "",
    linkedin: "",
    preferredContact: "Email",
    jobTitle: "",
    employer: "",
    yearsExperience: "",
    yearsSpecialization: "",
    availability: [],
    industrySectors: [],
    functionalExpertise: [],
    regionExpertise: [],
    keySkills: [],
    highestAcademicQualification: "",
    certifications: [],
    languages: [],
    projects: [{ title: "", role: "", description: "" }],
    publications: [],
    references: [],
    workArrangement: "Remote",
    expectedRate: "",
    willingToTravel: "No",
    travelRegions: "",
    noticePeriod: "Immediate",
    resume: null,
    portfolioFiles: [],
    consentShareProfile: false,
    declarationAccurate: false,
  });

  const resumeInputRef = useRef(null);
  const portfolioInputRef = useRef(null);

  const AVAILABILITY = ["Full-time", "Part-time", "Short-term contract", "Advisory", "On-demand"];
  const SECTORS = ["Finance", "Healthcare", "Energy", "Technology", "Agriculture", "Education", "Consulting", "Trade", "Manufacturing", "Public Sector"];
  const FUNCTIONS = ["Strategy", "Market Research", "Project Management", "Operations", "Finance", "Legal", "HR", "IT", "Engineering", "Supply Chain", "Marketing", "ESG"];
  const REGIONS = ["Africa", "Japan", "Asia-Pacific", "Europe", "Global"];
  const GENDERS = ["Male", "Female", "Non-binary", "Prefer not to say"];
  const CONTACT_METHODS = ["Email", "Phone", "WhatsApp", "LinkedIn"];
  const WORK_ARRANGEMENTS = ["On-site", "Remote", "Hybrid"];
  const NOTICE = ["Immediate", "2 weeks", "1 month", "2 months"];

  const steps = useMemo(() => [
    { key: "personal", title: "Personal", desc: "Who you are" },
    { key: "contact", title: "Contact", desc: "How to reach you" },
    { key: "professional", title: "Background", desc: "Experience summary" },
    { key: "expertise", title: "Expertise", desc: "Sectors & skills" },
    { key: "qualifications", title: "Qualifications", desc: "Degrees & credentials" },
    { key: "portfolio", title: "Portfolio", desc: "Projects & publications" },
    { key: "engagement", title: "Engagement", desc: "Work preferences" },
    { key: "documents", title: "Documents", desc: "Resume & portfolio" },
    { key: "consent", title: "Consent", desc: "Permissions & declaration" },
    { key: "review", title: "Review", desc: "Final check" },
  ], []);

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

  function validateCurrentStep() {
    const e = {};
    const s = steps[step]?.key;
    if (s === "personal") {
      if (!form.firstName) e.firstName = "Required";
      if (!form.lastName) e.lastName = "Required";
      if (!form.dateOfBirth) e.dateOfBirth = "Required";
      if (!form.gender) e.gender = "Required";
      if (!form.nationality) e.nationality = "Required";
      if (!form.country) e.country = "Required";
      if (!form.city) e.city = "Required";
    }
    if (s === "contact") {
      if (!form.email) e.email = "Required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
      if (!form.phone) e.phone = "Required";
    }
    if (s === "professional") {
      if (!form.jobTitle) e.jobTitle = "Required";
      if (!form.yearsExperience) e.yearsExperience = "Required";
      if (form.yearsExperience && Number(form.yearsExperience) < 0) e.yearsExperience = "Invalid";
      if (!form.yearsSpecialization) e.yearsSpecialization = "Required";
    }
    if (s === "expertise") {
      if (!form.industrySectors.length) e.industrySectors = "Select at least one";
      if (!form.functionalExpertise.length) e.functionalExpertise = "Select at least one";
      if (!form.regionExpertise.length) e.regionExpertise = "Select at least one";
    }
    if (s === "qualifications") {
      if (!form.highestAcademicQualification) e.highestAcademicQualification = "Required";
    }
    if (s === "documents") {
      if (!form.resume) e.resume = "Resume/CV is required";
    }
    if (s === "consent") {
      if (!form.consentShareProfile) e.consentShareProfile = "Required";
      if (!form.declarationAccurate) e.declarationAccurate = "Required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() { if (!validateCurrentStep()) return; setStep((i) => Math.min(i + 1, steps.length - 1)); }
  function back() { setStep((i) => Math.max(i - 1, 0)); }

  async function handleSubmit(e) {
    e?.preventDefault?.();
    let ok = true;
    for (let i = 0; i < steps.length; i++) {
      setStep(i);
      if (!validateCurrentStep()) { ok = false; break; }
    }
    if (!ok) return;

    setSubmitting(true);
    try {
      const endpoint = "https://intellink-8w9t.onrender.com/api/expert-connect";
      if (form.resume || (form.portfolioFiles && form.portfolioFiles.length)) {
        const fd = new FormData();
        const payload = { ...form }; delete payload.resume; delete payload.portfolioFiles;
        fd.append("data", new Blob([JSON.stringify(payload)], { type: "application/json" }));
        if (form.resume) fd.append("resume", form.resume);
        (form.portfolioFiles || []).forEach((f, i) => fd.append(`portfolio_${i+1}`, f));
        const res = await fetch(endpoint, { method: "POST", body: fd });
        if (!res.ok) throw new Error("Failed to submit form");
      } else {
        const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
        if (!res.ok) throw new Error("Failed to submit form");
      }
      toast.success("Application submitted. We'll review and respond.", { position: "top-right", autoClose: 3000 });
      setTimeout(() => { setStep(0); updateField("resume", null); updateField("portfolioFiles", []); }, 400);
      setShowForm(false);
    } catch (err) {
      toast.error("Something went wrong. Please try again.", { position: "top-right", autoClose: 3000 });
    } finally { setSubmitting(false); }
  }

  const Progress = () => {
    const pct = ((step + 1) / steps.length) * 100;
    return (
      <div className="ec-progress">
        <div className="ec-progress-bar" style={{ width: `${pct}%` }} />
        <div className="ec-progress-meta"><span>Step {step + 1} / {steps.length}</span><span>{steps[step]?.title}</span></div>
      </div>
    );
  };
  const Error = ({ msg }) => (msg ? <p className="ec-error">{msg}</p> : null);
  const Hint = ({ children }) => <p className="ec-hint">{children}</p>;

  function ChipInput({ label, name, values, placeholder, onChange }) {
    const [draft, setDraft] = useState("");
    function add(val) { const v = (val ?? draft).trim(); if (!v) return; onChange([...(values||[]), v]); setDraft(""); }
    function remove(idx) { onChange(values.filter((_, i) => i !== idx)); }
    return (
      <div className="ec-field">
        <label>{label}</label>
        <div className="ec-chipbox" onClick={() => document.getElementById(name)?.focus?.()}>
          {(values||[]).map((v, i) => (
            <span className="ec-chip" key={`${name}-${i}`}>{v}
              <button type="button" aria-label="Remove" onClick={() => remove(i)}>×</button>
            </span>
          ))}
          <input id={name} value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); add(); } }} placeholder={placeholder} />
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
            <button key={`${name}-${opt}`} type="button" className={`ec-tag ${values.includes(opt) ? "active" : ""}`} onClick={() => onToggle(name, opt)}>
              {opt}
            </button>
          ))}
        </div>
        <Error msg={error} />
      </div>
    );
  }

  function RepeaterProjects() {
    function update(idx, key, value) { const clone = [...form.projects]; clone[idx] = { ...clone[idx], [key]: value }; updateField("projects", clone); }
    function add() { updateField("projects", [...form.projects, { title: "", role: "", description: "" }]); }
    function remove(idx) { const clone = form.projects.filter((_, i) => i !== idx); updateField("projects", clone.length ? clone : [{ title: "", role: "", description: "" }]); }
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
              <button type="button" className="btn btn-ghost" onClick={() => remove(i)}><FaTrash /> Remove</button>
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-soft" onClick={add}>+ Add Project</button>
      </div>
    );
  }

  function StepPersonal() { return (
    <div className="ec-grid-3">
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
  ); }

  function StepContact() { return (
    <div className="ec-grid-2">
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
  ); }

  function StepProfessional() { return (
    <div className="ec-grid-3">
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
      <TagSelect label="Availability" name="availability" options={AVAILABILITY} values={form.availability} onToggle={toggleFromArray} />
    </div>
  ); }

  function StepExpertise() { return (
    <>
      <TagSelect label="Industry Sector" name="industrySectors" options={SECTORS} values={form.industrySectors} onToggle={toggleFromArray} error={errors.industrySectors} />
      <TagSelect label="Functional Expertise" name="functionalExpertise" options={FUNCTIONS} values={form.functionalExpertise} onToggle={toggleFromArray} error={errors.functionalExpertise} />
      <TagSelect label="Region of Expertise" name="regionExpertise" options={REGIONS} values={form.regionExpertise} onToggle={toggleFromArray} error={errors.regionExpertise} />
      <ChipInput label="Key Skills" name="keySkills" values={form.keySkills} placeholder="Type a skill and press Enter" onChange={(vals) => updateField("keySkills", vals)} />
    </>
  ); }

  function StepQualifications() { return (
    <div className="ec-grid-2">
      <div className="ec-field"><label>Highest Academic Qualification</label>
        <input value={form.highestAcademicQualification} onChange={(e) => updateField("highestAcademicQualification", e.target.value)} />
        <Error msg={errors.highestAcademicQualification} />
      </div>
      <ChipInput label="Professional Certifications (CFA, PMP, etc.)" name="certifications" values={form.certifications} placeholder="Type and press Enter" onChange={(vals) => updateField("certifications", vals)} />
      <ChipInput label="Languages Spoken (with proficiency)" name="languages" values={form.languages} placeholder="e.g., English — Fluent" onChange={(vals) => updateField("languages", vals)} />
    </div>
  ); }

  function StepPortfolio() { return (
    <>
      <RepeaterProjects />
      <ChipInput label="Publications / Research / Thought Leadership" name="publications" values={form.publications} placeholder="Title or link — press Enter" onChange={(vals) => updateField("publications", vals)} />
      <ChipInput label="References (optional)" name="references" values={form.references} placeholder="Name — Contact" onChange={(vals) => updateField("references", vals)} />
    </>
  ); }

  function StepEngagement() { return (
    <div className="ec-grid-3">
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
  ); }

  function StepDocuments() { return (
    <div className="ec-grid-2">
      <div className="ec-field">
        <label>Upload Resume/CV <span className="req">*</span></label>
        <div className="ec-uploader" onClick={() => resumeInputRef.current?.click?.()}>
          <FaUpload />
          <div>
            <strong>{form.resume ? form.resume.name : "Choose file or drop here"}</strong>
            <p className="ec-hint">PDF / DOCX preferred</p>
          </div>
          <input type="file" accept=".pdf,.doc,.docx,.rtf" ref={resumeInputRef} style={{ display: "none" }} onChange={(e) => updateField("resume", e.target.files?.[0] || null)} />
        </div>
        <Error msg={errors.resume} />
      </div>
      <div className="ec-field">
        <label>Upload Portfolio / Case Studies (optional)</label>
        <div className="ec-uploader" onClick={() => portfolioInputRef.current?.click?.()}>
          <FaUpload />
          <div>
            <strong>{form.portfolioFiles?.length ? `${form.portfolioFiles.length} file(s) selected` : "Choose files or drop here"}</strong>
            <p className="ec-hint">PDF / PPT / Images</p>
          </div>
          <input type="file" multiple accept=".pdf,.ppt,.pptx,.png,.jpg,.jpeg,.webp" ref={portfolioInputRef} style={{ display: "none" }} onChange={(e) => updateField("portfolioFiles", Array.from(e.target.files || []))} />
        </div>
      </div>
    </div>
  ); }

  function StepConsent() { return (
    <div className="ec-stack">
      <label className="ec-check">
        <input type="checkbox" checked={form.consentShareProfile} onChange={(e) => updateField("consentShareProfile", e.target.checked)} />
        <span>I consent for Intellink Nippon Consulting LLC to share my profile with potential clients.</span>
      </label>
      <Error msg={errors.consentShareProfile} />
      <label className="ec-check">
        <input type="checkbox" checked={form.declarationAccurate} onChange={(e) => updateField("declarationAccurate", e.target.checked)} />
        <span>I declare that the information provided is accurate.</span>
      </label>
      <Error msg={errors.declarationAccurate} />
    </div>
  ); }

  function StepReview() {
    const fullName = [form.firstName, form.middleName, form.lastName].filter(Boolean).join(" ");
    return (
      <div className="ec-review">
        <div className="ec-review-card">
          <h4>Applicant</h4>
          <p><strong>{fullName || "—"}</strong></p>
          <p>{form.email || "—"} · {form.phone || "—"}</p>
          <p>{[form.country, form.city].filter(Boolean).join(", ") || "—"}</p>
          <p>{form.jobTitle || "—"}{form.employer ? ` @ ${form.employer}` : ""}</p>
        </div>
        <div className="ec-review-card">
          <h4>Expertise</h4>
          <p><strong>Sectors:</strong> {form.industrySectors.join(", ") || "—"}</p>
          <p><strong>Functions:</strong> {form.functionalExpertise.join(", ") || "—"}</p>
          <p><strong>Regions:</strong> {form.regionExpertise.join(", ") || "—"}</p>
          <p><strong>Skills:</strong> {form.keySkills.join(", ") || "—"}</p>
        </div>
        <div className="ec-review-card">
          <h4>Engagement</h4>
          <p>{form.workArrangement} · Notice: {form.noticePeriod}</p>
          <p>Rate: {form.expectedRate || "Negotiable"}</p>
          <p>Travel: {form.willingToTravel}{form.travelRegions ? ` — ${form.travelRegions}` : ""}</p>
        </div>
      </div>
    );
  }

  function renderStep() {
    switch (steps[step]?.key) {
      case "personal": return <StepPersonal />;
      case "contact": return <StepContact />;
      case "professional": return <StepProfessional />;
      case "expertise": return <StepExpertise />;
      case "qualifications": return <StepQualifications />;
      case "portfolio": return <StepPortfolio />;
      case "engagement": return <StepEngagement />;
      case "documents": return <StepDocuments />;
      case "consent": return <StepConsent />;
      case "review": return <StepReview />;
      default: return null;
    }
  }

  return (
    <div className="ec-shell">
      {isLoading && (
        <div className="ec-loading"><div className="spinner" /><p>Loading content...</p></div>
      )}

      {/* HERO */}
      <section className="ec-hero" style={{
        backgroundImage:
          "url('/images/expert-hero.jpg'), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80')",
      }}>
        <div className="ec-hero-overlay">
          <div className="ec-hero-chip">ExpertConnect™</div>
          <h1 className="ec-hero-title">{t?.title || "Expert Connect"}</h1>
          <p className="ec-hero-sub">{t?.tagline || "Vetted expertise. On demand."}</p>
          <p className="ec-hero-desc">{t?.heroDescription || "Tap into a global bench of specialists across Africa, Japan, and beyond."}</p>
          <div className="ec-hero-cta">
            <Link to="/contact" className="btn btn-outline">{t?.cta?.alt || "Contact Us"}</Link>
            <button type="button" className="btn btn-primary" onClick={() => { setShowForm(true); setTimeout(() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 10); }}>
              Apply as Expert <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="ec-hero-fade" />
      </section>

      {/* WHAT TO EXPECT */}
      {t?.expect && (
        <section className="ec-section ec-section-alt">
          <div className="ec-container">
            <div className="ec-section-head">
              <h3 className="ec-h3">{t.expect.title}</h3>
              <p className="ec-sub">{t?.expect?.subtitle || "A curated experience from brief to engagement."}</p>
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

      {/* INLINE WIZARD (toggleable) */}
      {showForm && (
        <section id="application" className="ec-section">
          <div className="ec-container">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,marginBottom:6}}>
              <h3 className="ec-h3" style={{margin:0}}>ExpertConnect Application</h3>
              <button type="button" className="btn btn-ghost" onClick={() => setShowForm(false)}>Hide form</button>
            </div>

            <Progress />

            <form className="ec-form" onSubmit={handleSubmit} onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSubmit(e); }}>
              {renderStep()}
              <div className="ec-wizard-nav">
                <button type="button" className="btn btn-outline" onClick={back} disabled={step === 0}>Back</button>
                {step < steps.length - 1 ? (
                  <button type="button" className="btn btn-primary" onClick={next}>Next</button>
                ) : (
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      )}

      {/* CTA BAR (sticky) */}
      <section className="ec-cta">
        <div className="ec-cta-inner">
          <div className="ec-cta-left"><FaRocket /><div><h3>{t?.cta?.title || "Ready to move faster?"}</h3><p>{t?.cta?.subtitle || "Join as an expert or request one."}</p></div></div>
          <div className="ec-cta-right">
            <button type="button" className="btn btn-primary" onClick={() => { setShowForm(true); setTimeout(() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 10); }}>
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
