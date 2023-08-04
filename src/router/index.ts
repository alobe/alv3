import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [{
  path: '/',
  component: () => import('../views/home/index.vue'),
}, {
  path: '/ac',
  component: () => import('../views/ac/index.vue'),
}]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

