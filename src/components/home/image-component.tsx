import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageComponentProps {
  alt?: string;
  src: string;
}

export default function ImageComponent({ alt = '', src }: ImageComponentProps) {
  return (
    <div className='image-wrapper'>
      <LazyLoadImage
        alt={alt}
        src={src}
        className='menu-card_image'
        effect='blur'
        threshold={100}
        wrapperClassName='image-lazy-wrapper'
      />
    </div>
  );
}
