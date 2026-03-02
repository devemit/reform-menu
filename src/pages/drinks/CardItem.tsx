import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Cards.css';

interface CardItemProps {
  title: string;
  link: string;
  img?: any;
}

const CardItem: React.FC<CardItemProps> = ({ title, img, link }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <div
        style={{
          aspectRatio: '4/3',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#e0e0e0',
        }}
      >
        {!isLoaded && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
            }}
          />
        )}
        <img
          loading='lazy'
          src={img}
          alt={title}
          onLoad={() => setIsLoaded(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
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
