import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./heroBanner.scss";
import ghostIA from '../../assets/imgs/fantasma.png';

const HeroBanner = ({ titleKey, subtitleKey }) => {
  const { t } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-banner" id="inicio">
      <div className="hero-content">
        <div className="animated-ghost">
          <img className="FillGhost" src={ghostIA} alt="Teste" />
        </div>
        <h1 
          className="hero-title"
          style={{
            opacity: Math.max(1 - scrollPosition / 400, 0)
          }}
        >
          {t(titleKey)}
        </h1>
        <p 
          className="hero-description"
          style={{
            opacity: Math.max(1 - scrollPosition / 400, 0)
          }}
        >
          <span className="typed-text">{t(subtitleKey)}</span>
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;