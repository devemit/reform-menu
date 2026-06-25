import CircleLinkButton from '../../../components/circle-link-button/circle-link-button';
import { useLanguage } from '../../../contexts/language-context';
import './cocktails.css';

const cocktailCategories = [
  'cocktail.category.classics',
  'cocktail.category.signatures',
  'cocktail.category.non_alcohol',
];

const Cocktails = () => {
  const { t } = useLanguage();

  return (
    <main className='cocktails-page'>
      <div className='cocktails-page__toolbar'>
        <CircleLinkButton link='/drinks' useHistoryBack />
      </div>

      <section className='cocktails-page__content' aria-label={t('drink.cocktails')}>
        <ul className='cocktails-page__categories' aria-label={t('cocktail.categories')}>
          {cocktailCategories.map((categoryKey) => (
            <li className='cocktails-page__category' key={categoryKey}>
              {t(categoryKey)}
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
