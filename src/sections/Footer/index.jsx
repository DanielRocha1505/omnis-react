import React from 'react';
import './footer.scss';
import Button from '../../components/Button';
import { useTranslation } from 'react-i18next';

import logoPath from '../../assets/imgs/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-contain">
        <div className="footer-left">
          <img src={logoPath} alt="Logo" className="footer-logo" />
        </div>

        <div className="footer-center">
          <div className="footer-socials">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <Button to="/" icon={<i className="fa-solid fa-gavel"></i>}>
              {t('footer.legaltext')}
            </Button>
          </div>
        </div>

        <a href="#inicio">
          <div className="footer-right">
            <button className="back-to-top">↑</button>
          </div>
        </a>
      </div>

      <p className='copyright-text'>{t('copyright.text')}</p>  {/* Tradução do texto do copyright */}
    </footer>
  );
};

export default Footer;
