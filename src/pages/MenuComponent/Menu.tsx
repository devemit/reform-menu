import { NavLink } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu_container'>
      <div className='men'>
        <div className='blur-image'>
          <ImageComponent src={'/cocc.jpg'} />
        </div>
        <NavLink className='link' to='/drinks'>
          <button className='btn_link'>Пиjалоци</button>
        </NavLink>
      </div>
      <div className='men'>
        <div className='blur-image'>
          <ImageComponent src={'/hamm.jpg'} />
        </div>
        <NavLink className='link' to='/foods'>
          <button className='btn_link'>Храна</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
