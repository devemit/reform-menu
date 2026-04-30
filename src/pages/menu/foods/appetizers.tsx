import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

export default function Appetizers() {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/foods' titleKey='food.appetizers'>
      <tr>
        <td className='menu-page-product-cell'>
          {t('appetizer.chicken_fingers')}
          <br />
          <span className='menu-page-ingredients'>
            {t('ingredients.chicken_fingers')}
          </span>
        </td>
        <td>{menuPrice(270, 4.5)}</td>
      </tr>
    </MenuCategoryPage>
  );
}
