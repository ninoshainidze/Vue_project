import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import {ValidationObserver} from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


