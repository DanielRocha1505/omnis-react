import React, { useEffect, useRef } from 'react';
import Card from '../../components/Card';
import './prices.scss';
import { useTranslation } from 'react-i18next';

const data = [
  {
    id: 1,
    type: 4, 
    title: 'pessoal',
    priceKey: 'preco_pessoal',
    priceLifetimeKey: 'preco_vitalicio_pessoal',
    benefits: [
      'acesso_completo_ao_painel',
      'suporte_24_7',
      'sem_limites_de_usuarios',
      'acesso_a_recursos_exclusivos',
      'atualizacoes_constantes'
    ],
    buttonText: 'Adquira AGORA!',
    buttonLink: '/signup', 
  },
  {
    id: 2,
    type: 4,
    title: 'profissional',
    priceKey: 'preco_profissional',
    priceLifetimeKey: 'preco_vitalicio_profissional',
    benefits: [
      'acesso_completo_ao_painel',
      'suporte_24_7',
      'recursos_avancados',
      'prioridade_no_atendimento',
      'atualizacoes_constantes'
    ],
    buttonText: 'Adquira AGORA!',
    buttonLink: '/signup',
  },
  {
    id: 3,
    type: 4, 
    title: 'grupo',
    priceKey: 'preco_grupo',
    priceLifetimeKey: 'preco_vitalicio_grupo',
    benefits: [
      'acesso_completo_ao_painel',
      'suporte_24_7',
      'sem_limites_de_usuarios',
      'acesso_a_recursos_exclusivos',
      'atualizacoes_constantes'
    ],
    buttonText: 'Adquira AGORA!',
    buttonLink: '/signup', 
  }
];

const Prices = () => {
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
    <section className="container prices-section" id="prices">
      <h2 className="prices-title">{t('prices.title')}</h2>
      <div className="features-container" ref={containerRef}>
        {data.map((item) => (
          <Card 
            key={item.id} 
            type={item.type} 
            title={t(`prices.${item.title}.title`)} 
            price={t(`prices.${item.priceKey}`)} 
            priceLifetime={t(`prices.${item.priceLifetimeKey}`)} 
            benefits={item.benefits.map(benefit => t(`prices.${item.title}.benefits.${benefit}`))} 
            buttonText={t('prices.buttonText')} 
            buttonLink={item.buttonLink} 
          />
        ))}
      </div>
    </section>
  );
};

export default Prices;
