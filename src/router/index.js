import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/tabbar/index.vue'

const routes = [
  {
    path:'',
    redirect:'/index'
  },

  {
    path:'/index',
    name:'index',
    component: index
  },
  {
    path:'/fenlei',
    name:'name',
    component:()=>import('../views/tabbar/fenlei.vue')
  },
  {
    path:'/cat',
    name:'cat',
    component:()=>import('../views/tabbar/cat.vue')
  },
  {
    path:'/my',
    name:'my',
    component:()=>import('../views/tabbar/my.vue')
  },
  {
    path:'/detail/:cid',
    name : 'detail',
    component:()=>import('../views/detail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode:'history'
})

export default router
