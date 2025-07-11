import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

const Coctails = () => {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/drinks'} />
        <DrinktsTitle label={'Coctails/Коктели'} />
      </div>
      <table>
        <tr>
          <th>Производ/Products</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Мохито/Mojito</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>Пина Колада/Pina Colada</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Строубери Колада/Strawberry Colada</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>Космополитан/Cosmopolitan</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Маргарита/Margarita</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Строубери маргарита/Strawberry Margarita</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>Текила Санрајс/Tequila Sunrice</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Сандкастл/Sandcastle</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Секс он д'бич/Sex On The Beach</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Блу Лагун/Blue Lagoon</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Фламинго/Flamingo</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>Блу Хаваи/Blue Hawai</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>Куба Либре/Cuba Libre</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>А.М.Ф/A.M.F</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>Аризона Твистер/Arizona Twister</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>Лонг Ајланд/Long Island</td>
          <td>250ден/4.1€</td>
        </tr>
      </table>
    </div>
  );
};

export default Coctails;
