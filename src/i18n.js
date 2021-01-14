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
    dashboard: 'სტატისტიკა',
    about: 'შესახებ',
    contact: 'კონტაქტი',
    service: 'სერვისები',
    logout: 'გამოსვლა',
    incorrectDataMassage: 'პაროლი ან მომხმარებლის სახელი არ არის სწორი'
  },
  'ru':{
    welcomeMassage: 'добро пожаловать',
    username: 'имя пользователя',
    password: 'пароль',
    Submit: 'воити',
    dashboard: 'статистика',
    about: 'о нас',
    contact: 'контакт',
    service: 'сервиси',
    logout: 'выйти',
    incorrectDataMassage: 'имя пользователя или пароль неверны'
  },

}
export const i18n = new VueI18n({
  locale: 'en',
  messages
});

export default i18n;