import React from 'react';
import Menu from '../pages/MenuComponent/Menu';
import Events from './EventComponent/Events';
import Capacity from './CapacityComponent/Capacity';
export default function Hero() {
  return (
    <>
      <Menu />
      <Capacity />
      <Events />
    </>
  );
}
