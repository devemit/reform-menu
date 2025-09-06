import '../../styles/Table.css';
import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';

const Wines = () => {
  const { t } = useLanguage();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/drinks'} />
        <DrinktsTitle label={t('drink.wine')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <td>{t('wine.temjanika')} 0.187л</td>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <td>{t('wine.red_wine')} 0.187л</td>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <td>{t('wine.alexandria')} 0.750л</td>
          <td>700ден/12€</td>
        </tr>
        <tr>
          <td>{t('wine.alexandria')} 0.187л</td>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <td>{t('wine.alexandria_couve')} 0.187л</td>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <td>{t('wine.traminec')} 0.187л</td>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <td>{t('wine.rose')} 0.750л</td>
          <td>700ден/12€</td>
        </tr>
      </table>
    </div>
  );
};

export default Wines;
