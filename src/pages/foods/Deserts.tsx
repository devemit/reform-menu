import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';
export default function Deserts() {
  const { t } = useLanguage();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/foods'} />
        <DrinktsTitle label={t('food.desserts')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        {/* <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('dessert.pancake_cream_banana')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.pancake_cream_banana')}
              </span>
            </td>
          </div>
          <td>140ден/2.4€</td>
        </tr> */}
        {/* <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('dessert.pancake_honey_nuts')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.pancake_honey_nuts')}
              </span>
            </td>
          </div>
          <td>140ден/2.4€</td>
        </tr> */}

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('dessert.ice_cream_ball')}
              <br />
              <span style={{ fontSize: '.7rem' }}>{t('ingredients.ice_cream_ball')}</span>
            </td>
          </div>
          <td>50ден/.90€</td>
        </tr>
      </table>
    </div>
  );
}
