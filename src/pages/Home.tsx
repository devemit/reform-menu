import Menu from './MenuComponent/Menu';
import '../components/navbar/MainHeader.css';
import Capacity from '../components/CapacityComponent/Capacity';
import Events from '../components/EventComponent/Events';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      <Menu />
      <Capacity />
      <Events />
      <div className='language-switcher-container'>
        <LanguageSwitcher />
      </div>
      <div
        style={{
          bottom: '2px',
          padding: '4px 20px',
          borderRadius: '3px',
          left: '5px',
          cursor: 'pointer',
          fontSize: '10px',
        }}
      >
        <a
          style={{
            textDecoration: 'none',
            color: 'blue',
          }}
          href='https://mitkodev.vercel.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('footer.copyright')}
        </a>
      </div>
    </div>
  );
}
