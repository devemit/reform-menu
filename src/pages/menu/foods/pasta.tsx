import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

export default function Pasta() {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/foods' titleKey='food.pasta'>
      <tr>
        <td className='menu-page-product-cell'>
          {t('pasta.bolognese')} 0.400кг
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.pasta_bolognese')}</span>
        </td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('pasta.carbonara')} 0.360кг
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.pasta_carbonara')}</span>
        </td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('pasta.four_cheeses')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.pasta_four_cheeses')}</span>
        </td>
        <td>{menuPrice(220, 3.7)}</td>
      </tr>
    </MenuCategoryPage>
  );
}
