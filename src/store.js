import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            role : "guest"
        }
    },
    getters: {
        auth(state) {
            return state.user
        },
        getRole(state) {
            return state.role
        }
        
    }
})