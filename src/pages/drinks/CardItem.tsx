import { Link } from 'react-router-dom';
import './styles/Cards.css';

interface CardItemProps {
  title: string;
  link: string;
  img?: any;
}

const CardItem: React.FC<CardItemProps> = ({ title, img, link }) => {
  return (
    <div>
      <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
        <img
          loading='lazy'
          src={img}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
      <Link className='drinks-nav_btn' to={link}>
        {title}
      </Link>
    </div>
  );
};

export default CardItem;
