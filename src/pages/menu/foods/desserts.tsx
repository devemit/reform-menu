import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

export default function Desserts() {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/foods' titleKey='food.desserts'>
      <tr>
        <td className='menu-page-product-cell'>
          {t('dessert.pancake_cream_banana')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.pancake_cream_banana')}</span>
        </td>
        <td>{menuPrice(150, 2.5)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('dessert.ice_cream_ball')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.ice_cream_ball')}</span>
        </td>
        <td>{menuPrice(50, 0.9)}</td>
      </tr>
    </MenuCategoryPage>
  );
}
