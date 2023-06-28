import { BsArrowLeftShort } from 'react-icons/bs';
import CardItem from '../drinks/CardItem';
import foodcards from './foodcards';
import { Link } from 'react-router-dom';

const Foods = () => {
  return (
    <>
      <Link to='/menu'>
        <BsArrowLeftShort size={30} style={{ margin: '1rem', color: 'black' }} />
      </Link>
      <div className='card_grid'>
        {foodcards.map((el) => (
          <CardItem key={el.title} title={el.title} img={el.img} link={el.link} />
        ))}
      </div>
    </>
  );
};

export default Foods;
