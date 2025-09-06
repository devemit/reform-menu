import './Capacity.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CapacityInfo from './CapacityInfo';
import { useLanguage } from '../../contexts/LanguageContext';

const Capacity = () => {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const items = [
    { imgUrl: 'water.png', desc: '500m', title: t('capacity.beach') },
    { imgUrl: 'parking.png', desc: '100', title: t('capacity.parking') },
    { imgUrl: 'sunbeds.png', desc: '300', title: t('capacity.sunbeds') },
    { imgUrl: 'umbrellas.png', desc: '150', title: t('capacity.umbrellas') },
  ];

  return (
    <div id='capacity' className='capacity_container'>
      <div className='title_wrapper'>
        <span className='title'>{t('capacity.title')}</span>
      </div>
      <div className='content_wrapper' data-aos='fade-up'>
        <div className='content'>
          {items.map((item) => (
            <CapacityInfo
              key={item.title}
              imgUrl={item.imgUrl}
              desc={item.desc}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capacity;
