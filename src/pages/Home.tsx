import { useState } from 'react';
import Menu from './MenuComponent/Menu';
import Capacity from '../components/CapacityComponent/Capacity';
import Events from '../components/EventComponent/Events';
import { useLanguage } from '../contexts/LanguageContext';
import { BsClock, BsShare } from 'react-icons/bs';
import '../components/navbar/MainHeader.css';
import './Home.css';

const MENU_URL = 'https://reformbeachbar.vercel.app';

export default function Home() {
  const { t } = useLanguage();
  const [shareFeedback, setShareFeedback] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Reform Beach & Bar',
          text: 'Check out our menu!',
          url: MENU_URL,
        });
      } catch (err) {
        copyLink();
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(MENU_URL);
    setShareFeedback(true);
    setTimeout(() => setShareFeedback(false), 2000);
  };

  return (
    <div>
      <Menu />
      <Capacity />
      <Events />
      <footer className='home_footer'>
        <div className='home_footer_hours'>
          <BsClock size={18} />
          <span>{t('footer.hours')}:</span>
          <span className='home_footer_time'>{t('footer.hours_time')}</span>
        </div>
        <button
          type='button'
          className='home_footer_share'
          onClick={handleShare}
          aria-label={t('footer.share')}
        >
          <BsShare size={18} />
          {shareFeedback ? t('footer.shared') : t('footer.share')}
        </button>
        <a
          href='https://mitkodev.com'
          target='_blank'
          rel='noopener noreferrer'
          className='home_footer_copyright'
        >
          {t('footer.copyright')}
        </a>
      </footer>
    </div>
  );
}
