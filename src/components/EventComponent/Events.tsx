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
            On one of the most beautiful beaches of Dojran, awarded with a blue flag, lies
            Reform Beach-Bar. Here, at the biggest beach bar in Dojran, you can enjoy
            moments of relaxation by the water, as well as endless fun at parties, events
            and live concerts featuring well-known artists.
          </p>
          <img src='wavehor.png' alt='/' className='wavehor' />
        </div>
      </div>
      <EventsList />
    </div>
  );
};

export default Events;
