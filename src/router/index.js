import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
const NotFoundComponent = { template: '<h1>Page not found</h1><br><h2>404找不到您要的页面，是</h2>' }
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/404',
    name:'404',
    component: NotFoundComponent,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
