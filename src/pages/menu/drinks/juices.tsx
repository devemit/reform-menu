import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

const Juices = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/drinks' titleKey='drink.juices'>
      <tr>
        <td>
          {t('juice.coca_cola')} 0.250l
        </td>
        <td>{menuPrice(100, 1.7)}</td>
      </tr>
      <tr>
        <td>
          {t('juice.fanta')} 0.250l
        </td>
        <td>{menuPrice(100, 1.7)}</td>
      </tr>
      <tr>
        <td>
          {t('juice.schweppes')} 0.250l
        </td>
        <td>{menuPrice(120, 2)}</td>
      </tr>
      <tr>
        <td>
          {t('juice.sprite')} 0.250l
        </td>
        <td>{menuPrice(100, 1.7)}</td>
      </tr>
      <tr>
        <td>
          {t('juice.tonic')} 0.250l
        </td>
        <td>{menuPrice(120, 2)}</td>
      </tr>
      <tr>
        <td>
          {t('juice.juice')} 0.250l
        </td>
        <td>{menuPrice(130, 2.2)}</td>
      </tr>
      <tr>
        <td>
          {t('juice.orange')} 0.250l
        </td>
        <td>{menuPrice(150, 2.5)}</td>
      </tr>
      <tr>
        <td>
          {t('juice.ice_tea')} 0.250l
        </td>
        <td>{menuPrice(120, 2)}</td>
      </tr>
      <tr>
        <td>
          {t('juice.cedevita')} 0.250l
        </td>
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
    </MenuCategoryPage>
  );
};

export default Juices;
