import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

const Wines = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/drinks' titleKey='drink.wine'>
      <tr>
        <td>
          {t('wine.temjanika')} 0.187л
        </td>
        <td>{menuPrice(220, 3.7)}</td>
      </tr>
      <tr>
        <td>
          {t('wine.red_wine')} 0.187л
        </td>
        <td>{menuPrice(220, 3.7)}</td>
      </tr>
      <tr>
        <td>
          {t('wine.alexandria')} 0.750л
        </td>
        <td>{menuPrice(700, 12)}</td>
      </tr>
      <tr>
        <td>
          {t('wine.alexandria')} 0.187л
        </td>
        <td>{menuPrice(220, 3.7)}</td>
      </tr>
      <tr>
        <td>
          {t('wine.alexandria_couve')} 0.187л
        </td>
        <td>{menuPrice(220, 3.7)}</td>
      </tr>
      <tr>
        <td>
          {t('wine.traminec')} 0.187л
        </td>
        <td>{menuPrice(220, 3.7)}</td>
      </tr>
      <tr>
        <td>
          {t('wine.rose')} 0.750л
        </td>
        <td>{menuPrice(700, 12)}</td>
      </tr>
    </MenuCategoryPage>
  );
};

export default Wines;
