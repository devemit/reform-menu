import { NavLink } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import { useLanguage } from '../../contexts/LanguageContext';
import './Menu.css';

const Menu = () => {
  const { t } = useLanguage();

  return (
    <div className='menu_container'>
      <div className='men'>
        <div className='blur-image'>
          <ImageComponent src={'/cocc.jpg'} />
        </div>
        <NavLink className='link' to='/drinks'>
          <button className='btn_link'>{t('menu.drinks')}</button>
        </NavLink>
      </div>
      <div className='men'>
        <div className='blur-image'>
          <ImageComponent src={'/hamm.jpg'} />
        </div>
        <NavLink className='link' to='/foods'>
          <button className='btn_link'>{t('menu.food')}</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
