import { createRouter, createWebHistory } from 'vue-router';
import pagesRoutes from './pages/pages.routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...pagesRoutes],
});

export default router;
