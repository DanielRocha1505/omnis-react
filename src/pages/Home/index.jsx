import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './home.scss';
import HeroBanner from './../../sections/Herobanner';
import Features from './../../sections/Features'; 
import SuportedGames from './../../sections/SuportedGames'; 
import Patners from './../../sections/Patners'; 
import Prices from './../../sections/Prices'; 
import FaqSection from './../../sections/FaqSection'; 

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const elementId = location.hash.replace('#', '');
        const element = document.getElementById(elementId);
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToHash();

    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [location]);

  return (
    <div className='home nocontainer' id='home'>
      <HeroBanner titleKey="heroBanner.title"  subtitleKey="heroBanner.subtitle" />
      <Features id="features" />
      <SuportedGames id="suportedGames" />
      <Patners id="patners" />
      <Prices id="prices" />
      <FaqSection id="faq" />
    </div>
  );
};

export default Home;
