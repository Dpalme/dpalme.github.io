import { rootRoute } from '@/App';
import { createRoute, lazyRouteComponent } from '@tanstack/react-router';

export const HomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: lazyRouteComponent(() => import('./homepage')),
});

export default HomeRoute;
