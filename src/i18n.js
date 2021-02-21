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
    home: 'home',
    about: 'about',
    contact: 'contact',
    service: 'service',
    logout: 'logout',
    incorrectData: 'username or password is not correct',
    profile:'profile'
  },
  'ka':{
    welcomeMassage: 'მოგესალმებით',
    username: 'მომხმარებლის სახელი',
    password: 'პაროლი',
    Submit: 'შესვლა',
    dashboard: 'სტატისტიკა',
    home: 'მთავარი',
    about: 'შესახებ',
    contact: 'კონტაქტი',
    service: 'სერვისები',
    logout: 'გამოსვლა',
    incorrectData: 'მომხმარებლის სახელი ან პაროლი არ არის სწორი ',
    profile:'პროფილი'
  },
  'ru':{
    welcomeMassage: 'добро пожаловать',
    username: 'имя пользователя',
    password: 'пароль',
    Submit: 'воити',
    dashboard: 'статистика',
    home: 'главная',
    about: 'о нас',
    contact: 'контакт',
    service: 'сервиси',
    logout: 'выйти',
    incorrectData:'имя пользователя или пароль неверны',
    profile:'профил'
    
  },

}
export const i18n = new VueI18n({
  locale: 'en',
  messages
});

export default i18n;