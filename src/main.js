import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import Router from "vue-router";

Vue.config.productionTip = false

router.beforeEach((to,from, next)=>{
  let login = store.getters.User
  if (to.matched.some(url => url.meta.login)) {
    if (login === false) {
      console.log(login)
      next({path: '/login'})
    }else {
      console.log(login)
      next()
    }
  } else {
    next()
  }
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
