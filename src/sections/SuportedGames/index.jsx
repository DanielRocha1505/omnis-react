import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../../components/Card';
import './suportedGames.scss';

const data = [
  {
    id: 1,
    type: 2,
    image: 'https://media.discordapp.net/attachments/1313656358846988309/1313670680566304768/wallpapers-de-gta-v-em-4k-para-pc-e-celular-14-scaled.png?ex=67524c29&is=6750faa9&hm=e2a427c23cd53f1cccac1ffbdc15e5af08d38bbb886fecd6849a15f7d3ac133d&=&format=webp&quality=lossless&width=1082&height=676',
    title: 'FiveM',
    widthType: 'large',
  },
  {
    id: 2,
    type: 2,
    image: 'https://cdn.discordapp.com/attachments/1313656358846988309/1313672198644437093/hmxiwjjqb8371.png?ex=67524d93&is=6750fc13&hm=6482d63d23a03c82e4480400b6fb554705d796dbcb0bee3adfa41683d25bc466&',
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
