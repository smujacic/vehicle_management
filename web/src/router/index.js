import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/vehicle',
    name: 'Vehicle list',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/vehicle/new',
    name: 'Vehicle new',
    component: () => import('../views/Vehicle.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
