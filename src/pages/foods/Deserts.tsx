import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMenuPrice } from '../../hooks/useMenuPrice';
import '../../styles/Table.css';

export default function Deserts() {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

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

         <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('dessert.pancake_cream_banana')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.pancake_cream_banana')}
              </span>
            </td>
          </div>
          <td>{menuPrice(150, 2.5)}</td>
        </tr> 
        

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('dessert.ice_cream_ball')}
              <br />
              <span style={{ fontSize: '.7rem' }}>{t('ingredients.ice_cream_ball')}</span>
            </td>
          </div>
          <td>{menuPrice(50, 0.9)}</td>
        </tr>
      </table>
    </div>
  );
}
