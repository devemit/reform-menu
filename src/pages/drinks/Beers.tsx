import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

const Beers = () => {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/drinks'} />
        <DrinktsTitle label={'Пивo/Beers'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Скопско/Skopsko</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Амстел/Amstel</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Хајнекен/Heineken</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Скопско Смут/Smooth</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Радлер/Radler</td>
          <td>110ден/1.9€</td>
        </tr>
        <tr>
          <td>Точено мало/Pint small</td>
          <td>100ден/1.8€</td>
        </tr>
        <tr>
          <td>Точено големо/Pint big</td>
          <td>120ден/2€</td>
        </tr>
      </table>
    </div>
  );
};

export default Beers;
