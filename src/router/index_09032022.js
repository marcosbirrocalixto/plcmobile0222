import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MySupports from '../views/supports/MySupports.vue'
import MyProjects from '../views/projects/MyProjects.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  {
    path: '/lacarte',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: '/meus-projetos', 
        name: 'lacarte.my.projects',
        component: MyProjects
      },
      {
        path: '/minhas-duvidas', 
        name: 'lacarte.my.supports',
        component: MySupports
      },
      {
        path: '', 
        name: 'lacarte.home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
