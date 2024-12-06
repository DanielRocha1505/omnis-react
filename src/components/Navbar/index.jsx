import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import LanguageSelector from '../LanguageSelector'; 
import './navbar.scss';

const Navbar = ({ navLinks, initialActive = false }) => {
  const { t } = useTranslation(); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(initialActive);

  const toggleMobileMenu = () => {
    if (!initialActive) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  const closeMobileMenu = () => {
    if (!initialActive) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <button
        className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? t('Close menu') : t('Open menu')}
        aria-expanded={isMobileMenuOpen}
      >
        <span className="navbar-toggle-icon" aria-hidden="true">☰</span>
      </button>

      <ul
        className={`navbar-list ${isMobileMenuOpen ? 'active' : ''}`}
        role="menu"
        aria-hidden={!isMobileMenuOpen}
      >
        {navLinks.map((link, index) => (
          <li key={index} role="none">
            <Link 
              to={link.to} 
              onClick={closeMobileMenu} 
              role="menuitem"
              aria-label={t(link.label)}
            >
              {t(link.label)}
            </Link>
          </li>
        ))}

        <li className="mobile-buttons" role="none">
          <Button 
            to="/login" 
            icon={<i className="fa-solid fa-user" aria-hidden="true"></i>} 
            onClick={closeMobileMenu}
            aria-label={t('Go to dashboard')}
          >
            {t('dashboard')}
          </Button>
        </li>

        <li role="none">
          <LanguageSelector />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
