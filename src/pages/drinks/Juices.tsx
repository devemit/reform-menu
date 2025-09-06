import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import '../../styles/Table.css';
type Props = {};

const Juices = (props: Props) => {
  const { t } = useLanguage();

  return (
    <div className='table'>
      <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
        <ButtonBack link={'/drinks'} />
        <DrinktsTitle label={t('drink.juices')} />
      </div>
      <table>
        <tr>
          <th>{t('menu.product')}</th>
          <th>{t('menu.price')}</th>
        </tr>

        <tr>
          <td>{t('juice.coca_cola')} 0.250l</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>{t('juice.fanta')} 0.250l</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>{t('juice.schweppes')} 0.250l</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>{t('juice.sprite')} 0.250l</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>{t('juice.tonic')} 0.250l</td>
          <td>100ден/1.7€</td>
        </tr>
        <tr>
          <td>{t('juice.juice')} 0.250l</td>
          <td>110ден/1.9€</td>
        </tr>
        <tr>
          <td>{t('juice.ice_tea')} 0.250l</td>
          <td>120ден/2€</td>
        </tr>
        <tr>
          <td>{t('juice.cedevita')} 0.250l</td>
          <td>70ден/1.2€</td>
        </tr>
        <tr>
          <td>{t('juice.fresh_orange')}</td>
          <td>150ден/2.5€</td>
        </tr>
        <tr>
          <td>{t('juice.fresh_mix')}</td>
          <td>180ден/3€</td>
        </tr>
        <tr>
          <td>{t('juice.lemonade')}</td>
          <td>140ден/2.4€</td>
        </tr>
        <tr>
          <td>{t('juice.soda')}</td>
          <td>120ден/2€</td>
        </tr>
      </table>
    </div>
  );
};

export default Juices;
