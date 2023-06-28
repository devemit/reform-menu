import './Menu.css';
import MenuCard from './MenuCard';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Menu = () => {
  return (
    <div className='menu_container'>
      <LazyLoadComponent>
        <MenuCard
          imgUrl='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          label={'FOODS'}
          link={'/menu/foods'}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <MenuCard
          imgUrl='https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          label={'DRINKS'}
          link={'/menu/drinks'}
        />
      </LazyLoadComponent>
    </div>
  );
};

export default Menu;
