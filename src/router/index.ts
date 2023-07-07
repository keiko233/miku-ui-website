import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import("../views/HomeView.vue")
  },
  { 
    path: '/devices', 
    redirect: '/' 
  },
  {
    path: '/devices/:codename',
    name: 'DeviceView',
    component: () => import("../views/HomeView.vue")
  }
]

const router = createRouter ({
  history: createWebHistory("/"),
  routes: routes,
})

export default router;