import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';

const Waters = () => {
  const { t } = useLanguage();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/drinks'} />
        <DrinktsTitle label={t('drink.water')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <td>{t('water.rosa')}</td>
          <td>60ден/1€</td>
        </tr>
        <tr>
          <td>{t('water.mineral_water')}</td>
          <td>60ден/1€</td>
        </tr>
        <tr>
          <td>{t('water.dobra_voda')}</td>
          <td>70ден/1.2€</td>
        </tr>
        <tr>
          <td>{t('water.rosa_1l')}</td>
          <td>100ден/1.7€</td>
        </tr>
      </table>
    </div>
  );
};

export default Waters;
