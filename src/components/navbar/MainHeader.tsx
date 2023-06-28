import './MainHeader.css';
import { CgCloseR, CgMenuBoxed } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const [nav, setNav] = useState(false);
  const [height, setHeight] = useState('12rem');
  const handleNav = () => {
    setNav(!nav);
  };

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
        <div className='navbar__title'>
          <span className='main'>Reform</span>
          <span className='sub'>Beach Bar</span>
        </div>
      </Link>

      <div onClick={handleNav} className='toggle_buttons'>
        {nav ? <CgCloseR size={30} /> : <CgMenuBoxed size={35} />}
      </div>
      <ul onClick={() => setNav(false)} className={nav ? 'menu active' : 'menu'}>
        <Link className='link' to='/'>
          <li>Home</li>
        </Link>
        <Link className='link' to='/gallery'>
          <li>Gallery</li>
        </Link>
        <Link className='link' to='/menu'>
          <li>Menu</li>
        </Link>
      </ul>
    </nav>
  );
};

export default MainHeader;
