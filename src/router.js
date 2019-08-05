import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/user-profile.vue'),
      meta:{ login: true}
    },
    {
      path: '/login',
      component:()=>import(/* webpackChunkName: "login" */ './views/login.vue')
    }
  ],
})
