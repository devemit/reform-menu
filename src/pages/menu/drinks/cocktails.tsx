import CircleLinkButton from '../../../components/circle-link-button/circle-link-button';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';
import './cocktails.css';

const cocktailCategories = [
  { labelKey: 'cocktail.category.classics', den: 250, euro: 4.1 },
  { labelKey: 'cocktail.category.signatures', den: 300, euro: 5 },
  { labelKey: 'cocktail.category.non_alcohol', den: 150, euro: 2.5 },
];

const Cocktails = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <main className='cocktails-page'>
      <div className='cocktails-page__toolbar'>
        <CircleLinkButton link='/drinks' useHistoryBack />
      </div>

      <section className='cocktails-page__content' aria-label={t('drink.cocktails')}>
        <ul className='cocktails-page__categories' aria-label={t('cocktail.categories')}>
          {cocktailCategories.map(({ labelKey, den, euro }) => (
            <li className='cocktails-page__category' key={labelKey}>
              <span className='cocktails-page__category-name'>{t(labelKey)}</span>
              <span className='cocktails-page__category-price'>{menuPrice(den, euro)}</span>
            </li>
          ))}
        </ul>

        <div className='cocktails-page__image-frame'>
          <img className='cocktails-page__image' src='/kokteli.jpg' alt={t('drink.cocktails')} />
        </div>
      </section>
    </main>
  );
};

export default Cocktails;
