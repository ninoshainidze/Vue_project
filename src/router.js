import Vue from 'vue'
import router from 'vue-router'
import mainPage from './components/mainPage'
import Login from './components/Login'
import About from './view/guestComponent/About'
import contact from './view/guestComponent/contact'
import dashboard from './view/adminComponent/dashboard'
import service from './view/adminComponent/service'
import home from './view/userComponents/home'
import profile from './view/userComponents/profile'
import store from './store.js'


Vue.use(router)



//vue calke gavaketo componentebisavut 
// iyos ragac gverdi romelic chatvvirtavs yvelafers

//interfaceis elementebis  gamoyeneba
//modal box +
//table +
// data 
// dropdown select 
// mivanicho tables
// binding
function prefixRoutes(prefix, routes) {
    console.log(routes)
    return routes.map((route) => {
      route.path = prefix + '' + route.path;
      return route;
    });
  }

 

const VueRouter = new router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        ...prefixRoutes('', [
            {
              path: '/',
              name: 'mainPage',
              component: mainPage,
            },
            {
              path: '/about',
              name: 'about',
              component: About,
            },
            {
                path: '/contact',
                name: ' contact',
                component: contact,
              },
            {
                path: '/Login',
                name: 'Login',
                component: Login,
            },
          ]),

          ...prefixRoutes('/user', [
            {
              path: '',
              name: 'home',
              component: home,
              beforeEnter:(to, from, next) =>{
                if(store.state.user.loggedIn && store.state.user.role =="user"){
                    console.log("before")
                    next()
                } else{
                    return next(
                        {name:'Login'}
                    )
                   
                }
            }
            },
              {
                path: '/profile',
                name: ' profile',
                component: profile,
                beforeEnter:(to, from, next) =>{
                    if(store.state.user.loggedIn && store.state.user.role =="user"){
                        console.log("before")
                        next()
                    } else{
                        return next(
                            {name:'Login'}
                        )
                       
                    }
                }
              },
          ]),
          ...prefixRoutes('/admin', [
            {
              path: '',
              name: 'dashboard',
              component: dashboard,
              beforeEnter:(to, from, next) =>{
                if(store.state.user.loggedIn && store.state.user.role =="admin"){
                    console.log("before")
                    next()
                } else{
                    return next(
                        {name:'Login'}
                    )
                   
                }
            }
            },
              {
                path: '/service',
                name: ' service',
                component: service,
                beforeEnter:(to, from, next) =>{
                    if(store.state.user.loggedIn && store.state.user.role =="admin"){
                        console.log("before")
                        next()
                    } else{
                        return next(
                            {name:'Login'}
                        )
                       
                    }
                }
              },
          ])
    ]
})

export default VueRouter

