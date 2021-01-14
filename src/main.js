import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import { extend, localize, ValidationProvider } from 'vee-validate';
import { required, alpha, max, min } from 'vee-validate/dist/rules';
import { i18n } from './i18n.js' 
import en from "vee-validate/dist/locale/en.json";
import ka from "vee-validate/dist/locale/ka.json";

localize({
  en,
  ka
});

extend('required', required);
extend('alpha', alpha);
extend('max', max);
extend('min', min);

Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App),
  router,
  store,
}).$mount('#app')


