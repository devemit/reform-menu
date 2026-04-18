import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMenuPrice } from '../../hooks/useMenuPrice';
import '../../styles/Table.css';

const Beers = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

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
          <td>{menuPrice(120, 2)}</td>
        </tr>
        <tr>
          <td>{t('beer.amstel')}</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
        <tr>
          <td>{t('beer.heineken')}</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
        <tr>
          <td>{t('beer.skopsko_smooth')}</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
        <tr>
          <td>{t('beer.radler')}</td>
          <td>{menuPrice(110, 1.8)}</td>
        </tr>
        <tr>
          <td>{t('beer.pint_small')}</td>
          <td>{menuPrice(100, 1.7)}</td>
        </tr>
        <tr>
          <td>{t('beer.pint_big')}</td>
          <td>{menuPrice(130, 2.2)}</td>
        </tr>
      </table>
    </div>
  );
};

export default Beers;
