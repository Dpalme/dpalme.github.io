import Navbar from './shared/components/navbar';
import { SocialIcons } from './shared/components/socials';
import { ModalProvider } from './shared/hooks/useModal';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
  component: App,
});

function App() {
  return (
    <>
      <ModalProvider>
        <Outlet />
      </ModalProvider>
      <Navbar />
      <SocialIcons />
    </>
  );
}

export default App;
