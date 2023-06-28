import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

const Burgers = () => {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/foods'} />
        <DrinktsTitle label={'Бургери/Burgers'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Хамбургер
              <br />
              <span style={{ fontSize: '.7rem' }}>
                говедска плескавица,марула, домат,краставица,помфрит,лебче
              </span>
            </td>
          </div>
          <td>160ден/2.8€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Реформ Чизбургер
              <br />
              <span style={{ fontSize: '.7rem' }}>
                говедска плескавица,зденка,
                <br />
                едамер,марула,помфрит,лебче
              </span>
            </td>
          </div>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Менхетен Бургер
              <br />
              <span style={{ fontSize: '.7rem' }}>
                говедска плескавица,сланина,
                <br />
                кашкавал,марула,домат ,кромид,помфрит,лебче
              </span>
            </td>
          </div>
          <td>200ден/3.4€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Американски класик
              <br />
              <span style={{ fontSize: '.7rem' }}>
                говедска плескавица,едамер, ббк сос,кисели
                <br />
                краставички,марула,
                <br />
                домат,помфрит,лебче
              </span>
            </td>
          </div>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Чикенбургер
              <br />
              <span style={{ fontSize: '.7rem' }}>
                пилешки стек,домат,краставица,
                <br />
                марула,помфрит,лебче
              </span>
            </td>
          </div>
          <td>180ден/3€</td>
        </tr>
      </table>
    </div>
  );
};

export default Burgers;
