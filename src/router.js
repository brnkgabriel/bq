import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/dashboard/Dashboard.vue'
import Quiz from './views/quiz/Quiz.vue'
import Rank from './views/rank/Rank.vue'
import Materials from './views/materials/Materials.vue'
import Login from './views/login/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    },
    {
      path: '/materials',
      name: 'materials',
      component: Materials
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    }
  ]
})
