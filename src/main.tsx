import { LazyMotion } from 'framer-motion';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LoadingBackdrop } from './shared/components/backdrop';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingBackdrop />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
