import Vue from 'vue'
import router from 'vue-router'
import About from './components/userComponents/About'
import Login from './components/Login'
import navbar from './components/navbar/navbar'
import mainPage from './components/mainPage'
import dashboard from './components/adminComponents/dashboard'
import home from './components/userComponents/home'
import profile from './components/userComponents/profile'
import service from './components/adminComponents/service'
import contact from './components/userComponents/contact'
import userNavbar from './components/navbar/userNavbar'
import adminNavbar from './components/navbar/adminNavbar'
import store from './store.js'


Vue.use(router)

const VueRouter = new router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:"/",
            name:"navbar",
            component:navbar,
                children:[
                    { path: '/',name:"mainPage", component: mainPage },
                    { path:"/Login", name:"Login",   component:Login},
                    { path: '/about', name:"About",component: About },
                    { path: '/contact', name:"contact",component: contact }
                ]
               
                
        },
        {
            path: '/user', 
            component: userNavbar,
                children: [
                    { path: '', component: home },
                    { path: 'about',component: About },
                    { path: 'contact',component: contact },
                    { path: 'profile',component: profile }
                ],
                beforeEnter:(to, from, next) =>{
                if(!store.state.user.loggedIn){
                    return next(
                        {name:'Login'}
                    )
                    
                } if(store.state.user.role =="user")next()
            }
        },
        {
            path: '/admin', 
            component: adminNavbar,
            children: [
                { path: '/',component: dashboard },
                { path: 'service',component: service }
            ],
                beforeEnter:(to, from, next) =>{
                    // store.getters["auth"]["role"] = localStorage.getItem("role")
                    if(!store.state.user.loggedIn){
                        return next(
                            {name:'Login'}
                        )
                    }
                    if(store.state.user.role == "admin")next()
                    
                }
            
            }
    ]
})

export default VueRouter

