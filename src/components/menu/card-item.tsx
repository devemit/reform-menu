import { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu-cards.css';

interface CardItemProps {
  title: string;
  link: string;
  img?: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, img, link }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <div className='menu-card__media'>
        {!isLoaded && <div className='menu-card__shimmer' aria-hidden />}
        <img
          className={`menu-card__img${isLoaded ? ' menu-card__img--loaded' : ''}`}
          loading='lazy'
          src={img}
          alt={title}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <Link className='drinks-nav_btn' to={link}>
        {title}
      </Link>
    </div>
  );
};

export default CardItem;
