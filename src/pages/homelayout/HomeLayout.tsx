import VideoComponent from '../../components/video/VideoComponent';
import Capacity from '../../components/capacity/Capacity';
import Events from '../../components/events/Events';
import './HomeLayout.css';
import MenuGal from './MenuGal';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const HomeLayout = () => {
  return (
    <>
      <VideoComponent />
      <Capacity />
      <Events />
      <div className='menu_gallery'>
        <LazyLoadComponent>
          <MenuGal
            label={'REFORM MENU'}
            link={'/menu'}
            imgUrl='https://images.unsplash.com/photo-1564271361728-60e8df0fde5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          />
          <MenuGal
            label={'REFORM GALLERY'}
            link={'/gallery'}
            imgUrl='https://images.pexels.com/photos/191429/pexels-photo-191429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
        </LazyLoadComponent>
      </div>
    </>
  );
};

export default HomeLayout;
