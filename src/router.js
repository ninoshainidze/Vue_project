import Vue from 'vue'
import router from 'vue-router'
import About from './components/About'
import Login from './components/Login'
import dashboard from './components/dashboard'
import service from './components/service'
import contact from './components/contact'
import guestPage from './components/guestPage'
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
            component: guestPage,
                children: [
                    { path: 'service', component: service },
                    { path: 'About',component: About },
                    { path: 'contact',component: contact }
                ],
                beforeEnter:(to, from, next) =>{
                if(!store.getters["auth"]["loggedIn"]){
                    return next(
                        {name:'Login'}
                    )
                } if(store.getters["auth"]["role"] =="guest")next()
                
            }
        },
        {
            path: '/admin', 
            component: dashboard,
            children: [
                { path: 'dashboard',component: dashboard },
                { path: 'service',component: service },
                { path: 'About',component: About },
                { path: 'contact',component: contact }
            ],
                beforeEnter:(to, from, next) =>{
                    console.log(store.getters["auth"]["role"])
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

