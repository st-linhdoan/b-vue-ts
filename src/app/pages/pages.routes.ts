import aboutRoutes from './About/about.routes';
import homeRoutes from './Home/home.routes';
import Page from './Page';

const pagesRoutes = [
  {
    path: '/',
    component: Page,
    children: [...homeRoutes, ...aboutRoutes],
  },
];

export default pagesRoutes;
