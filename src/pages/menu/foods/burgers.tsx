import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

const Burgers = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/foods' titleKey='food.burgers'>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.hamburger')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.hamburger')}</span>
        </td>
        <td>{menuPrice(180, 3)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.reform_cheeseburger')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.reform_cheeseburger')}</span>
        </td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.manhattan_burger')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.manhattan_burger')}</span>
        </td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.american_classic')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.american_classic')}</span>
        </td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td className='menu-page-product-cell'>
          {t('food.chicken_burger')}
          <br />
          <span className='menu-page-ingredients'>{t('ingredients.chicken_burger')}</span>
        </td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
    </MenuCategoryPage>
  );
};

export default Burgers;
