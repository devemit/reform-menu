import { Link, NavLink } from 'react-router-dom';
import './Menu.css';

interface MenuCardProps {
  imgUrl?: string;
  label: string;
  link: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ imgUrl, label, link }) => {
  return (
    <div className='fullwrap'>
      <img src={imgUrl} alt='/' />
      <div className='fullcap'>
        <NavLink className='menu_btn' to={link}>
          {label}
        </NavLink>
      </div>
    </div>
  );
};

export default MenuCard;
