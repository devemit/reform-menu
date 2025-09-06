import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';

export default function Appetizers() {
  const { t } = useLanguage();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/foods'} />
        <DrinktsTitle label={t('food.appetizers')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        {/*         <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              Реформ Топла Даска
              <br />
              <span style={{ fontSize: '.7rem' }}>
                поховани прсти, похована зденка, похован кашкавал, похована моцарела,
                сирење на скара, поховани маслинки
              </span>
            </td>
          </div>
          <td>1000,500ден/16.5€,8.5€</td>
        </tr> */}
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('appetizer.chicken_fingers')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.chicken_fingers')}
              </span>
            </td>
          </div>
          <td>250ден/4.1€</td>
        </tr>
      </table>
    </div>
  );
}
