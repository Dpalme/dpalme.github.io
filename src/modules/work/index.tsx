import { rootRoute } from '@/App';
import { createRoute, lazyRouteComponent } from '@tanstack/react-router';

export const WorkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/work',
  component: lazyRouteComponent(() => import('./workPage')),
});

export const MRPRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/work/mrp',
  component: lazyRouteComponent(() => import('./workProjects/mrp')),
});

export const AndreasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/work/andreas',
  component: lazyRouteComponent(() => import('./workProjects/andreas')),
});

export const BrujulaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/work/brujula',
  component: lazyRouteComponent(() => import('./workProjects/brujula')),
});

export default WorkRoute.addChildren([
  MRPRoute,
  AndreasRoute,
  BrujulaRoute,
  // RefugioRoute,
]);
