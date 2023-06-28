import cards from './cards';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

const Drinks = () => {
  return (
    <>
      <Link to='/menu'>
        <BsArrowLeftShort size={30} style={{ margin: '1rem', color: 'black' }} />
      </Link>
      <div className='card_grid'>
        {cards.map((el) => (
          <CardItem key={el.title} title={el.title} img={el.img} link={el.link} />
        ))}
      </div>
    </>
  );
};

export default Drinks;
