import { useDrinkCards } from './cards';
import CardItem from '../../../components/menu/card-item';
import CircleLinkButton from '../../../components/circle-link-button/circle-link-button';
import AllergenLegend from '../../../components/allergen-legend';
import '../../../components/menu/menu-cards.css';

const Drinks = () => {
  const cards = useDrinkCards();

  return (
    <>
      <div className='menu-hub-toolbar'>
        <CircleLinkButton link={'/'} />
      </div>
      <div className='card_grid'>
        {cards.map((el) => (
          <CardItem key={el.title} title={el.title} img={el.img} link={el.link} />
        ))}
      </div>
      <div className='card-grid__allergens'>
        <AllergenLegend />
      </div>
    </>
  );
};

export default Drinks;
