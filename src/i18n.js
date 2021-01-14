import Vue from 'vue'; 
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  'en':{
    welcomeMassage: 'Welcome',
    username: 'username',
    password: 'password',
    Submit: 'submit',
    dashboard: 'dashboard',
    about: 'about',
    contact: 'contact',
    service: 'service',
    logout: 'logout',
    incorrectDataMassage: 'username  or password is not correct'
  },
  'ka':{
    welcomeMassage: 'მოგესალმებით',
    username: 'მომხმარებლის სახელი',
    password: 'პაროლი',
    Submit: 'შესვლა',
    dashboard: 'ანგარიშები',
    about: 'შესახებ',
    contact: 'კონტაქტი',
    service: 'სერვისები',
    logout: 'გამოსვლა',
    incorrectDataMassage: 'პაროლი ან მომხმარებლის სახელი არ არის სწორი'
  }
}
export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'ka',
  messages
});

export default i18n;