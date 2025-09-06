import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';

const Beers = () => {
  const { t } = useLanguage();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/drinks'} />
        <DrinktsTitle label={t('drink.beer')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <td>{t('beer.skopsko')}</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>{t('beer.amstel')}</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>{t('beer.heineken')}</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>{t('beer.skopsko_smooth')}</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>{t('beer.radler')}</td>
          <td>110ден/1.9€</td>
        </tr>
        <tr>
          <td>{t('beer.pint_small')}</td>
          <td>100ден/1.8€</td>
        </tr>
        <tr>
          <td>{t('beer.pint_big')}</td>
          <td>130ден/2.3€</td>
        </tr>
      </table>
    </div>
  );
};

export default Beers;
