import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'
import UiLib from '../src/index'
require('./lib/flexible.js')

Vue.use(VueRouter)
Vue.use(ypUiLib)

const components = {
  spinner: require('./page/spinner/spinner.vue'),
  loading: require('./page/spinner/loading.vue')
}

let routes = []

for (let key in components) {
  routes.push({
    path: `\/${key}`,
    component: components[key]
  })
}

const router = new VueRouter({
  mode: 'hash',
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
