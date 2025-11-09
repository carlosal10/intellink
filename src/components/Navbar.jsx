import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useState, useRef, useEffect } from "react";
import Hamburger from "hamburger-react";
import "./Navbar.css";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  // Prevent outside-click handler from closing menu when clicking NavLinks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Lock page scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar" ref={navRef}>
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/images/android-chrome-512x512.png"
            alt="Intellink Nippon Logo"
            className="logo-img"
          />
        </Link>

        {/* Desktop Links */}
        <div className="desktop-links">
          <NavLink to="/" onClick={closeMenu}>
            {language === "en" ? "Home" : "ホーム"}
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            {language === "en" ? "About" : "会社情報"}
          </NavLink>
        
          

          {/* Dropdown */}
          <div className="nav-dropdown">
            <button className="nav-dropdown-toggle">
              {language === "en" ? "Services" : "もっと"}
              <span className="dropdown-icon">▾</span>
            </button>
            <div className="dropdown-menu">
              <NavLink to="/expertconnect" onClick={closeMenu}>
                {language === "en" ? "ExpertConnect™" : "エキスパートコネクト"}
              </NavLink>
              <NavLink to="/tradelink" onClick={closeMenu}>
                {language === "en" ? "TradeLink™" : "トレードリンク"}
              </NavLink>
              <NavLink to="/marketlink" onClick={closeMenu}>
                {language === "en" ? "MarketLink™" : "マーケットリンク"}
              </NavLink>
            </div>
          </div>
          <NavLink to="/sectors" onClick={closeMenu}>
            {language === "en" ? "Sectors" : "セクター"}
          </NavLink>

          <NavLink to="/insights" onClick={closeMenu}>
            {language === "en" ? "Insights & Reports" : "知見"}
          </NavLink>
          
          <NavLink to="/recruitment" onClick={closeMenu}>
            {language === "en" ? "Careers" : "採用情報"}
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            {language === "en" ? "Contact" : "お問い合わせ"}
          </NavLink>
          
          {/* Language Switch */}
          <button
            onClick={() => {
              toggleLanguage();
              closeMenu();
            }}
            className="lang-toggle"
          >
            {language === "en" ? "日本語" : "EN"}
          </button>
        </div>

        {/* Hamburger */}
        <div className="hamburger-wrapper">
          <Hamburger
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={24}
            color="#F1C40F"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
      >
        <div className="mobile-menu-inner">
          <NavLink to="/" onClick={closeMenu}>
            {language === "en" ? "Home" : "ホーム"}
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            {language === "en" ? "About" : "会社情報"}
          </NavLink>
          
          
          {/* Mobile dropdown */}
          <button
            className="mobile-dropdown-toggle"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          >
            {language === "en" ? "Services" : "もっと"}
          </button>
          {mobileDropdownOpen && (
            <div className="mobile-dropdown">
              <NavLink to="/expertconnect" onClick={closeMenu}>
                {language === "en" ? "Expert Connect" : "エキスパートコネクト"}
              </NavLink>
              <NavLink to="/tradelink" onClick={closeMenu}>
                {language === "en" ? "TradeLink" : "トレードリンク"}
              </NavLink>
              <NavLink to="/marketlink" onClick={closeMenu}>
                {language === "en" ? "MarketLink" : "マーケットリンク"}
              </NavLink>
            </div>
          )}
          <NavLink to="/sectors" onClick={closeMenu}>
            {language === "en" ? "Sectors" : "セクター"}
          </NavLink>


          <NavLink to="/insights" onClick={closeMenu}>
            {language === "en" ? "Insights & Reports" : "知見"}
          </NavLink>
          <NavLink to="/recruitment" onClick={closeMenu}>
            {language === "en" ? "Careers" : "採用情報"}
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            {language === "en" ? "Contact" : "お問い合わせ"}
          </NavLink>
          

          <button
            onClick={() => {
              toggleLanguage();
              closeMenu();
            }}
            className="lang-toggle"
          >
            {language === "en" ? "日本語" : "EN"}
          </button>
        </div>
      </div>
    </>
  );
}
