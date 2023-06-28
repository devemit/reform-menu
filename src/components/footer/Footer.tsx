import './Footer.css';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <LazyLoadImage
        src='https://images.pexels.com/photos/2132008/pexels-photo-2132008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='footer_img'
        className='footer_img'
      />
      <div className='info_wrapper'>
        <div className='footer_title'>
          Reform
          <span className='footer_subtitle'>Beach-Bar</span>
        </div>
        <hr />
        <div className='footer_info'>
          <span className='city'>Dojran,Star Dojran</span>
          <span className='number'>+389 77 954 273</span>
        </div>
        <hr />
        <div className='icons'>
          <a target='_blank' href='https://www.instagram.com/beachbarreform/'>
            <AiFillInstagram className='icon' size={27} />
          </a>
          <a target='_blank' href='https://www.facebook.com/BeachBarReform'>
            <AiFillFacebook className='icon' size={27} />
          </a>
        </div>
      </div>
      <span className='copyright'>Reform ©2023 </span>
    </div>
  );
};

export default Footer;
