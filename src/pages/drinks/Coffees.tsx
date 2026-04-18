import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMenuPrice } from '../../hooks/useMenuPrice';
import '../../styles/Table.css';

const Coffees = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/drinks'} />
        <DrinktsTitle label={t('drink.coffee')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>
        <tr>
          <td>{t('coffee.espresso')}</td>
          <td>{menuPrice(90, 1.5)}</td>
        </tr>
        <tr>
          <td>{t('coffee.macchiato')}</td>
          <td>{menuPrice(110, 1.8)}</td>
        </tr>
        <tr>
          <td>{t('coffee.cappuccino')}</td>
          <td>{menuPrice(110, 1.8)}</td>
        </tr>
        <tr>
          <td>{t('coffee.cacao')}</td>
          <td>{menuPrice(80, 1.5)}</td>
        </tr>
        <tr>
          <td>{t('coffee.decaf_cappuccino')}</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
        <tr>
          <td>{t('coffee.decaf_macchiato')}</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
        <tr>
          <td>{t('coffee.decaf_espresso')}</td>
          <td>{menuPrice(100, 1.7)}</td>
        </tr>
        <tr>
          <td>{t('coffee.nescafe')}</td>
          <td>{menuPrice(110, 1.8)}</td>
        </tr>
        <tr>
          <td>{t('coffee.tea')}</td>
          <td>{menuPrice(70, 1.2)}</td>
        </tr>
        <tr>
          <td>{t('coffee.irish_coffee')}</td>
          <td>{menuPrice(170, 3)}</td>
        </tr>
        <tr>
          <td>{t('coffee.ice_coffee')}</td>
          <td>{menuPrice(160, 2.7)}</td>
        </tr>
        <tr>
          <td>{t('coffee.freddo_espresso_double')}</td>
          <td>{menuPrice(160, 2.7)}</td>
        </tr>
        <tr>
          <td>{t('coffee.freddo_espresso_single')}</td>
          <td>{menuPrice(110, 1.8)}</td>
        </tr>
        <tr>
          <td>{t('coffee.freddo_cappuccino')}</td>
          <td>{menuPrice(140, 2.4)}</td>
        </tr>
        <tr>
          <td>{t('coffee.latte')}</td>
          <td>{menuPrice(140, 2.4)}</td>
        </tr>
        <tr>
          <td>{t('coffee.hot_chocolate')}</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
      </table>
    </div>
  );
};

export default Coffees;
