import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

export default function Sandwiches() {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/foods' titleKey='food.sandwiches'>
      {/* <tr>
        <td className='menu-page-product-cell'>
          {t('sandwich.reform_club')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.sandwich_reform_club')}</span>
        </td>
        <td>{menuPrice(220, 3.7)}</td>
      </tr> */}
      <tr>
        <td className='menu-page-product-cell'>
          {t('sandwich.reform_royal')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.sandwich_reform_royal')}</span>
        </td>
        <td>{menuPrice(220, 3.7)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('sandwich.new_york')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.sandwich_new_york')}</span>
        </td>
        <td>{menuPrice(150, 2.5)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('sandwich.pepperoni')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.sandwich_pepperoni')}</span>
        </td>
        <td>{menuPrice(150, 2.5)}</td>
      </tr>
    </MenuCategoryPage>
  );
}
