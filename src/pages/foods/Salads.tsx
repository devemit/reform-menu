import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
export default function Salads() {
  return (
    <>
      <div className='table'>
        <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
          <ButtonBack link={'/menu/foods'} />
          <DrinktsTitle label={'Салати/Salads'} />
        </div>
        <table>
          <tr>
            <th>Производ/Product</th>
            <th>Цена/Price</th>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                Реформ 0.345кг
                <br />
                <span style={{ fontSize: '.7rem' }}>
                  марула,рукола,пршута,пармезан,
                  <br />
                  рокворд, шери, дресинг,маслиново масло
                </span>
              </td>
            </div>
            <td>250ден/4.5€</td>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                Цезар 0.400кг
                <br />
                <span style={{ fontSize: '.7rem' }}>
                  марула,шери,пченка,пилешко, пармезан,дресинг,кубети,маслиново масло
                </span>
              </td>
            </div>
            <td>220ден/3.7€</td>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                Туна 0.425кг
                <br />
                <span style={{ fontSize: '.7rem' }}>
                  марула,туна,маслинки,домат,кромид, пченка ,лимон,дресинг,маслиново масло
                </span>
              </td>
            </div>
            <td>220ден/3.7€</td>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                Грчка 0.285кг
                <br />
                <span style={{ fontSize: '.7rem' }}>
                  домат,краставица,млад кормид,варени јајца, сирење,маслиново
                  масло,оригано
                </span>
              </td>
            </div>
            <td>150ден/2.5€</td>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                Шопска 0.345кг
                <br />
                <span style={{ fontSize: '.7rem' }}>
                  домат,краставица,млад кормид, сирење,маслиново масло
                </span>
              </td>
            </div>
            <td>150ден/2.5€</td>
          </tr>
        </table>
      </div>
    </>
  );
}
