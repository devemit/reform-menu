import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

export default function Breakfast() {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/foods' titleKey='food.breakfast'>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.reform_breakfast')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.reform_breakfast')}</span>
        </td>
        <td>{menuPrice(180, 3)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.omelet')}
          <span className='menu-page-ingredients'>
            <br />
            {t('ingredients.omelet')}
          </span>
        </td>
        <td>{menuPrice(170, 2.9)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.brooklyn')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.brooklyn')}</span>
        </td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
    </MenuCategoryPage>
  );
}
