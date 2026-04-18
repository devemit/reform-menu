import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

export default function Appetizers() {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/foods' titleKey='food.appetizers'>
      {/*         <tr>
          <td className='menu-page-product-cell'>
              Реформ Топла Даска
              <br />
              <span className='menu-page-ingredients'>
                поховани прсти, похована зденка, похован кашкавал, похована моцарела,
                сирење на скара, поховани маслинки
              </span>
            </td>
          <td>1000,500ден/16.5€,8.5€</td>
        </tr> */}
      <tr>
        <td className='menu-page-product-cell'>
          {t('appetizer.chicken_fingers')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.chicken_fingers')}</span>
        </td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
    </MenuCategoryPage>
  );
}
