import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';

const Coctails = () => {
  const { t } = useLanguage();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/drinks'} />
        <DrinktsTitle label={t('drink.cocktails')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <td>{t('cocktail.mojito')}</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>{t('cocktail.pina_colada')}</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>{t('cocktail.strawberry_colada')}</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>{t('cocktail.cosmopolitan')}</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>{t('cocktail.margarita')}</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>{t('cocktail.strawberry_margarita')}</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>{t('cocktail.tequila_sunrise')}</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>{t('cocktail.sandcastle')}</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>{t('cocktail.sex_on_beach')}</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>{t('cocktail.blue_lagoon')}</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>{t('cocktail.flamingo')}</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>{t('cocktail.blue_hawaii')}</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>{t('cocktail.cuba_libre')}</td>
          <td>200ден/3.5€</td>
        </tr>
        <tr>
          <td>{t('cocktail.amf')}</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>{t('cocktail.arizona_twister')}</td>
          <td>250ден/4.1€</td>
        </tr>
        <tr>
          <td>{t('cocktail.long_island')}</td>
          <td>250ден/4.1€</td>
        </tr>
      </table>
    </div>
  );
};

export default Coctails;
