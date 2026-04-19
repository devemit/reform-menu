import { useState } from 'react';
import { BsClock, BsShare } from 'react-icons/bs';
import Capacity from '../components/capacity-component/capacity';
import Events from '../components/event-component/events';
import { useLanguage } from '../contexts/language-context';
import '../components/navbar/main-header.css';
import './home.css';
import Menu from '../components/home/menu';

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
          <div className='home_footer_hours_block'>
            <div className='home_footer_hours_heading'>
              <BsClock size={18} aria-hidden />
              <span className='home_footer_hours_label'>{t('footer.hours')}</span>
            </div>
            <span className='home_footer_time'>{t('footer.hours_schedule')}</span>
          </div>
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
      </footer>
    </div>
  );
}
