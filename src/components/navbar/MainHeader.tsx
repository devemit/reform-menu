import './MainHeader.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const MainHeader = () => {
  const [height, setHeight] = useState('12rem');
  const { t } = useLanguage();

  useEffect(() => {
    const heightChange = () => {
      if (window.scrollY >= 90) {
        setHeight('6rem');
      } else {
        setHeight('12rem');
      }
    };
    window.addEventListener('scroll', heightChange);
  }, []);

  return (
    <nav style={{ height: `${height}` }} className='navbar'>
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <div className='titles'>
          <span className='main_title'>{t('nav.reform')}</span>
          <span className='second_title'>{t('nav.beach_bar')}</span>
        </div>
      </Link>
      <div className='language-switcher-container'>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default MainHeader;
