import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/navbar/MainHeader';
import HomeLayout from './pages/homeLayout/HomeLayout';
import ScrollToTop from './utils/scrollToTop';
import QR from './components/QR';
import {
  Foods,
  Drinks,
  Coffees,
  Alcohol,
  Coctails,
  Juices,
  Beers,
  Wines,
  Waters,
  Breakfast,
  Pasta,
  Toasts,
  Burgers,
  Rissoto,
  Salads,
  Sandwiches,
  Deserts,
  Appetizers,
} from './pages';

const App = () => {
  return (
    <>
      <MainHeader />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        {/* foods */}
        <Route path='/foods' element={<Foods />} />
        <Route path='/foods/breakfast' element={<Breakfast />} />
        <Route path='/foods/appetizers' element={<Appetizers />} />
        <Route path='/foods/pasta' element={<Pasta />} />
        <Route path='/foods/toasts' element={<Toasts />} />
        <Route path='/foods/burgers' element={<Burgers />} />
        <Route path='/foods/rissoto' element={<Rissoto />} />
        <Route path='/foods/salads' element={<Salads />} />
        <Route path='/foods/sandwiches' element={<Sandwiches />} />
        <Route path='/foods/deserts' element={<Deserts />} />
        {/* drinks */}
        <Route path='/drinks' element={<Drinks />} />
        <Route path='/drinks/coffees' element={<Coffees />} />
        <Route path='/drinks/waters' element={<Waters />} />
        <Route path='/drinks/wines' element={<Wines />} />
        <Route path='/drinks/beers' element={<Beers />} />
        <Route path='/drinks/juices' element={<Juices />} />
        <Route path='/drinks/coctails' element={<Coctails />} />
        <Route path='/drinks/alcohol' element={<Alcohol />} />
      </Routes>
      <QR />
    </>
  );
};

export default App;
