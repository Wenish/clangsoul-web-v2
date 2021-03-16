import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'


const router = createRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
