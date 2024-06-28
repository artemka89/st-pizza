import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@/features/theme';

import { AppProvider } from './providers/app-provider.tsx';
import { AppRouter } from './providers/app-router.tsx';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
);
