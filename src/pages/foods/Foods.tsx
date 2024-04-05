import CardItem from '../drinks/CardItem';
import foodcards from './foodcards';
import ButtonBack from '../../components/HomeButton/ButtonBack';

const Foods = () => {
  return (
    <>
      <div className='tester'>
        <ButtonBack link={'/'} />
      </div>
      <div className='card_grid'>
        {foodcards.map((el) => (
          <CardItem key={el.title} title={el.title} img={el.img} link={el.link} />
        ))}
      </div>
    </>
  );
};

export default Foods;
