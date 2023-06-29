import React from 'react';
import Menu from './MenuComponent/Menu';
import Capacity from '../components/CapacityComponent/Capacity';
import Events from '../components/EventComponent/Events';
export default function Home() {
  return (
    <div>
      <Menu />
      <Capacity />
      <Events />
    </div>
  );
}
