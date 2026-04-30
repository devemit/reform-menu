import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

export default function Salads() {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/foods' titleKey='food.salads'>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.caesar_salad')} 0.400кг
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.caesar_salad')}</span>
        </td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.tuna_salad')} 0.425кг
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.tuna_salad')}</span>
        </td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.greek_salad')} 0.285кг
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.greek_salad')}</span>
        </td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.shop_salad')} 0.345кг
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.shop_salad')}</span>
        </td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
    </MenuCategoryPage>
  );
}
