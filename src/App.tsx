import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/navbar/MainHeader';
import Gallery from './pages/gallery/Gallery';
import Menu from './pages/menu/Menu';
import Footer from './components/footer/Footer';
import HomeLayout from './pages/homelayout/HomeLayout';
import Foods from './pages/foods/Foods';
import Drinks from './pages/drinks/Drinks';
import Coffees from './pages/drinks/Coffees';
import Alcohol from './pages/drinks/Alcohol';
import Coctails from './pages/drinks/Coctails';
import Juices from './pages/drinks/Juices';
import Beers from './pages/drinks/Beers';
import Wines from './pages/drinks/Wines';
import Waters from './pages/drinks/Waters';
import ScrollToTop from './lib/scrollToTop';
import Breakfast from './pages/foods/Breakfast';
import Pasta from './pages/foods/Pasta';
import Toasts from './pages/foods/Toasts';
import Burgers from './pages/foods/Burgers';
import Rissoto from './pages/foods/Rissoto';
import Salads from './pages/foods/Salads';
import Sandwiches from './pages/foods/Sandwiches';
import Deserts from './pages/foods/Deserts';
import Appetizers from './pages/foods/Appetizers';
import QR from './components/QR';

const App = () => {
  return (
    <>
      <MainHeader />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/menu' element={<Menu />} />
        {/* foods */}
        <Route path='/menu/foods' element={<Foods />} />
        <Route path='/menu/foods/breakfast' element={<Breakfast />} />
        <Route path='/menu/foods/appetizers' element={<Appetizers />} />
        <Route path='/menu/foods/pasta' element={<Pasta />} />
        <Route path='/menu/foods/toasts' element={<Toasts />} />
        <Route path='/menu/foods/burgers' element={<Burgers />} />
        <Route path='/menu/foods/rissoto' element={<Rissoto />} />
        <Route path='/menu/foods/salads' element={<Salads />} />
        <Route path='/menu/foods/sandwiches' element={<Sandwiches />} />
        <Route path='/menu/foods/deserts' element={<Deserts />} />
        {/* drinks */}
        <Route path='/menu/drinks' element={<Drinks />} />
        <Route path='/menu/drinks/coffees' element={<Coffees />} />
        <Route path='/menu/drinks/waters' element={<Waters />} />
        <Route path='/menu/drinks/wines' element={<Wines />} />
        <Route path='/menu/drinks/beers' element={<Beers />} />
        <Route path='/menu/drinks/juices' element={<Juices />} />
        <Route path='/menu/drinks/coctails' element={<Coctails />} />
        <Route path='/menu/drinks/alcohol' element={<Alcohol />} />
      </Routes>
      {/* qr component */}
      <QR />
      <Footer />
    </>
  );
};

export default App;
