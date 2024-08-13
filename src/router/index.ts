import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../pages/About'
import HomePage from '../pages/Home'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
})

export default router
