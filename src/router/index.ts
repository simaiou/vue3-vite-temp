import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component:()=>import('../views/TodoList.vue'),
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component:()=>import('../views/ShoppingCart.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
