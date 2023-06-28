import { Link } from 'react-router-dom';
import './styles/Cards.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface CardItemProps {
  title: string;
  link: string;
  img?: any;
}

const CardItem: React.FC<CardItemProps> = ({ title, img, link }) => {
  return (
    <div>
      <LazyLoadImage
        src={img}
        alt='/'
        style={{ width: '100% ', height: '300px', objectFit: 'cover' }}
      />
      <br />

      <Link className='drinks-nav_btn' to={link}>
        {title}
      </Link>
    </div>
  );
};

export default CardItem;
