import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

const Beers = () => {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/drinks'} />
        <DrinktsTitle label={'Пивo/Beers'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Скопско/Skopsko</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Амстел/Amstel</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Хајнекен/Heineken</td>
          <td>140ден/2.5€</td>
        </tr>
        <tr>
          <td>Скопско Смут/Smooth</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Радлер/Radler</td>
          <td>100ден/1.7€</td>
        </tr>
      </table>
    </div>
  );
};

export default Beers;
