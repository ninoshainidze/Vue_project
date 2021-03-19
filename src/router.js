import Vue from 'vue'
import router from 'vue-router'
import mainPage from './view/mainPage.vue'
import Login from './components/Login'
import About from './view/userComponents/About'
import contact from './view/userComponents/contact'
import OurService from './view/userComponents/OurService'
import dashboard from './view/adminComponent/dashboard'
import controlPanel from './view/adminComponent/controlPanel'
import profile from './view/userComponents/profile'
import UserContent from './view/navbar/UserContent'
import GuestContent from './view/navbar/GuestContent'
import AdminContent from './view/navbar/AdminContent'
import SignUpForm from './components/SignUpForm/SignUpForm'
import store from './store.js'

Vue.use(router)
 
const VueRouter = new router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    {
        path: '/', 
        component: GuestContent,
            children: [
                { path: '',component: mainPage },
                { path: 'about',component: About },
                { path: 'contact',component: contact },
                { path: 'Login', name: 'Login',component: Login },
                { path: 'SignUp', name: 'SignUp',component: SignUpForm }
                
            ],
      },
      {
        path: '/user', 
        component: UserContent,
            children: [
                { path: '',component: mainPage },
                { path: 'about',component: About },
                { path: 'contact',component: contact },
                { path: 'OurService',component: OurService },
                { path: 'profile',component: profile }
            ],
              beforeEnter:(to, from, next) =>{
                if(store.state.user.loggedIn && store.state.user.role =="user"){
                   
                    next()
                } else{
                    return next(
                        {name:'Login'}
                    )
                   
                }
            }
      },
      {
        path: '/admin', 
        component: AdminContent,
            children: [
                { path: '',component: dashboard },
                { path: 'controlPanel',component: controlPanel }
            ],
              beforeEnter:(to, from, next) =>{
                if(store.state.user.loggedIn && store.state.user.role =="admin"){
                  
                    next()
                } else{
                    return next(
                        {name:'Login'}
                    )
                   
                }
            }
      },
       
    ]
})

export default VueRouter

