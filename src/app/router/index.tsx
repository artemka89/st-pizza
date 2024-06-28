import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Произошла ошибка</div>,
  },
  {
    path: '*',
    element: <div>Страница не найдена</div>,
  },
]);
