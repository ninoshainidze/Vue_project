import Vue from 'vue'
import router from 'vue-router'
import mainPage from './view/mainPage.vue'
import Login from './components/Login'
import About from './view/userComponents/About'
import contact from './view/userComponents/contact'
import dashboard from './view/adminComponent/dashboard'
import controlPanel from './view/adminComponent/controlPanel'
import profile from './view/userComponents/profile'
import userNavbar from './components/navbar/userNavbar'
import adminNavbar from './components/navbar/adminNavbar'
import store from './store.js'

Vue.use(router)
 
const VueRouter = new router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path:'/',
        name:'mainPage',
        component:mainPage
      },
      {
        path: '/about',
        name: 'about',
        component: About,
      },
      {
        path: '/contact',
        name: 'contact',
        component: contact,
      },
      {
        path: '/Login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/user', 
        component: userNavbar,
            children: [
                { path: '',component: mainPage },
                { path: 'about',component: About },
                { path: 'contact',component: contact },
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
        component: adminNavbar,
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

