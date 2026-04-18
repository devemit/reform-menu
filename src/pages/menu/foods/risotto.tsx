import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

export default function Risotto() {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/foods' titleKey='food.risotto'>
      <tr>
        <td className='menu-page-product-cell'>
          {t('risotto.vegetable_risotto')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.risotto_vegetable')}</span>
        </td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('risotto.reform_risotto')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.risotto_reform')}</span>
        </td>
        <td>{menuPrice(280, 4.8)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('risotto.chicken_risotto')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.risotto_chicken')}</span>
        </td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
    </MenuCategoryPage>
  );
}
