import './HomeLayout.css';
import Capacity from '../../components/CapacityComponent/Capacity';
import Events from '../../components/EventComponent/Events';
import Menu from '../MenuComponent/Menu';

const Hero = () => {
  return (
    <>
      <Menu />
      <Capacity />
      <Events />
    </>
  );
};

export default Hero;
