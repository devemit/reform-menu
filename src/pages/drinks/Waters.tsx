import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

const Waters = () => {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/drinks'} />
        <DrinktsTitle label={'Вода/Water'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Роса/Rosa</td>
          <td>60ден/1€</td>
        </tr>
        <tr>
          <td>Газирана вода/Mineral Water</td>
          <td>60ден/1€</td>
        </tr>
      </table>
    </div>
  );
};

export default Waters;
