import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '../layouts/root';

import { authRoutes } from './auth-routes';
import { privateRoutes } from './private-routes';
import { publicRoutes } from './public-routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Произошла ошибка</div>,
    children: [publicRoutes, authRoutes, privateRoutes],
  },
  {
    path: '*',
    element: <div>Страница не найдена</div>,
  },
]);
