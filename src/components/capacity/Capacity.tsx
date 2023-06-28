import './Capacity.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CapacityInfo from './CapacityInfo';

const Capacity = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const items = [
    { imgUrl: 'water.png', desc: '500m', title: 'Beach' },
    { imgUrl: 'parking.png', desc: '100', title: 'Parking Spots' },
    { imgUrl: 'sunbeds.png', desc: '300', title: 'Sunbeds' },
    { imgUrl: 'umbrellas.png', desc: '150', title: 'Umbrellas' },
  ];

  return (
    <div id='capacity' className='capacity_container'>
      <div className='title_wrapper'>
        <span className='title'>Reform Numbers</span>
      </div>
      <div className='content_wrapper' data-aos='fade-up'>
        <div className='content'>
          {items.map((item) => (
            <CapacityInfo imgUrl={item.imgUrl} desc={item.desc} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capacity;
