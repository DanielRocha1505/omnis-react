import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './login.scss';
import HeroBanner from './../../sections/Herobanner';

const Login = () => {
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
    <div className='login nocontainer' id='login'>
       <HeroBanner title="Já é cliente?" subtitle="Entre agora na sua conta!" />
    </div>
  );
};

export default Login;
