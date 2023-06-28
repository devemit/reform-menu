import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

export default function Breakfast() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Појадок/Breakfast'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Реформ/Reform
              <br />
              <span style={{ fontSize: '.7rem' }}>
                јајца,едамер,печурки,домат,пршута,
                <br />
                масло за јадење,оматен сос
              </span>
            </td>
          </div>
          <td>130ден/2.2€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Омлет/Omelet
              <span style={{ fontSize: '.7rem' }}>
                <br />
                јајца,домат,краставичка,додаток по избор,шунка,кашкавал,печурки,масло за
                јадење
              </span>
            </td>
          </div>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Бруклин/Brooklyn
              <br />
              <span style={{ fontSize: '.7rem' }}>
                лебче,шунка,кашкавал,сланина,
                <br />
                шампињони, домат,масло за јадење
              </span>
            </td>
          </div>
          <td>150ден/2.5€</td>
        </tr>
      </table>
    </div>
  );
}
