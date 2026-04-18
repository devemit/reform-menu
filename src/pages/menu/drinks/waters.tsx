import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

const Waters = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/drinks' titleKey='drink.water'>
      <tr>
        <td>{t('water.rosa')}</td>
        <td>{menuPrice(60, 1)}</td>
      </tr>
      <tr>
        <td>{t('water.mineral_water')}</td>
        <td>{menuPrice(70, 1.2)}</td>
      </tr>
      <tr>
        <td>{t('water.dobra_voda')}</td>
        <td>{menuPrice(70, 1.2)}</td>
      </tr>
      <tr>
        <td>{t('water.rosa_1l')}</td>
        <td>{menuPrice(100, 1.7)}</td>
      </tr>
    </MenuCategoryPage>
  );
};

export default Waters;
