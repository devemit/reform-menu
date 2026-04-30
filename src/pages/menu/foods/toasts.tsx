import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

export default function Toasts() {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/foods' titleKey='food.toasts'>
      <tr>
        <td className='menu-page-product-cell'>
          {t('toast.ham_cheese')}
          <br />
          <span className='menu-page-ingredients'>
            {t('ingredients.toast_ham_cheese')}
          </span>
        </td>
        <td>{menuPrice(110, 1.8)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('toast.kulen_cheese')}
          <br />
          <span className='menu-page-ingredients'>
            {t('ingredients.toast_kulen_cheese')}
          </span>
        </td>
        <td>{menuPrice(130, 2.2)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('toast.neck_cheese')}
          <br />
          <span className='menu-page-ingredients'>
            {t('ingredients.toast_neck_cheese')}
          </span>
        </td>
        <td>{menuPrice(130, 2.2)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('toast.roast_cheese')}
          <br />
          <span className='menu-page-ingredients'>
            {t('ingredients.toast_roast_cheese')}
          </span>
        </td>
        <td>{menuPrice(130, 2.2)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('toast.fries_extra')}
          <br />
          <span className='menu-page-ingredients'></span>
        </td>
        <td>{menuPrice(30, 0.5)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('toast.fries_portion')}
          <br />
          <span className='menu-page-ingredients'></span>
        </td>
        <td>{menuPrice(120, 2)}</td>
      </tr>
    </MenuCategoryPage>
  );
}
