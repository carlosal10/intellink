import "./Footer.css";
import { useLanguage } from "../context/LanguageContext";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    { to: "/", label: { en: "Home", jp: "ホーム" } },
    { to: "/about", label: { en: "About", jp: "会社情報" } },
    { to: "/sectors", label: { en: "Sectors", jp: "セクター" } },
    { to: "/insights", label: { en: "Insights & Reports", jp: "知見" } },
    { to: "/recruitment", label: { en: "Careers", jp: "採用情報" } },
    { to: "/contact", label: { en: "Contact", jp: "お問い合わせ" } },
  ];

  const socialLinks = [
    { href: "https://linkedin.com", icon: "fab fa-linkedin", label: "LinkedIn" },
    { href: "https://twitter.com", icon: "fab fa-twitter", label: "Twitter/X" },
    { href: "https://facebook.com", icon: "fab fa-facebook", label: "Facebook" },
    { href: "https://wa.me/818056431501", icon: "fab fa-whatsapp", label: "WhatsApp" },
    { href: "https://github.com", icon: "fab fa-github", label: "GitHub" },
    { href: "mailto:g-owuor@intellink-nippon.co.jp", icon: "fas fa-envelope", label: "Email" },
  ];

  return (
    <footer className="footer" role="contentinfo">
      {/* Top strip with gradient accent */}
      <div className="footer-accent" aria-hidden="true" />

      {/* Row 1: Nav + Social */}
      <div className="footer-row top-row">
        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `footer-link ${isActive ? "active" : ""}`
              }
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {language === "en" ? link.label.en : link.label.jp}
            </NavLink>
          ))}
        </nav>

        <div className="footer-social" aria-label="Social media">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="social-btn"
            >
              <i className={link.icon} aria-hidden="true"></i>
            </a>
          ))}
        </div>
      </div>

      {/* Row 2: Logo (left) + Copyright (center) + Lang Button (right) */}
      <div className="footer-row bottom-row">
        <div className="footer-logo-wrapper">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Go to homepage"
          >
            <img
              src="/images/android-chrome-512x512.png"
              alt="Intellink Nippon Logo"
              className="footer-logo"
            />
          </Link>
        </div>

        <div className="footer-center">
          © {new Date().getFullYear()} Intellink Nippon Consulting LLC
        </div>

        <div className="footer-right">
          <button
            onClick={toggleLanguage}
            className="footer-lang"
            aria-label="Toggle language"
          >
            {language === "en" ? "日本語" : "EN"}
          </button>
        </div>
      </div>
    </footer>
  );
}
