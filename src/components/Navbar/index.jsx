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
      >
        <span className="navbar-toggle-icon">☰</span>
      </button>

      <ul className={`navbar-list ${isMobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.to} onClick={closeMobileMenu}>
              {t(link.label)}
            </Link>
          </li>
        ))}

        <li className="mobile-buttons">
          <Button to="/login" icon={<i className="fa-solid fa-user"></i>} onClick={closeMobileMenu}>
            {t('dashboard')}
          </Button>
        </li>

        <li>
          <LanguageSelector />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
