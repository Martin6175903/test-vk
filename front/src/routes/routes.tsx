import HomePage from '../pages/home-page/HomePage.tsx';
import Favorites from '../components/layouts/favorites/Favorites.tsx';

export const routes = [
  { path: '/', element: <HomePage/> },
  { path: '/favorites', element: <Favorites/> }
]