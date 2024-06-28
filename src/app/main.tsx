import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppProvider } from './providers/app-provider.tsx';
import { AppRouter } from './providers/app-router.tsx';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </React.StrictMode>,
);
