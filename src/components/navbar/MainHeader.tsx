import './MainHeader.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const [height, setHeight] = useState('12rem');

  useEffect(() => {
    const heightChange = () => {
      if (window.scrollY >= 90) {
        setHeight('6rem');
      } else {
        setHeight('12rem');
      }
    };
    window.addEventListener('scroll', heightChange);
  }, []);

  return (
    <nav style={{ height: `${height}` }} className='navbar'>
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <div className='titles'>
          <span className='main_title'>Reform</span>
          <span className='second_title'>Beach Bar</span>
        </div>
      </Link>
    </nav>
  );
};

export default MainHeader;
