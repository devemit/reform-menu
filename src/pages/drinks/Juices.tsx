import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';
type Props = {};

const Juices = (props: Props) => {
  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/menu/drinks'} />
        <DrinktsTitle label={'Сокови/Juices'} />
      </div>
      <table>
        <tr>
          <th>Производ/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Кока Кола 0.250l/Coca Cola</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Фанта 0.250l/Fanta</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Швепс 0.250l/Schweppes</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Спрајт 0.250l/Sprite</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Тоник 0.250l/Tonic</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Џус 0.250l/Juice</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Леден чај 0.250l/Ice Tea</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Цедевита 0.250l/Cedevita</td>
          <td>60ден/1€</td>
        </tr>
        <tr>
          <td>Цеден Портокал/Fresh Orange Juice</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Цеден Микс/Fresh Mix Juice</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Лимонада/Lemonade</td>
          <td>140ден/2.4€</td>
        </tr>
        <tr>
          <td>Сода/Soda</td>
          <td>120ден/2€</td>
        </tr>
      </table>
    </div>
  );
};

export default Juices;
