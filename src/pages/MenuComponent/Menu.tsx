import './Menu.css';
import MenuCard from './MenuCard';

const Menu = () => {
  return (
    <div className='menu_container'>
      <div className='men'>
        <MenuCard
          // imgUrl='https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          imgUrl='https://images.unsplash.com/photo-1616781393581-20a71c56076b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          label={'DRINKS'}
          link='/drinks'
        />
      </div>
      <div className='men'>
        <MenuCard
          //   imgUrl='https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          imgUrl='https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          // imgUrl='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          label={'FOODS'}
          link='/foods'
        />
      </div>
    </div>
  );
};

export default Menu;
