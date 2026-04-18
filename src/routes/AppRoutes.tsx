import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Foods from '../pages/foods/Foods';
import Breakfast from '../pages/foods/Breakfast';
import Appetizers from '../pages/foods/Appetizers';
import Pasta from '../pages/foods/Pasta';
import Toasts from '../pages/foods/Toasts';
import Burgers from '../pages/foods/Burgers';
import Rissoto from '../pages/foods/Rissoto';
import Salads from '../pages/foods/Salads';
import Sandwiches from '../pages/foods/Sandwiches';
import Deserts from '../pages/foods/Deserts';
import Drinks from '../pages/drinks/Drinks';
import Coffees from '../pages/drinks/Coffees';
import Waters from '../pages/drinks/Waters';
import Wines from '../pages/drinks/Wines';
import Beers from '../pages/drinks/Beers';
import Juices from '../pages/drinks/Juices';
import Coctails from '../pages/drinks/Coctails';
import Alcohol from '../pages/drinks/Alcohol';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
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
    <Route path='/drinks' element={<Drinks />} />
    <Route path='/drinks/coffees' element={<Coffees />} />
    <Route path='/drinks/waters' element={<Waters />} />
    <Route path='/drinks/wines' element={<Wines />} />
    <Route path='/drinks/beers' element={<Beers />} />
    <Route path='/drinks/juices' element={<Juices />} />
    <Route path='/drinks/coctails' element={<Coctails />} />
    <Route path='/drinks/alcohol' element={<Alcohol />} />
  </Routes>
);
