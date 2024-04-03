import './Events.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EventsList from './EventsList';
import { useEffect } from 'react';

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className='event_container'>
      <div className='event_one'>
        <img src='figuretop.jpg' alt='figue' className='figure' />
        <img src='tile.png' alt='/' className='tile' />
        <div className='text_one' data-aos='fade-right'>
          <h2>Reform</h2>
          <p>
            Welcome to Reform Beach Bar, where relaxation meets excitement on the sandy
            shores of paradise. Indulge in refreshing cocktails, soak up the sun on our
            lounge chairs, and savor delectable bites with panoramic views of the
            crystal-clear waters. Whether you&apos;re looking for a tranquil escape or a
            vibrant beachside experience, Reform Beach Bar offers the perfect blend of
            laid-back charm and seaside allure. Come unwind, socialize, and create
            unforgettable memories at our beachfront oasis.
          </p>
          <img src='wavehor.png' alt='/' className='wavehor' />
        </div>
      </div>
      <EventsList />
    </div>
  );
};

export default Events;
