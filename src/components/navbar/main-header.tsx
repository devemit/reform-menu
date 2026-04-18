import './main-header.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/language-context';
import LanguageSwitcher from '../language-switcher/language-switcher';

const MainHeader = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.classList.toggle('nav-is-scrolled', window.scrollY >= 90);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className='navbar'>
      <Link className='navbar__home-link' to={'/'}>
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
