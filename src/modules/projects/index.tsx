import { rootRoute } from '@/App';
import { createRoute, lazyRouteComponent } from '@tanstack/react-router';

export const ProjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: lazyRouteComponent(() => import('./projectsPage')),
});

export default ProjectsRoute;
