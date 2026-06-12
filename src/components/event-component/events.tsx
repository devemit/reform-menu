import './events.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EventsList from './events-list';
import { useEffect } from 'react';
import { useLanguage } from '../../contexts/language-context';

const Events = () => {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section className='event_container'>
      <div className='event_one'>
        <div className='text_one' data-aos='fade-right'>
          <h2>{t('events.title')}</h2>
          <p>{t('events.description')}</p>
        </div>
      </div>
      <EventsList />
    </section>
  );
};

export default Events;
