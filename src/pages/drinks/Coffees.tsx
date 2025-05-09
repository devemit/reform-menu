import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
const Coffees = () => {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/drinks'} />
        <DrinktsTitle label={'Кафе/Coffee'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>
        <tr>
          <td>Еспресо/Espresso</td>
          <td>80ден/1.5€</td>
        </tr>
        <tr>
          <td>Макијато/Machiato</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Капучино/Cappuccino</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Декаф Капучино/Decaf Cappuccino</td>
          <td>110ден/1.9€</td>
        </tr>
        <tr>
          <td>Декаф Макијато/Decaf Machiato</td>
          <td>110ден/1.9€</td>
        </tr>
        <tr>
          <td>Декаф Еспресо/Decaf Espresso</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Нес Kафе/Nescafe</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Ирско Kафе/Irish Coffee</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Ајс Kафе/Ice Coffee</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Фредо Еспресо Дупло/Freddo Espresso Double</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Фредо Еспресо Сингл/Freddo Espresso Single</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Фредо Капучино/Freddo Cappuccino</td>
          <td>130ден/2.3€</td>
        </tr>
        <tr>
          <td>Лате Kафе/Latte Cafe</td>
          <td>130ден/2.3€</td>
        </tr>
        <tr>
          <td>Топло Чоколадо/Hot Chocolate</td>
          <td>120ден/2€</td>
        </tr>
      </table>
    </div>
  );
};

export default Coffees;
