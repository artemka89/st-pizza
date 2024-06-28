import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '../layouts/root';

import { authRoutes } from './auth-routes';
import { publicRoutes } from './public-routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Произошла ошибка</div>,
    children: [publicRoutes, authRoutes],
  },
  {
    path: '*',
    element: <div>Страница не найдена</div>,
  },
]);
