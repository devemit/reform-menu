import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

export default function Appetizers() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Предјадења/Appetizers'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Реформ Топла Даска
              <br />
              <span style={{ fontSize: '.7rem' }}>
                поховани прсти,похована зденка,похован кашкавал,похована моцарела,сирење
                на скара,поховани маслинки
              </span>
            </td>
          </div>
          <td>1000,500ден/16.5€,8.5€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Пилешки прсти
              <br />
              <span style={{ fontSize: '.7rem' }}>
                пилешко брашно,јајце,презла,сусам,помфрит
              </span>
            </td>
          </div>
          <td>220ден/3.6€</td>
        </tr>
      </table>
    </div>
  );
}
