import { LazyMotion } from 'framer-motion';
import Navbar from './shared/components/navbar';
import { SocialIcons } from './shared/components/socials';
import { ModalProvider } from './shared/hooks/useModal';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
  component: App,
});

const UsedAnimations = () =>
  import('./shared/animations').then((a) => a.default);

function App() {
  return (
    <LazyMotion features={UsedAnimations} strict>
      <ModalProvider>
        <Outlet />
      </ModalProvider>
      <Navbar />
      <SocialIcons />
    </LazyMotion>
  );
}

export default App;
