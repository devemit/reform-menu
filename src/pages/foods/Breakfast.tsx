import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';

export default function Breakfast() {
  const { t } = useLanguage();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/foods'} />
        <DrinktsTitle label={t('food.breakfast')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('food.reform_breakfast')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.reform_breakfast')}
              </span>
            </td>
          </div>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('food.omelet')}
              <span style={{ fontSize: '.7rem' }}>
                <br />
                {t('ingredients.omelet')}
              </span>
            </td>
          </div>
          <td>170ден/2.9€</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('food.brooklyn')}
              <br />
              <span style={{ fontSize: '.7rem' }}>{t('ingredients.brooklyn')}</span>
            </td>
          </div>
          <td>200ден/3.5€</td>
        </tr>
      </table>
    </div>
  );
}
