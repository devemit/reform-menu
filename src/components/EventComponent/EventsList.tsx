import { useLanguage } from '../../contexts/LanguageContext';

const EventsList = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className='event_two'>
        <img src='dezero.jpg' alt='figue' className='figure' />
        <div className='content_two' data-aos='fade-left'>
          <h2>{t('events.events_title')}</h2>
          <ul className='events'>
            <li>{t('events.birthdays')}</li>
            <li>{t('events.christenings')}</li>
            <li>{t('events.pre_wedding')}</li>
            <li>{t('events.business')}</li>
          </ul>
          <img src='wavever.png' alt='/' className='wavever' />
        </div>
      </div>
    </div>
  );
};

export default EventsList;
