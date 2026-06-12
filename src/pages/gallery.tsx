import { useLanguage } from '../contexts/language-context';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './gallery.css';

const galleryImages = [
  { src: '/1.jpg' },
  { src: '/2.jpg' },
  { src: '/3.jpg', wide: true },
  { src: '/4.jpg' },
  { src: '/5.jpg' },
  { src: '/6.jpg' },
  { src: '/7.jpg' },
  { src: '/8.jpg' },
  { src: '/9.jpg' },
  { src: '/10.jpg' },
  { src: '/11.jpg' },
  { src: '/12.jpg' },
  { src: '/13.jpg' },
  { src: '/14.jpg' },
  { src: '/15.jpg' },
  { src: '/16.jpg' },
  { src: '/17.jpg' },
  { src: '/19.jpg' },
  { src: '/20.jpg' },
  { src: '/25.jpg' },
  { src: '/reform.jpg', altKey: 'gallery.reform_alt', wide: true },
  { src: '/dezero.jpg', altKey: 'gallery.events_alt', wide: true },
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <main className='gallery-page'>
      <div className='gallery-grid'>
        {galleryImages.map((image, index) => (
          <figure className={`gallery-item${image.wide ? ' gallery-item--wide' : ''}`} key={image.src}>
            <LazyLoadImage
              src={image.src}
              alt={image.altKey ? t(image.altKey) : `${t('gallery.photo_alt')} ${index + 1}`}
              className='gallery-image'
              effect='blur'
              loading='lazy'
              threshold={120}
              wrapperClassName='gallery-image-wrapper'
            />
          </figure>
        ))}
      </div>
    </main>
  );
}
