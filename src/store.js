import Vue from 'vue'
import Vuex from 'vuex'
// import router from 'vue-router'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
// Vue.use(router)

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            role : ""
        }
    },
    getters: {
        auth(state) {
            return state.user
        },
        getRole(state) {
            return state.role
        }
        // getIsLogged(state){
        //     return state.loggedIn
        // }
        
    },
    mutations: {
        logIn(state) {
            state.user.loggedIn = true
          
        },
        logOut(state) {
            localStorage.removeItem("role")
            state.user.loggedIn = false 
            localStorage.setItem("alreadyLogged", true)

        }
    },
    plugins: [createPersistedState()]

})

