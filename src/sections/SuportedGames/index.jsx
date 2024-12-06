import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../../components/Card';
import './suportedGames.scss';

const data = [
  {
    id: 1,
    type: 2,
    image: 'https://media.discordapp.net/attachments/1313656358846988309/1313670680566304768/wallpapers-de-gta-v-em-4k-para-pc-e-celular-14-scaled.png?ex=67539da9&is=67524c29&hm=4bf10832248b90d04fc9bb5bae0093978dac454b50205a48988f688cb56f2594&=&format=webp&quality=lossless&width=1082&height=676',
    title: 'FiveM',
    widthType: 'large',
  },
  {
    id: 2,
    type: 2,
    image: 'https://media.discordapp.net/attachments/1313656358846988309/1313672198644437093/hmxiwjjqb8371.png?ex=67539f13&is=67524d93&hm=13ee7e5a62f289261ee8d8a3a6418faa0bb39e0447cdc3810f8922be0ef4f821&=&format=webp&quality=lossless&width=1202&height=676',
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
