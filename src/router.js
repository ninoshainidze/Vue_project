import Vue from 'vue'
import router from 'vue-router'
import About from './components/userComponents/About'
import Login from './components/Login'
import dashboard from './components/adminComponents/dashboard'
import home from './components/userComponents/home'
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
            name:"Login",
            component:Login
        },
        {
            path: '/guest', 
            component: userNavbar,
                children: [
                    { path: '/', component: home },
                    { path: 'about',component: About },
                    { path: 'contact',component: contact }
                ],
                beforeEnter:(to, from, next) =>{
                store.getters["auth"]["role"] = localStorage.getItem("role")
                if(!store.getters["auth"]["loggedIn"]){
                    return next(
                        {name:'Login'}
                    )
                    
                } if(store.getters["auth"]["role"] =="guest")next()
                
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
                    store.getters["auth"]["role"] = localStorage.getItem("role")
                    if(!store.getters["auth"]["loggedIn"]){
                        return next(
                            {name:'Login'}
                        )
                    }
                    if(store.getters["auth"]["role"] == "admin")next()
                    
                }
            
            }
    ]
})

export default VueRouter

