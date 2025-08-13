import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useState, useRef, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import './Navbar.css';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      {/* Background overlay */}
      <div className="navbar-overlay"></div>

      {/* Content */}
      <div className="navbar-content">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/images/android-chrome-512x512.png"
            alt="Intellink Nippon Logo"
            className="logo-img"
          />
        </Link>

        {/* Hamburger */}
        <div className="hamburger-wrapper">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={24} color="#F1C40F" />
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>{language === 'en' ? 'Home' : 'ホーム'}</NavLink>
          <NavLink to="/about" onClick={closeMenu}>{language === 'en' ? 'About' : '会社情報'}</NavLink>
          <NavLink to="/services" onClick={closeMenu}>{language === 'en' ? 'Services' : 'サービス'}</NavLink>
          <NavLink to="/sectors" onClick={closeMenu}>{language === 'en' ? 'Sectors' : 'セクター'}</NavLink>
          
          {/* Dropdown styled like other nav links */}
          <div className="nav-dropdown">
            <span>{language === 'en' ? 'Solutions' : 'もっと'}</span>
            <div className="dropdown-menu">
              <NavLink to="/expertconnect" onClick={closeMenu}>
                {language === 'en' ? 'Expert Connect' : 'エキスパートコネクト'}
              </NavLink>
              <NavLink to="/tradelink" onClick={closeMenu}>
                {language === 'en' ? 'TradeLink' : 'トレードリンク'}
              </NavLink>
              <NavLink to="/marketlink" onClick={closeMenu}>
                {language === 'en' ? 'MarketLink' : 'マーケットリンク'}
              </NavLink>
            </div>
          </div>

          <NavLink to="/insights" onClick={closeMenu}>{language === 'en' ? 'Insights' : '知見'}</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>{language === 'en' ? 'Contact' : 'お問い合わせ'}</NavLink>
          <NavLink to="/recruitment" onClick={closeMenu}>{language === 'en' ? 'Careers' : '採用情報'}</NavLink>
          <NavLink to="/blog" onClick={closeMenu}>{language === 'en' ? 'Blog' : 'ブログ'}</NavLink>

          {/* Language Toggle */}
          <button
            onClick={() => { toggleLanguage(); closeMenu(); }}
            className="lang-toggle"
          >
            {language === 'en' ? '日本語' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}
