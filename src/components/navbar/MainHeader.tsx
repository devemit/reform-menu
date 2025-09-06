import './MainHeader.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const MainHeader = () => {
  const [height, setHeight] = useState('12rem');
  const { t } = useLanguage();

  useEffect(() => {
    const heightChange = () => {
      if (window.scrollY >= 90) {
        setHeight('6rem');
        // Update language switcher position when header shrinks
        const switcher = document.querySelector(
          '.language-switcher-container'
        ) as HTMLElement;
        if (switcher) {
          switcher.style.top = 'calc(6rem + 20px)';
        }
      } else {
        setHeight('12rem');
        // Update language switcher position when header expands
        const switcher = document.querySelector(
          '.language-switcher-container'
        ) as HTMLElement;
        if (switcher) {
          switcher.style.top = 'calc(12rem + 20px)';
        }
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
      {/* <div className='language-switcher-container'>
        <LanguageSwitcher />
      </div> */}
    </nav>
  );
};

export default MainHeader;
