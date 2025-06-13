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
        <img src='reform.jpg' alt='figue' className='figure' />
        <img src='tile.png' alt='/' className='tile' />
        <div className='text_one' data-aos='fade-right'>
          <h2>Реформ</h2>
          <p>
            Добредојдовте во Реформ, каде што релаксацијата се среќава со возбудата на
            песочните брегови. Препуштете се на освежителните коктели, уживајте во сонцето
            на нашите лежалки и уживајте со вкусни залаци со панорамски поглед на
            езерските води. Без разлика дали барате мирно бегство или живописно искуство
            покрај плажа, Реформ нуди совршена мешавина од опуштен шарм и привлечност на
            езерото. Дојдете да се релаксирате, дружете се и создадете незаборавни
            спомени.
          </p>
          <img src='wavehor.png' alt='/' className='wavehor' />
        </div>
      </div>
      <EventsList />
    </div>
  );
};

export default Events;
