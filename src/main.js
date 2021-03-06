import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
// import store from './store'
import store from './store/store'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.config.productionTip = false

let app

export const bus = new Vue()

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('getUser', user)
    store.dispatch('getMaterials')
  }
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
