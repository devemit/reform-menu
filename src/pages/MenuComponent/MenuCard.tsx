import { NavLink, Link } from 'react-router-dom';
import './Menu.css';

interface MenuCardProps {
  children: React.ReactNode;
}

const MenuCard: React.FC<MenuCardProps> = ({ children }: MenuCardProps) => {
  return <div className='container'>{children}</div>;
};

export default MenuCard;
