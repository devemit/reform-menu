import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';
const Coffees = () => {
  const { t } = useLanguage();

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
          <td>80ден/1.5€</td>
        </tr>
        <tr>
          <td>{t('coffee.macchiato')}</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>{t('coffee.cappuccino')}</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>{t('coffee.decaf_cappuccino')}</td>
          <td>110ден/1.9€</td>
        </tr>
        <tr>
          <td>{t('coffee.decaf_macchiato')}</td>
          <td>110ден/1.9€</td>
        </tr>
        <tr>
          <td>{t('coffee.decaf_espresso')}</td>
          <td>90ден/1.5€</td>
        </tr>
        <tr>
          <td>{t('coffee.nescafe')}</td>
          <td>100ден/1.7€</td>
        </tr>
          <tr>
          <td>{t('coffee.tea')}</td>
          <td>70ден/1.2€</td>
        </tr>
        <tr>
          <td>{t('coffee.irish_coffee')}</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>{t('coffee.ice_coffee')}</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>{t('coffee.freddo_espresso_double')}</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>{t('coffee.freddo_espresso_single')}</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>{t('coffee.freddo_cappuccino')}</td>
          <td>130ден/2.3€</td>
        </tr>
        <tr>
          <td>{t('coffee.latte')}</td>
          <td>130ден/2.3€</td>
        </tr>
        <tr>
          <td>{t('coffee.hot_chocolate')}</td>
          <td>120ден/2€</td>
        </tr>
      </table>
    </div>
  );
};

export default Coffees;
