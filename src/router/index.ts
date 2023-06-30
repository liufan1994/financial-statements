/*
 * @Date: 2023-06-17 16:56:28
 * @Author: liufan
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'analysis',
      component: () => import('../views/analysis')
    },
    {
      path: '/analyzed',
      name: 'analyzed',
      component: () => import('../views/analyzed')
    }
  ]
})

export default router
