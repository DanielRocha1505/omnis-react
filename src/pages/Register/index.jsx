import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './register.scss';
import HeroBanner from './../../sections/Herobanner';

const Register = () => {
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
    <div className='register nocontainer' id='register'>
       <HeroBanner title="Seja bem-vindo!" subtitle="Registre-se AGORA!" />
    </div>
  );
};

export default Register;
