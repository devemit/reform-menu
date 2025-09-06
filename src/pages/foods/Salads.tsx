import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';
export default function Salads() {
  const { t } = useLanguage();

  return (
    <>
      <div className='table'>
        <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
          <ButtonBack link={'/foods'} />
          <DrinktsTitle label={t('food.salads')} />
        </div>
        <table>
          <tr>
            <th>{t('menu.product')}</th>
            <th>{t('menu.price')}</th>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                {t('food.caesar_salad')} 0.400кг
                <br />
                <span style={{ fontSize: '.7rem' }}>{t('ingredients.caesar_salad')}</span>
              </td>
            </div>
            <td>220ден/3.7€</td>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                {t('food.tuna_salad')} 0.425кг
                <br />
                <span style={{ fontSize: '.7rem' }}>{t('ingredients.tuna_salad')}</span>
              </td>
            </div>
            <td>220ден/3.7€</td>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                {t('food.greek_salad')} 0.285кг
                <br />
                <span style={{ fontSize: '.7rem' }}>{t('ingredients.greek_salad')}</span>
              </td>
            </div>
            <td>150ден/2.5€</td>
          </tr>
          <tr>
            <div style={{ maxWidth: '190px', margin: 'auto' }}>
              <td>
                {t('food.shop_salad')} 0.345кг
                <br />
                <span style={{ fontSize: '.7rem' }}>{t('ingredients.shop_salad')}</span>
              </td>
            </div>
            <td>150ден/2.5€</td>
          </tr>
        </table>
      </div>
    </>
  );
}
