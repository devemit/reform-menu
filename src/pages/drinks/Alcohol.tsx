import ButtonBack from '../../components/HomeButton/ButtonBack';
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
        <ButtonBack link={'/drinks'} />
        <DrinktsTitle label={'Алкохол/Alcohol'} />
      </div>
      <table>
        <tr>
          <th>Произовд/Product</th>
          <th>Цена/Price</th>
        </tr>

        <tr>
          <td>Вигор/Vigor</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Смирноф/Smirnoff</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Абсолут/Absolut</td>
          <td>130ден/2.3€</td>
        </tr>
        <tr>
          <td>Џин Сах/Gin Sax</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Гордонс/Gordons</td>
          <td>130ден/2.3€</td>
        </tr>
        <tr>
          <td>Бакарди/Bacardi</td>
          <td>130ден/2.3€</td>
        </tr>
        <tr>
          <td>Мартини/Martini</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Текила/Tequila</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Узо/Ouzo</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Мастика/Mastika</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Арчерс/Archers</td>
          <td>130ден/2.3€</td>
        </tr>
        <tr>
          <td>Бејлис/Balleys</td>
          <td>130ден/2.3€</td>
        </tr>
        <tr>
          <td>Ракија/Rakija</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Коњак/Cognac</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Винјак/Vinjak</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Шток/Stock</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Рум/Rum</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>Кептан Морган/Captain Morgan</td>
          <td>130ден/2.3€</td>
        </tr>
        <tr>
          <td>Аперол/Aperol</td>
          <td>200ден/3.4€</td>
        </tr>
        <tr>
          <td>Кампари/Campari</td>
          <td>130ден/2.3€</td>
        </tr>
        <tr>
          <td>Малибу/Malibu</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>Пелинковац/Pelinkovac</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Јегермаестер/Jagermeister</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Шејкер/Shaker</td>
          <td>600ден/10€</td>
        </tr>
        <tr>
          <td>Џони вокер/Johnny Walker</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Џони вокер блек/Johnny Walker black</td>
          <td>300ден/5€</td>
        </tr>
        <tr>
          <td>Балантајс/Ballantine's</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Џек Даниелс/Jack Daniels</td>
          <td>300ден/5€</td>
        </tr>
        <tr>
          <td>Кати Сарк/Cutty Sark</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Чивас/Chivas</td>
          <td>300ден/5€</td>
        </tr>
        <tr>
          <td>Џејмисон/Jameson</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>ЏБ/JB</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Фејмос Грус/Famous Grouse</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>Финландиа/Finlandia</td>
          <td>130ден/2.2€</td>
        </tr>
        <tr>
          <td>Скај Водка/Skyy Vodka</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>Грејгус/Grey Goose</td>
          <td>350ден/6€</td>
        </tr>
        <tr>
          <td>Бомбај/Bombay</td>
          <td>150ден/2.5€</td>
        </tr>
      </table>
    </div>
  );
};

export default Alcohol;
