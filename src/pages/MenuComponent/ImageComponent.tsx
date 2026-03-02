import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ImageComponent({ src }: any) {
  return (
    <div className='image-wrapper'>
      <LazyLoadImage
        src={src}
        className='menu-card_image'
        effect='blur'
        threshold={100}
        wrapperClassName='image-lazy-wrapper'
      />
    </div>
  );
}
