import { LazyMotion } from 'framer-motion';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { LoadingBackdrop } from './shared/components/backdrop';

const App = lazy(() => import('./App'));
const UsedAnimations = () =>
  import('./shared/animations').then((a) => a.default);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingBackdrop />}>
      <BrowserRouter>
        <LazyMotion features={UsedAnimations} strict>
          <App />
        </LazyMotion>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
