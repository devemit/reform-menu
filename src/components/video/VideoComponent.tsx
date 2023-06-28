import './VideoStyles.css';
import { BsArrowDownShort } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const VideoComponent = () => {
  return (
    <LazyLoadComponent>
      <div className='hero__container'>
        <video src='./video.mp4' autoPlay loop muted />
        <div className='arrow__wrapper'>
          <Link to='capacity' spy={true} smooth={true} offset={-10} duration={800}>
            <BsArrowDownShort className='arrow' size={36} />
          </Link>
        </div>
      </div>
    </LazyLoadComponent>
  );
};

export default VideoComponent;
