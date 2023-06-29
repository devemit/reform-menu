import './Menu.css';
import MenuCard from './MenuCard';

const Menu = () => {
  return (
    <div className='menu_container'>
      <MenuCard
        imgUrl='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        label={'FOODS'}
        link='/foods'
      />
      <MenuCard
        imgUrl='https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        label={'DRINKS'}
        link='/drinks'
      />
    </div>
  );
};

export default Menu;
