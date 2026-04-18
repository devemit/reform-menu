import Capacity from './capacity-component/capacity';
import Events from './event-component/events';
import Menu from './home/Menu';

export default function Hero() {
  return (
    <>
      <Menu />
      <Capacity />
      <Events />
    </>
  );
}
