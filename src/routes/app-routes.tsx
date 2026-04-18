import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './app-routes.css';

const Foods = lazy(() => import('../pages/menu/foods/foods'));
const Home = lazy(() => import('../pages/home'));
const Breakfast = lazy(() => import('../pages/menu/foods/breakfast'));
const Appetizers = lazy(() => import('../pages/menu/foods/appetizers'));
const Pasta = lazy(() => import('../pages/menu/foods/pasta'));
const Toasts = lazy(() => import('../pages/menu/foods/toasts'));
const Burgers = lazy(() => import('../pages/menu/foods/burgers'));
const Risotto = lazy(() => import('../pages/menu/foods/risotto'));
const Salads = lazy(() => import('../pages/menu/foods/salads'));
const Sandwiches = lazy(() => import('../pages/menu/foods/sandwiches'));
const Desserts = lazy(() => import('../pages/menu/foods/desserts'));
const Drinks = lazy(() => import('../pages/menu/drinks/drinks'));
const Coffees = lazy(() => import('../pages/menu/drinks/coffees'));
const Waters = lazy(() => import('../pages/menu/drinks/waters'));
const Wines = lazy(() => import('../pages/menu/drinks/wines'));
const Beers = lazy(() => import('../pages/menu/drinks/beers'));
const Juices = lazy(() => import('../pages/menu/drinks/juices'));
const Cocktails = lazy(() => import('../pages/menu/drinks/cocktails'));
const Alcohol = lazy(() => import('../pages/menu/drinks/alcohol'));

const routeFallback = <div className='route-fallback'>Loading…</div>;

export const AppRoutes = () => (
  <Suspense fallback={routeFallback}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/foods' element={<Foods />} />
      <Route path='/foods/breakfast' element={<Breakfast />} />
      <Route path='/foods/appetizers' element={<Appetizers />} />
      <Route path='/foods/pasta' element={<Pasta />} />
      <Route path='/foods/toasts' element={<Toasts />} />
      <Route path='/foods/burgers' element={<Burgers />} />
      <Route path='/foods/rissoto' element={<Risotto />} />
      <Route path='/foods/salads' element={<Salads />} />
      <Route path='/foods/sandwiches' element={<Sandwiches />} />
      <Route path='/foods/deserts' element={<Desserts />} />
      <Route path='/drinks' element={<Drinks />} />
      <Route path='/drinks/coffees' element={<Coffees />} />
      <Route path='/drinks/waters' element={<Waters />} />
      <Route path='/drinks/wines' element={<Wines />} />
      <Route path='/drinks/beers' element={<Beers />} />
      <Route path='/drinks/juices' element={<Juices />} />
      <Route path='/drinks/coctails' element={<Cocktails />} />
      <Route path='/drinks/alcohol' element={<Alcohol />} />
    </Routes>
  </Suspense>
);
