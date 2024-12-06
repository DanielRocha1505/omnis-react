import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../../components/Card';
import './features.scss';

const data = [
  {
    id: 1,
    type: 1,
    icon: 'fas fa-globe',
    titleKey: 'features.webPanel.title',
    descriptionKey: 'features.webPanel.description', 
    widthType: 'default',
  },
  {
    id: 2,
    type: 1,
    icon: 'fas fa-eye',
    titleKey: 'features.antiOnScreenMenu.title',
    descriptionKey: 'features.antiOnScreenMenu.description',
    widthType: 'default',
  },
  {
    id: 3,
    type: 1,
    icon: 'fas fa-check-circle',
    titleKey: 'features.safeEventsVerification.title',
    descriptionKey: 'features.safeEventsVerification.description',
    widthType: 'default',
  },
];

const Features = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.4 }
    );

    const cards = containerRef.current.querySelectorAll('.card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="container features" id="features">
      <h2 className="features-title">{t('features.title')}</h2>
      <div className="features-container" ref={containerRef}>
        {data.map((item) => (
          <Card
            key={item.id}
            type={item.type}
            icon={item.icon}
            title={t(item.titleKey)} 
            description={t(item.descriptionKey)}  
            widthType={item.widthType}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
