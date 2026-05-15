import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

const Wines = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/drinks' titleKey='drink.wine'>
      <tr>
        <td>{t('wine.temjanika')} 0.187л</td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td>{t('wine.red_wine')} 0.187л</td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td>{t('wine.alexandria')} 0.750л</td>
        <td>{menuPrice(700, 12)}</td>
      </tr>
      <tr>
        <td>{t('wine.alexandria')} 0.187л</td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
    </MenuCategoryPage>
  );
};

export default Wines;
