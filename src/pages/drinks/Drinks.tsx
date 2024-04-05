import cards from './cards';
import CardItem from './CardItem';
import ButtonBack from '../../components/HomeButton/ButtonBack';

const Drinks = () => {
  return (
    <>
      <div className='tester'>
        <ButtonBack link={'/'} />
      </div>
      <div className='card_grid'>
        {cards.map((el) => (
          <CardItem key={el.title} title={el.title} img={el.img} link={el.link} />
        ))}
      </div>
    </>
  );
};

export default Drinks;
