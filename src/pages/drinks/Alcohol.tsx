import ButtonBack from '../../components/ButtonBack/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import '../../styles/Table.css';

const Alcohol = () => {
  return (
    <div className='table'>
      <div
        style={{
          display: 'flex',
          padding: '1rem',
          alignItems: 'center',
        }}
      >
        <ButtonBack link={'/menu/drinks'} />
        <DrinktsTitle label={'Алкохол/Alcohol'} />
      </div>
      <table>
        <tr>
          <th>Произовд/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Вигор/Vigor</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Смирноф/Smirnoff</td>
          <td>110ден/1.9€</td>
        </tr>
        <tr>
          <td>Абсолут/Absolut</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Џин Сах/Gin Sax</td>
          <td>80ден/1.4€</td>
        </tr>
        <tr>
          <td>Гордонс/Gordons</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Бакарди/Bacardi</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Мартини/Martini</td>
          <td>100ден/1.6€</td>
        </tr>
        <tr>
          <td>Текила/Tequila</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Узо/Ouzo</td>
          <td>70ден/1.2€</td>
        </tr>
        <tr>
          <td>Мастика/Mastika</td>
          <td>80ден/1.4€</td>
        </tr>
        <tr>
          <td>Арчерс/Archers</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Бејлис/Balleys</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Ракија/Rakija</td>
          <td>70ден/1.2€</td>
        </tr>
        <tr>
          <td>Коњак/Cognac</td>
          <td>80ден/1.4€</td>
        </tr>
        <tr>
          <td>Винјак/Vinjak</td>
          <td>80ден/1.4€</td>
        </tr>
        <tr>
          <td>Шток/Stock</td>
          <td>100ден/1.6€</td>
        </tr>
        <tr>
          <td>Рум/Rum</td>
          <td>70ден/1.2€</td>
        </tr>
        <tr>
          <td>Кампари/Campari</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Малибу/Malibu</td>
          <td>100ден/1.6€</td>
        </tr>
        <tr>
          <td>Пелинковац/Pelinkovac</td>
          <td>80ден/1.4€</td>
        </tr>
        <tr>
          <td>Јегермаестер/Jagermeister</td>
          <td>140ден/2.4€</td>
        </tr>
        <tr>
          <td>Шејкер/Shaker</td>
          <td>500ден/8.5€</td>
        </tr>
        <tr>
          <td>Џони вокер/Johnny Walker</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Џони вокер блек/Johnny Walker black</td>
          <td>250ден/4.3€</td>
        </tr>
        <tr>
          <td>Балантајс/Ballantine's</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Џек Даниелс/Jack Daniels</td>
          <td>250ден/4.5€</td>
        </tr>
        <tr>
          <td>Кати Сарк/Cutty Sark</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Чивас/Chivas</td>
          <td>250ден/4.3€</td>
        </tr>
        <tr>
          <td>Џејмисон/Jameson</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>ЏБ/JB</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Фејмос Грус/Famous Grouse</td>
          <td>150ден/2.5€</td>
        </tr>
      </table>
    </div>
  );
};

export default Alcohol;
