import Vue from 'vue'
import App from './App.vue'
import router from './components'
import store from './components'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
