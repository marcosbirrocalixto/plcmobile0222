import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MySupports from '../views/supports/MySupports.vue'
import MyProjects from '../views/projects/MyProjects.vue'
import TelaCadastro from '../views/TelaCadastro.vue'
import Login from '../views/auth/Login.vue'
import ForgetPassword from '../views/auth/ForgetPassword.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  {
    path: '/',
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
      },
      {
        path: '/cadastro',
        name: 'lacarte.cadastro',
        component: TelaCadastro
      },
      {
        path: '/login',
        name: 'lacarte.login',
        component: Login
      },
      {
        path: '/recuperar-senha',
        name: 'lacarte.forget',
        component: ForgetPassword        
      },
      {
        path: '/reset/:token',
        name: 'reset.password',
        component: ResetPassword,
        props: true,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
