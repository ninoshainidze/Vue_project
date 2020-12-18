import Vue from 'vue'
import router from 'vue-router'
// import HelloWorld from '../components/HelloWorld'
import About from '../components/About'
import Login from '../components/Login'
import dashboard from '../components/dashboard'
import service from '../components/service'
import contact from '../components/contact'
import store from '../components/store'

// import auth from '../middleware/auth'
// import guest from '../middleware/guest'
// import middlewarePipeline from '../middleware/middlewarePipeline'
 Vue.use(router)

const VueRouter = new router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[          
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
// VueRouter.beforeEach((to, from, next) => {
//     if (!to.meta.middleware) {
//         return next()
//     }
//     const middleware = to.meta.middleware

//     const context = {
//         to,
//         from,
//         next,
//         store
//     }
//     return middleware[0]({
//         ...context,
//         next: middlewarePipeline(context, middleware, 1)
//     })
// })
export default VueRouter

