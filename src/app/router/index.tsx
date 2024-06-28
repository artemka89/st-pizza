import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '../layouts/root';

import { authRoutes } from './auth-routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Произошла ошибка</div>,
    children: [authRoutes],
  },
  {
    path: '*',
    element: <div>Страница не найдена</div>,
  },
]);
