import CircleLinkButton from '../../../components/circle-link-button/circle-link-button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './cocktails.css';

const cocktailTypes = [
  { titleKey: 'cocktail.type.classics', den: 250, euro: 4.1 },
  { titleKey: 'cocktail.type.signatures', den: 300, euro: 5 },
  { titleKey: 'cocktail.type.non_alcohol', den: 150, euro: 2.5 },
];

const Cocktails = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <section className='cocktails-page'>
      <div className='cocktails-page__toolbar'>
        <CircleLinkButton link='/drinks' />
      </div>
      <div className='cocktails-page__content'>
        <ul className='cocktails-page__types'>
          {cocktailTypes.map(({ titleKey, den, euro }) => (
            <li className='cocktails-page__type' key={titleKey}>
              <span className='cocktails-page__type-title'>{t(titleKey)}</span>
              <span className='cocktails-page__type-price'>{menuPrice(den, euro)}</span>
            </li>
          ))}
        </ul>
        <LazyLoadImage
          className='cocktails-page__image'
          src='/signatures.jpg'
          alt='Cocktails at Reform'
          effect='blur'
          threshold={100}
          wrapperClassName='cocktails-page__image-wrapper'
        />
      </div>
    </section>
  );
};

export default Cocktails;
