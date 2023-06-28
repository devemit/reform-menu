import './Gallery.css';
import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Gallery = () => {
  const [data, setData] = useState<any>();

  const fetchImages = () =>
    fetch('./galleryImages.json').then((res) => {
      return res.json().then((data) => {
        setData(data);
      });
    });

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <div className='gallery_title'>
        <h1 className='gal_title'>
          Gallery
          <br />
          Coming soon...
        </h1>
      </div>
      <div className='gallery_grid'>
        {data?.map((image: any) => (
          <LazyLoadImage
            className='zoom'
            key={image.id}
            src={image.imgurl}
            alt='image'
            effect='blur'
            loading='lazy'
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
