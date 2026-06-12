import { BsClock } from 'react-icons/bs';
import Capacity from '../components/capacity-component/capacity';
import Events from '../components/event-component/events';
import { useLanguage } from '../contexts/language-context';
import '../components/navbar/main-header.css';
import './home.css';
import Menu from '../components/home/menu';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className='home-page'>
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
      </footer>
    </div>
  );
}
