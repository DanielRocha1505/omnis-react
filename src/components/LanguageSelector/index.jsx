import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import languaguePathPtBr from '../../assets/imgs/pt-br_language.webp';
import languaguePathEn from '../../assets/imgs/en_language.webp';
import './languageSelector.scss';

const LanguageSelector = ({ onChangeLanguage }) => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsMenuOpen(false);
  };

  return (
    <div className="language-selector">
      <button className="language-toggle" onClick={toggleMenu}>
        <img
          src={i18n.language === 'pt' ? languaguePathPtBr : languaguePathEn}
          alt={`Selecionar idioma: ${i18n.language === 'pt' ? 'Português' : 'Inglês'}`}
          className="language-icon"
        />
      </button>

      {isMenuOpen && (
        <ul className="language-menu">
          <li onClick={() => handleLanguageChange('pt')}>
            <img src={languaguePathPtBr} alt="Bandeira do Brasil" className="flag-icon" />
            Português
          </li>
          <li onClick={() => handleLanguageChange('en')}>
            <img src={languaguePathEn} alt="Bandeira dos EUA" className="flag-icon" />
            English
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
