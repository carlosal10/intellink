import React, { useEffect, useMemo, useState } from "react";
import "./Insights.css";
import { FaFileAlt, FaSyncAlt, FaGlobe, FaChartLine, FaShieldAlt, FaExchangeAlt, FaCheckCircle } from "react-icons/fa";
import useTranslate from "../hooks/useTranslate";

// Reusable Section component
const Section = ({ title, children }) => (
  <section className="insights-section">
    {title && <div className="section-title"><h2>{title}</h2></div>}
    {children}
  </section>
);

// Reusable Card Grid component
const CardGrid = ({ items }) => (
  <div className="articles-grid">
    {items.map((item, idx) => (
      <div key={idx} className="article-card">
        <span className="article-title">{item.title}</span>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>
);

export default function Insights() {
  const t = useTranslate("insights") || {};

  // Pull content from translation object
  const hero = t.hero || {};
  const overview = t.overview || "";
  const featuredInsights = t.featuredInsights || [];
  const useCases = t.useCases || [];
  const idealUsers = t.idealUsers || [];
  const ctaSection = t.ctaSection || {};
  const filtersData = useMemo(() => t.filters || {}, [t.filters]);
  const catalog = useMemo(() => t.catalog || [], [t.catalog]);
  const plans = t.subscribePlans || [];
  const benefitsRow = t.benefitsRow || [];

  // Search and filters state
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [selected, setSelected] = useState({
    sectors: new Set(),
    geographies: new Set(),
    format: new Set(),
    year: new Set(),
    paid: "all" // 'all' | 'free' | 'paid'
  });
  const [sort, setSort] = useState("Newest");

  useEffect(() => {
    const id = setTimeout(() => setDebouncedQ(q.trim().toLowerCase()), 250);
    return () => clearTimeout(id);
  }, [q]);

  const filtered = useMemo(() => {
    const matchesQ = (r) => {
      if (!debouncedQ) return true;
      const hay = `${r.title || ""} ${r.abstract || ""}`.toLowerCase();
      return hay.includes(debouncedQ);
    };
    const matchesSet = (set, val) => set.size === 0 || set.has(val);
    const res = catalog.filter((r) =>
      matchesQ(r)
      && matchesSet(selected.sectors, r.sector)
      && matchesSet(selected.geographies, r.geography)
      && matchesSet(selected.format, r.format)
      && (selected.year.size === 0 || selected.year.has(String(r.year)))
      && (selected.paid === 'all' || (selected.paid === 'paid' ? r.paid : !r.paid))
    );
    const byDate = (a, b) => new Date(b.lastUpdated || 0) - new Date(a.lastUpdated || 0);
    const byReads = (a, b) => (b.reads || 0) - (a.reads || 0);
    const byPick = (a, b) => (b.editorsPick === true) - (a.editorsPick === true);
    if (sort === 'Newest') return [...res].sort(byDate);
    if (sort === 'Most Read') return [...res].sort(byReads);
    if (sort === "Editor's Picks") return [...res].sort(byPick).sort(byDate);
    return res;
  }, [catalog, debouncedQ, selected, sort]);

  function toggle(setName, value) {
    setSelected((prev) => {
      const next = new Set(prev[setName]);
      if (next.has(value)) next.delete(value); else next.add(value);
      return { ...prev, [setName]: next };
    });
  }

  function clearAll() {
    setSelected({ sectors: new Set(), geographies: new Set(), format: new Set(), year: new Set(), paid: 'all' });
    setQ("");
  }
  const sample = t.sampleReports || {};
  const forBusiness = t.forBusiness || {};
  const forAnalysts = t.forAnalysts || {};
  const whyUse = t.whyInsights || {};
  const productsExplainer = t.productsExplainer || [];

  return (
    <div className="insights-container">

      {/* Hero */}
      <section
        className="insights-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${hero.bgImage})` }}
      >
        <div className="insights-hero-content">
          {hero.chip && <div className="hero-chip">{hero.chip}</div>}
          <h2>{hero.header}</h2>
          <p>{hero.tagline}</p>
          {hero.subheadline && <p className="hero-sub">{hero.subheadline}</p>}
          {hero.body && <p className="hero-body">{hero.body}</p>}
          {hero.cta && <button className="cta-btn">{hero.cta}</button>}
        </div>
      </section>

      {/* Overview */}
      <Section title={t.overviewTitle || "Overview"}>
        <p>{overview}</p>
      </Section>

      {/* Featured Insights (Products summary) */}
      <Section title={t.featuredTitle || "Featured Insights"}>
        <CardGrid items={featuredInsights} />
      </Section>

      {/* Subscription & Access plans */}
      <section className="insights-section world-mesh" id="plans">
        <div className="section-title">
          <h2 className="gradient-title">Subscription & Access</h2>
          <p className="subtitle">Choose the access that fits your strategy.</p>
        </div>
        <div className="plans-grid">
          {(plans || []).map((p, i) => {
            const Icon = p.icon === 'file' ? FaFileAlt : p.icon === 'sync' ? FaSyncAlt : FaGlobe;
            const classes = `plan-card ${p.key==='monthly' ? 'plan-highlight' : ''} ${p.key==='annual' ? 'plan-premium' : ''}`;
            return (
              <div className={classes} key={p.key || i}>
                {p.badge && <div className={`plan-badge ${p.key==='annual' ? 'badge-accent' : ''}`}>{p.badge}</div>}
                <div className="plan-icon"><Icon /></div>
                <h3 className="plan-title">{p.title}</h3>
                <p className="plan-blurb">{p.blurb}</p>
                <button className="plan-cta pulse">{p.cta}</button>
              </div>
            );
          })}
        </div>

        {Array.isArray(benefitsRow) && benefitsRow.length > 0 && (
          <div className="benefits-row" aria-label="Benefits">
            {benefitsRow.map((b, i) => (
              <div className="benefit-pill" key={i} style={{ animationDelay: `${i*80}ms` }}>{b}</div>
            ))}
          </div>
        )}
      </section>

      {/* Sample Reports Gallery */}
      {Array.isArray(catalog) && catalog.length > 0 && (
        <section className="insights-section">
          <div className="section-title"><h2>Sample Reports</h2></div>
          <div className="sample-grid">
            {catalog.slice(0,3).map((r, i) => (
              <div key={r.slug || i} className="sample-card">
                {r.image && <img src={r.image} alt={r.title} loading="lazy" />}
                <div className="sample-overlay">
                  <div className="sample-title">{r.title}</div>
                  <p className="sample-abstract">{r.abstract}</p>
                  <button className="sample-cta">Preview →</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* For Businesses / For Analysts split */}
      {(forBusiness.items?.length || forAnalysts.items?.length) && (
        <section className="insights-section">
          <div className="split-audience">
            <div className="audience-card business">
              <div className="audience-illustration" />
              <h3>{forBusiness.title || 'For Businesses'}</h3>
              <ul>
                {(forBusiness.items || []).slice(0,3).map((it, idx) => (<li key={idx}><FaCheckCircle /> {it}</li>))}
              </ul>
              {forBusiness.cta && <button className="cta-btn">{forBusiness.cta}</button>}
            </div>
            <div className="audience-card analysts">
              <div className="audience-illustration" />
              <h3>{forAnalysts.title || 'For Analysts & Contributors'}</h3>
              <ul>
                {(forAnalysts.items || []).slice(0,3).map((it, idx) => (<li key={idx}><FaCheckCircle /> {it}</li>))}
              </ul>
              {forAnalysts.cta && <button className="cta-btn">{forAnalysts.cta}</button>}
            </div>
          </div>
        </section>
      )}

      {/* Why Use Our Insights (Trust Block) */}
      {Array.isArray(whyUse.items) && whyUse.items.length > 0 && (
        <section className="insights-section">
          <div className="section-title"><h2>{whyUse.title || 'Why Use Our Insights'}</h2></div>
          <div className="trust-grid">
            {whyUse.items.map((msg, i) => {
              const Icon = i===0 ? FaShieldAlt : i===1 ? FaExchangeAlt : FaChartLine;
              return (
                <div className="trust-tile" key={i} style={{ animationDelay: `${i*80}ms` }}>
                  <div className="trust-icon"><Icon /></div>
                  <div className="trust-text">{msg}</div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Products Explainer: 3 cards with bullets */}
      {Array.isArray(productsExplainer) && productsExplainer.length > 0 && (
        <section className="insights-section">
          <div className="product-grid">
            {productsExplainer.map((p, i) => (
              <div className="product-card" key={i}>
                <h3 className="product-title">{p.title}</h3>
                <ul className="product-bullets">
                  {(p.bullets || []).map((b, j) => (<li key={j}>{b}</li>))}
                </ul>
                {p.cta && <button className="cta-btn product-cta">{p.cta}</button>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Catalog with Search & Filters */}
      <section className="insights-section">
        <div className="insights-catalog">
          <div className="catalog-main">
            {/* Search bar */}
            <div className="catalog-search">
              <input
                className="catalog-input"
                type="search"
                placeholder="Search reports, insights, sectors..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Search reports"
              />
              <div className="catalog-meta">
                <span>{filtered.length} results</span>
                <div className="catalog-sort">
                  <label htmlFor="sort">Sort by:</label>
                  <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option>Newest</option>
                    <option>Most Read</option>
                    <option>Editor's Picks</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="catalog-filters" role="group" aria-label="Filters">
              {/* Multi-select chips */}
              {['sectors','geographies','format','year'].map((key) => (
                <div key={key} className="filter-group">
                  <div className="filter-label">{key.charAt(0).toUpperCase()+key.slice(1)}</div>
                  <div className="filter-chips">
                    {(filtersData[key] || []).map((opt) => (
                      <button
                        key={`${key}-${opt}`}
                        type="button"
                        className={`chip ${selected[key]?.has(String(opt)) ? 'active' : ''}`}
                        onClick={() => toggle(key, String(opt))}
                        aria-pressed={selected[key]?.has(String(opt))}
                      >{String(opt)}</button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="filter-group">
                <div className="filter-label">Access</div>
                <div className="filter-chips">
                  {['all','free','paid'].map(v => (
                    <button key={v} type="button" className={`chip ${selected.paid===v?'active':''}`} onClick={() => setSelected(s => ({...s, paid:v}))}>{v.toUpperCase()}</button>
                  ))}
                </div>
                <button className="clear-link" onClick={clearAll} type="button">Clear all</button>
              </div>
            </div>

            {/* Results grid */}
            <div className="catalog-grid">
              {filtered.map((r, i) => (
                <article key={r.slug || i} className="report-card">
                  {r.image && <img className="report-img" src={r.image} alt="Report cover" loading="lazy" />}
                  <div className="report-body">
                    <h3 className="report-title">{r.title}</h3>
                    <p className="report-abstract">{r.abstract}</p>
                    <div className="report-badges">
                      {r.geography && <span className="badge">{r.geography}</span>}
                      {r.sector && <span className="badge">{r.sector}</span>}
                      {r.format && <span className="badge">{r.format}</span>}
                      {r.editorsPick && <span className="badge badge-accent">Editor’s Pick</span>}
                    </div>
                    <div className="report-meta">
                      {r.length && <span>{r.length}</span>}
                      {r.lastUpdated && <span>Updated {r.lastUpdated}</span>}
                    </div>
                    <div className="report-actions">
                      <button className="btn-view">View</button>
                      {r.paid ? <button className="btn-buy">Buy</button> : <button className="btn-download">Download</button>}
                      <button className="btn-add">Add to Library</button>
                    </div>
                  </div>
                </article>
              ))}
              {filtered.length === 0 && (
                <div className="catalog-empty">No results match your filters.</div>
              )}
            </div>
          </div>

          {/* Subscribe side panel */}
          {t.subscribe && (
            <aside className="catalog-aside">
              <div className="subscribe-panel">
                <h3>Subscribe</h3>
                <ul className="plan-list">
                  {(t.subscribe.plans || []).map((p, i) => (
                    <li key={i} className="plan-item">
                      <div className="plan-name">{p.name}</div>
                      {p.price && <div className="plan-price">{p.price}</div>}
                      {p.note && <div className="plan-note">{p.note}</div>}
                    </li>
                  ))}
                </ul>
                <button className="btn-subscribe">{t.hero?.cta || 'Explore Reports & Subscribe'}</button>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* Use Cases (fallback) */}
      {(!plans || plans.length === 0) && (
        <Section title={t.useCasesTitle || "Use Cases"}>
          <ul className="tl-list">
            {useCases.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </Section>
      )}

      {/* Ideal Users */}
      <Section title={t.idealUsersTitle || "Ideal Users"}>
        <ul className="tl-list">
          {idealUsers.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </Section>

      {/* Sample Reports */}
      {Array.isArray(sample.items) && sample.items.length > 0 && (catalog.length === 0) && (
        <Section title={sample.title || "Sample Reports"}>
          <ul className="tl-list">
            {sample.items.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          {sample.cta && <button className="cta-btn">{sample.cta}</button>}
        </Section>
      )}

      

      {/* CTA Section */}
      <Section title={ctaSection.title}>
        <p>{ctaSection.text}</p>
        {ctaSection.button && <button className="cta-btn">{ctaSection.button}</button>}
      </Section>

      {/* Sticky bottom conversion strip (desktop) */}
      <div className="insights-sticky-cta" role="region" aria-label="Subscribe">
        <div className="sticky-inner">
          <span className="sticky-copy">Ready to access premium intelligence?</span>
          <button className="btn-subscribe">Subscribe Today</button>
        </div>
      </div>

    </div>
  );
}
