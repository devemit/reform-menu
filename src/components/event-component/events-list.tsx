import { useLanguage } from '../../contexts/language-context';

const EventsList = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className='event_two'>
        <div className='content_two' data-aos='fade-left'>
          <h2>{t('events.events_title')}</h2>
          <ul className='events'>
            <li>{t('events.birthdays')}</li>
            <li>{t('events.christenings')}</li>
            <li>{t('events.pre_wedding')}</li>
            <li>{t('events.business')}</li>
            <li>{t('events.private_parties')}</li>
            <li>{t('events.proposals')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
