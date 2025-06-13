import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

export default function Breakfast() {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/foods'} />
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
              Реформ појадок/Reform breakfast
              <br />
              <span style={{ fontSize: '.7rem' }}>
                јајца, едамер, печурки, домат, пршута,
                <br />
                масло за јадење, доматен сос
              </span>
            </td>
          </div>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Омлет/Omelet
              <span style={{ fontSize: '.7rem' }}>
                <br />
                јајца, домат, краставичка, додаток по избор, шунка, кашкавал, печурки,
                масло за јадење
              </span>
            </td>
          </div>
          <td>170ден/2.9€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Бруклин/Brooklyn
              <br />
              <span style={{ fontSize: '.7rem' }}>
                лепче, шунка, кашкавал, сланина,
                <br />
                шампињони, домат, масло за јадење
              </span>
            </td>
          </div>
          <td>200ден/3.5€</td>
        </tr>
      </table>
    </div>
  );
}
