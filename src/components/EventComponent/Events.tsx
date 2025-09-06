import './Events.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EventsList from './EventsList';
import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Events = () => {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className='event_container'>
      <div className='event_one'>
        <img src='reform.jpg' alt='figue' className='figure' />
        <img src='tile.png' alt='/' className='tile' />
        <div className='text_one' data-aos='fade-right'>
          <h2>{t('events.title')}</h2>
          <p>{t('events.description')}</p>
          <img src='wavehor.png' alt='/' className='wavehor' />
        </div>
      </div>
      <EventsList />
    </div>
  );
};

export default Events;
