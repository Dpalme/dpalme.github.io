import { createRoute, lazyRouteComponent } from '@tanstack/react-router';
import { rootRoute } from '#/App';

export const AboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: lazyRouteComponent(() => import('./aboutPage')),
});

export default AboutRoute;
