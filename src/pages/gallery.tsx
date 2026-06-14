import { useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '../contexts/language-context';
import { ImageGallery } from 'react-image-grid-gallery';
import './gallery.css';

const galleryImages = [
  { src: '/1.jpg' },
  { src: '/2.jpg' },
  { src: '/3.jpg' },
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
  { src: '/30.jpg' },
  { src: '/31.jpg' },
  { src: '/32.jpg' },
  { src: '/33.jpg' },
  { src: '/34.jpg' },
  { src: '/35.jpg' },
  { src: '/38.jpg' },
  { src: '/39.jpg' },
  { src: '/40.jpg' },
  { src: '/41.jpg' },
  { src: '/42.jpg' },
];

const getGalleryLayout = () => {
  if (typeof window === 'undefined') {
    return { columnCount: 2, gapSize: 10 };
  }

  if (window.innerWidth >= 1000) {
    return { columnCount: 4, gapSize: 16 };
  }

  if (window.innerWidth >= 700) {
    return { columnCount: 3, gapSize: 14 };
  }

  return { columnCount: 2, gapSize: 10 };
};

export default function Gallery() {
  const { t } = useLanguage();
  const galleryRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState(getGalleryLayout);

  const imagesInfoArray = useMemo(
    () =>
      galleryImages.map((image, index) => ({
        src: image.src,
      })),
    [t]
  );

  useEffect(() => {
    const updateLayout = () => setLayout(getGalleryLayout());

    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    if (!galleryElement) {
      return undefined;
    }

    const cleanup = Array.from(
      galleryElement.querySelectorAll<HTMLImageElement>('img')
    ).map((image) => {
      const figure = image.closest('figure');
      image.loading = 'lazy';
      image.decoding = 'async';
      image.classList.add('gallery-library-image');
      figure?.classList.add('gallery-library-figure');

      if (image.complete && image.naturalWidth > 0) {
        figure?.classList.add('is-loaded');
        return () => {};
      }

      const handleLoad = () => figure?.classList.add('is-loaded');
      image.addEventListener('load', handleLoad, { once: true });
      return () => image.removeEventListener('load', handleLoad);
    });

    return () => cleanup.forEach((cleanupImage) => cleanupImage());
  }, [imagesInfoArray, layout]);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    if (!galleryElement) {
      return undefined;
    }

    const buttons = Array.from(
      galleryElement.querySelectorAll<HTMLButtonElement>('button')
    );
    buttons.forEach((button) => {
      button.tabIndex = -1;
      button.setAttribute('aria-disabled', 'true');
      button.classList.add('gallery-library-button');
    });

    const preventOpen = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    };

    galleryElement.addEventListener('click', preventOpen, true);
    galleryElement.addEventListener('keydown', preventOpen, true);

    return () => {
      galleryElement.removeEventListener('click', preventOpen, true);
      galleryElement.removeEventListener('keydown', preventOpen, true);
    };
  }, [imagesInfoArray, layout]);

  return (
    <main className='gallery-page'>
      <div className='gallery-grid' ref={galleryRef}>
        <ImageGallery
          imagesInfoArray={imagesInfoArray}
          columnCount={layout.columnCount}
          columnWidth={150}
          gapSize={layout.gapSize}
        />
      </div>
    </main>
  );
}
