import { Link } from 'react-router-dom';
import './HomeLayout.css';
interface MenuGalProps {
  imgUrl?: string;
  label: string;
  link: string;
}

const MenuGal: React.FC<MenuGalProps> = ({ imgUrl, label, link }) => {
  return (
    <div className='card_wrapper'>
      <img
        src={imgUrl}
        alt='/'
        style={{ width: '100%', objectFit: 'cover', maxHeight: '50vh' }}
      />
      <Link className='nav_btn' to={link}>
        {label}
      </Link>
    </div>
  );
};

export default MenuGal;
