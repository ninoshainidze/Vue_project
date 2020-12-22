import Vue from 'vue'
import router from 'vue-router'
import About from '../components/About'
import Login from '../components/Login'
import dashboard from '../components/dashboard'
import service from '../components/service'
import contact from '../components/contact'
import store from '../js/store'

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
            path:"/dashboard",
            name:"dashboard",
            component:dashboard,
            beforeEnter:(to, from, next) =>{
                if(!store.getters["auth"]["loggedIn"]){
                    return next(
                        {name:'Login'}
                    )
                }
                next()
            }
        },            
        {
            path:"/about",
            name:"about",
            component:About,
            beforeEnter:(to, from, next) =>{
                if(!store.getters["auth"]["loggedIn"]){
                    return next(
                        {name:'Login'}
                    )
                }
                next()
            }
        },
        {
            path:"/contact",
            name:"contact",
            component:contact,
            beforeEnter:(to, from, next) =>{
                if(!store.getters["auth"]["loggedIn"]){
                    return next(
                        {name:'Login'}
                    )
                }
                next()
            }
        },
        {
            path:"/service",
            name:"service",
            component:service,
            beforeEnter:(to, from, next) =>{
                if(!store.getters["auth"]["loggedIn"]){
                    return next(
                        {name:'Login'}
                    )
                }
                next()
            }
        },
    ]
})

export default VueRouter

