// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.use(VueResource)

Vue.config.productionTip = false
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { App }
})
