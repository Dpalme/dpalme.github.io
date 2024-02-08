import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './App';
import AboutPage from './modules/about';
import HomePage from './modules/home';
import ProjectsPage from './modules/projects';
import WorkRouter from './modules/work';

const routeTree = rootRoute.addChildren([
  AboutPage,
  HomePage,
  ProjectsPage,
  WorkRouter,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});
