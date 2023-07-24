import { NavLink } from 'react-router-dom';
import './Menu.css';

interface MenuCardProps {
  imgUrl?: string;
  label: string;
  link: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ imgUrl, label, link }) => {
  return (
    <div className='container'>
      <img loading='lazy' src={imgUrl} alt='/' className='menu-card_image' />
      <NavLink className='link' to={link}>
        <button className='btn_link'>{label}</button>
      </NavLink>
    </div>
  );
};

export default MenuCard;
