import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Deserts() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Десерти/Deserts'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Палачинка Крем Банана
              <br />
              <span style={{ fontSize: '.7rem' }}>крем банана</span>
            </td>
          </div>
          <td>100ден/1.8€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Палачинка Мед Ореви
              <br />
              <span style={{ fontSize: '.7rem' }}>мед,ореви</span>
            </td>
          </div>
          <td>110ден/1.9€</td>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Сладолед Топка
              <br />
              <span style={{ fontSize: '.7rem' }}>Сладолед</span>
            </td>
          </div>
          <td>40ден/.7€</td>
        </tr>
      </table>
    </div>
  );
}
