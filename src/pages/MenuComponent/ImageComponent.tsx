import { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
export default function ImageComponent({ src }: any) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, []);

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash='LEHV6nWB2yk8pyo0adR*.7kCMdnj'
          width={400}
          height={220}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && <img loading='lazy' src={src} className='menu-card_image' />}
    </>
  );
}
