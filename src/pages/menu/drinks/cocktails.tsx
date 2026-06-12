import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

const Cocktails = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/drinks' titleKey='drink.cocktails'>
      <tr>
        <td>{t('cocktail.mojito')}</td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.pina_colada')}</td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.strawberry_colada')}</td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.cosmopolitan')}</td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.margarita')}</td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.strawberry_margarita')}</td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.tequila_sunrise')}</td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.sandcastle')}</td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.sex_on_beach')}</td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.blue_lagoon')}</td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.flamingo')}</td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.blue_hawaii')}</td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.cuba_libre')}</td>
        <td>{menuPrice(200, 3.5)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.amf')}</td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.arizona_twister')}</td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
      <tr>
        <td>{t('cocktail.long_island')}</td>
        <td>{menuPrice(250, 4.1)}</td>
      </tr>
    </MenuCategoryPage>
  );
};

export default Cocktails;
