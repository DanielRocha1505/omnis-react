import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../../components/Card';
import './suportedGames.scss';

const data = [
  {
    id: 1,
    type: 2,
    image: '/images/fivem.png',
    title: 'FiveM',
    widthType: 'large',
  },
  {
    id: 2,
    type: 2,
    image: '/images/reddead.png',
    title: 'RedM',
    widthType: 'large',
  },
];

const SuportedGames = () => {
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
    <section className="container suportedGames">
      <h2 className="features-title">{t('suportedGames.title')}</h2>
      <div className="features-container" ref={containerRef}>
        {data.map((item) => (
          <Card 
            key={item.id} 
            type={item.type} 
            icon={item.icon} 
            title={item.title} 
            description={item.description} 
            image={item.image} 
            widthType={item.widthType}
          />
        ))}
      </div>
    </section>
  );
};

export default SuportedGames;
