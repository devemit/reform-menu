import CircleLinkButton from '../components/circle-link-button/circle-link-button';
import SectionTitle from '../components/section-title/section-title';
import { useLanguage } from '../contexts/language-context';
import './gallery.css';

const galleryImages = [
  { src: 'reform.jpg', altKey: 'gallery.reform_alt' },
  { src: 'dezero.jpg', altKey: 'gallery.events_alt' },
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <main className='gallery-page'>
      <div className='gallery-page__toolbar'>
        <CircleLinkButton link='/' />
        <SectionTitle label={t('gallery.title')} />
      </div>
      <div className='gallery-grid'>
        {galleryImages.map((image) => (
          <figure className='gallery-item' key={image.src}>
            <img src={image.src} alt={t(image.altKey)} loading='lazy' />
          </figure>
        ))}
      </div>
    </main>
  );
}
