import { createRouter, createWebHistory } from 'vue-router';
import pagesRoutes from './pages/pages.route';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...pagesRoutes],
});

export default router;
