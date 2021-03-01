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
    controlPanel: 'control Panel',
    login:'Login',
    logout: 'logout',
    incorrectData: 'username or password is not correct',
    profile:'profile',
    postyourideashere: 'post your ideas here',
    aboutHeader:'we are Ideas Goals',
    aboutUs:'On our company page you can post your ideas, projects and also contact your colleagues',
    ourteam:'Our Team',
    name:'Nino',
    lastName:'Shainidze'
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
    controlPanel: 'სამართავი პანელი',
    login:'შესვლა',
    logout: 'გამოსვლა',
    incorrectData: 'მომხმარებლის სახელი ან პაროლი არ არის სწორი ',
    profile:'პროფილი',
    postyourideashere: 'განათავსე შენი იდეები აქ',
    aboutHeader:'ჩვენ ვართ Idea Goals',
    aboutUs:'ჩვენს კომპანიის გვერდზე შეგიძლიათ განათავსოთ თქვენი იდეები, პროექტები და ასევე დაუკავშირდეთ კოლეგებს ',
    ourteam:'ჩვენი გუნდი',
    name:'ნინო',
    lastName:'შაინიძე'
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
    controlPanel: 'панель управления ',
    login:'авторизоваться',
    logout: 'выйти',
    incorrectData:'имя пользователя или пароль неверны',
    profile:'профил',
    postyourideashere: 'Разместите здесь свои идеи',
    aboutHeader:'Мы Ideas Goals',
    aboutUs:'На странице нашей компании вы можете разместить свои идеи, проекты, а также связаться с коллегами.',
    ourteam:'Наша команда',
    name:'нино',
    lastName:'шайнидзе'
   
  },

}
export const i18n = new VueI18n({
  locale: 'en',
  messages
});

export default i18n;