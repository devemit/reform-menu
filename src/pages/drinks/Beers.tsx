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
          <td>110ден/1.85€</td>
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
          <td>110ден/1.85€</td>
        </tr>
        <tr>
          <td>Радлер/Radler</td>
          <td>110ден/1.85€</td>
        </tr>
        <tr>
          <td>Точено мало/Pint small</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Точено големо/Pint big</td>
          <td>110ден/1.85€</td>
        </tr>
      </table>
    </div>
  );
};

export default Beers;
