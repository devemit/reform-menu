import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMenuPrice } from '../../hooks/useMenuPrice';
import '../../styles/Table.css';

const Burgers = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/foods'} />
        <DrinktsTitle label={t('food.burgers')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('food.hamburger')}
              <br />
              <span style={{ fontSize: '.7rem' }}>{t('ingredients.hamburger')}</span>
            </td>
          </div>
          <td>{menuPrice(180, 3)}</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('food.reform_cheeseburger')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.reform_cheeseburger')}
              </span>
            </td>
          </div>
          <td>{menuPrice(200, 3.5)}</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('food.manhattan_burger')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.manhattan_burger')}
              </span>
            </td>
          </div>
          <td>{menuPrice(200, 3.5)}</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('food.american_classic')}
              <br />
              <span style={{ fontSize: '.7rem' }}>
                {t('ingredients.american_classic')}
              </span>
            </td>
          </div>
          <td>{menuPrice(200, 3.5)}</td>
        </tr>
        <tr>
          <div style={{ maxWidth: '190px', margin: 'auto' }}>
            <td>
              {t('food.chicken_burger')}
              <br />
              <span style={{ fontSize: '.7rem' }}>{t('ingredients.chicken_burger')}</span>
            </td>
          </div>
          <td>{menuPrice(200, 3.5)}</td>
        </tr>
      </table>
    </div>
  );
};

export default Burgers;
