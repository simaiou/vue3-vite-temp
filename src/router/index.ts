import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
  //路由初始指向
    path: '/todo-list',
    name: 'TodoList',
    component:()=>import('../views/TodoList.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
