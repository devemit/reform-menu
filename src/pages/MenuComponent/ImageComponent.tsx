import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function ImageComponent({ src }: any) {
  return (
    <LazyLoadImage
      loading='lazy'
      src={src}
      className='menu-card_image'
      visibleByDefault={true}
      width={500}
      height={400}
      effect='blur'
      threshold={100}
    />
  );
}
