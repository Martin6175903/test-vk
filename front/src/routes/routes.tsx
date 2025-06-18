import HomePage from '../pages/home-page/HomePage.tsx';
import Favorites from '../components/layouts/favorites/Favorites.tsx';
import { PUBLIC_URL } from '../config/url.config.ts';

export const routes = [
  { path: PUBLIC_URL.home(), element: <HomePage/> },
  { path: PUBLIC_URL.home('/favorites'), element: <Favorites/> }
]