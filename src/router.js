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
            path:"/dashboard",
            name:"dashboard",
            component:dashboard,
            beforeEnter:(to, from, next) =>{
                if(!store.getters["auth"]["loggedIn"]){
                    return next(
                        {name:'Login'}
                    )
                }
                if(store.getters["auth"]["role"] == "admin"){
                    next()
                }else {
                    return next (
                        {name:'guestPage'}
                    )
                }
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
                if(store.getters["auth"]["role"] == "admin"){
                    next()
                }else {
                    return next (
                        {name:'guestPage'}
                    )
                }
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
                if(store.getters["auth"]["role"] == "admin"){
                    next()
                }else {
                    return next (
                        {name:'guestPage'}
                    )
                }
                
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
                if(store.getters["auth"]["role"] == "admin"){
                    next()
                }else {
                    return next (
                        {name:'guestPage'}
                    )
                }
            }
        },
        {
            path:"/guestPage",
            name:"guestPage",
            component:guestPage,
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

