import './HomeLayout.css';
import Capacity from '../../components/CapacityComponent/Capacity';
import Events from '../../components/EventComponent/Events';
import Menu from '../MenuComponent/Menu';

export default function () {
  return (
    <div>
      <Menu />
      <Capacity />
      <Events />
    </div>
  );
}
