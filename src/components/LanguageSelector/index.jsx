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
      <button
        className="language-toggle"
        onClick={toggleMenu}
        aria-label={
          isMenuOpen
            ? 'Fechar menu de seleção de idioma'
            : 'Abrir menu de seleção de idioma'
        }
        aria-expanded={isMenuOpen}
      >
        <img
          src={i18n.language === 'pt' ? languaguePathPtBr : languaguePathEn}
          alt={`Selecionar idioma: ${i18n.language === 'pt' ? 'Português' : 'Inglês'}`}
          className="language-icon"
        />
      </button>

      {isMenuOpen && (
        <ul
          className="language-menu"
          role="menu"
          aria-label="Seleção de idioma"
        >
          <li
            role="menuitem"
            tabIndex="0"
            onClick={() => handleLanguageChange('pt')}
            aria-label="Selecionar Português"
          >
            <img
              src={languaguePathPtBr}
              alt="Bandeira do Brasil"
              className="flag-icon"
            />
            Português
          </li>
          <li
            role="menuitem"
            tabIndex="0"
            onClick={() => handleLanguageChange('en')}
            aria-label="Selecionar Inglês"
          >
            <img
              src={languaguePathEn}
              alt="Bandeira dos EUA"
              className="flag-icon"
            />
            English
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
