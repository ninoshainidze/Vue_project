import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

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
        
    },
    mutations: {
        logIn(state) {
            state.user.loggedIn = true
          
        },
        logOut(state) {
            localStorage.removeItem("role")
            state.user.loggedIn = false 

        }
    },
    plugins: [createPersistedState()]

})

