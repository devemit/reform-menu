import ButtonBack from '../../components/HomeButton/ButtonBack';
import DrinktsTitle from '../../components/DrinksTitle/DrinktsTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMenuPrice } from '../../hooks/useMenuPrice';
import '../../styles/Table.css';

type Props = {};

const Juices = (props: Props) => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

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
          <td>{menuPrice(100, 1.7)}</td>
        </tr>
        <tr>
          <td>{t('juice.fanta')} 0.250l</td>
          <td>{menuPrice(100, 1.7)}</td>
        </tr>
        <tr>
          <td>{t('juice.schweppes')} 0.250l</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
        <tr>
          <td>{t('juice.sprite')} 0.250l</td>
          <td>{menuPrice(100, 1.7)}</td>
        </tr>
        <tr>
          <td>{t('juice.tonic')} 0.250l</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
        <tr>
          <td>{t('juice.juice')} 0.250l</td>
          <td>{menuPrice(130, 2.2)}</td>
        </tr>
        <tr>
          <td>{t('juice.orange')} 0.250l</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
        <tr>
          <td>{t('juice.ice_tea')} 0.250l</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
        <tr>
          <td>{t('juice.cedevita')} 0.250l</td>
          <td>{menuPrice(70, 1.2)}</td>
        </tr>
        <tr>
          <td>{t('juice.fresh_orange')}</td>
          <td>{menuPrice(150, 2.5)}</td>
        </tr>
        <tr>
          <td>{t('juice.fresh_mix')}</td>
          <td>{menuPrice(180, 3)}</td>
        </tr>
        <tr>
          <td>{t('juice.lemonade')}</td>
          <td>{menuPrice(140, 2.4)}</td>
        </tr>
        <tr>
          <td>{t('juice.soda')}</td>
          <td>{menuPrice(120, 2)}</td>
        </tr>
      </table>
    </div>
  );
};

export default Juices;
