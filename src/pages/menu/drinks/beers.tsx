import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

const Beers = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/drinks' titleKey='drink.beer'>
      <tr>
        <td>{t('beer.skopsko')}</td>
        <td>{menuPrice(120, 2)}</td>
      </tr>
      <tr>
        <td>{t('beer.amstel')}</td>
        <td>{menuPrice(120, 2)}</td>
      </tr>
      <tr>
        <td>{t('beer.heineken')}</td>
        <td>{menuPrice(150, 2.5)}</td>
      </tr>
      <tr>
        <td>{t('beer.skopsko_smooth')}</td>
        <td>{menuPrice(120, 2)}</td>
      </tr>
      <tr>
        <td>{t('beer.radler')}</td>
        <td>{menuPrice(110, 1.8)}</td>
      </tr>
      <tr>
        <td>{t('beer.pint_small')}</td>
        <td>{menuPrice(100, 1.7)}</td>
      </tr>
      <tr>
        <td>{t('beer.pint_big')}</td>
        <td>{menuPrice(130, 2.2)}</td>
      </tr>
    </MenuCategoryPage>
  );
};

export default Beers;
