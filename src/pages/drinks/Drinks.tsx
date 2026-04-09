import { useDrinkCards } from './cards';
import CardItem from './CardItem';
import ButtonBack from '../../components/HomeButton/ButtonBack';
import AllergenLegend from '../../components/AllergenLegend';

const Drinks = () => {
  const cards = useDrinkCards();

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
      <div className="card-grid__allergens">
        <AllergenLegend />
      </div>
    </>
  );
};

export default Drinks;
