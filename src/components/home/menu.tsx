import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsImages, BsShare } from 'react-icons/bs';
import ImageComponent from './image-component';
import { useLanguage } from '../../contexts/language-context';
import './menu.css';

const MENU_URL = 'https://reformbeachbar.vercel.app';
const DRINKS_CARD_IMAGE =
  'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1400&q=85';
const FOOD_CARD_IMAGE =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=85';

const menuCards = [
  { image: DRINKS_CARD_IMAGE, link: '/drinks', titleKey: 'menu.drinks' },
  { image: FOOD_CARD_IMAGE, link: '/foods', titleKey: 'menu.food' },
];

const Menu = () => {
  const { t } = useLanguage();
  const [shareFeedback, setShareFeedback] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(MENU_URL);
    setShareFeedback(true);
    setTimeout(() => setShareFeedback(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Reform Beach & Bar',
          text: t('menu.share_text'),
          url: MENU_URL,
        });
      } catch (err) {
        copyLink();
      }
    } else {
      copyLink();
    }
  };

  return (
    <section className='menu-section'>
      <div className='menu-section__intro'>
        <p className='menu-section__title'>{t('menu.choose_category')}</p>
        <div className='menu-section__actions'>
          <button
            type='button'
            className='menu-section__share'
            onClick={handleShare}
            aria-label={t('footer.share')}
          >
            <BsShare size={12} aria-hidden />
            {shareFeedback ? t('footer.shared') : t('footer.share')}
          </button>
          <NavLink className='menu-section__gallery' to='/gallery'>
            <BsImages size={14} aria-hidden />
            {t('gallery.button')}
          </NavLink>
        </div>
      </div>
      <div className='menu_container'>
        {menuCards.map(({ image, link, titleKey }) => (
          <NavLink className='men menu-card-link' key={link} to={link} aria-label={t(titleKey)}>
            <div className='blur-image'>
              <ImageComponent alt={t(titleKey)} src={image} />
            </div>
            <span className='menu-card-link__overlay' aria-hidden='true'>
              <span className='menu-card-link__label'>{t(titleKey)}</span>
            </span>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Menu;
