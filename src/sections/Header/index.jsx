import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './../../components/Button';
import Navbar from './../../components/Navbar';
import LanguageSelector from './../../components/LanguageSelector';
import './header.scss';
import logoPath from '../../assets/imgs/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/#home", label: 'navbar.home' },
    { to: "/#features", label: 'navbar.features' },
    { to: "/#prices", label: 'navbar.prices' },
    { to: "/#faq", label: 'navbar.faq' },
    { to: "/#discord", label: 'navbar.discord' },
    { to: "/#api", label: 'navbar.api' }
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    console.log(i18n.language);
  }, [i18n.language]);

  return (
    <header className="header">
      <div className="container header-contain">
        <div className="header-left">
          <a href="#"><img src={logoPath} alt="Logo" className="logo" /></a>
          <Navbar navLinks={navLinks} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
        </div>
        <div className="header-right">
          <Button to="/" icon={<i className="fa-solid fa-user"></i>}>{t('dashboard')}</Button>
          <LanguageSelector onChangeLanguage={changeLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
