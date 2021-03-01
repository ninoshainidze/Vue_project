import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import { extend, localize, ValidationProvider, ValidationObserver } from 'vee-validate';
import { required, alpha, max, min } from 'vee-validate/dist/rules';
import { i18n } from './i18n.js' 
import en from "vee-validate/dist/locale/en.json";
import ka from "vee-validate/dist/locale/ka.json";
import ru from "vee-validate/dist/locale/ru.json";
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)


localize({
  en,
  ka,
  ru
});

extend('required', required);
extend('alpha', alpha);
extend('max', max);
extend('min', min);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App),
  router,
  store,
}).$mount('#app')


