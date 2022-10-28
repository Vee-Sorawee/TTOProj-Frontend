import { createStore } from "vuex";

export default createStore({
    state: {
        role: "",
        status: false,
        currentUser: null
    },
    mutations: {
        setCurrentUser(state, value) {
            state.currentUser = value
        },
        setRole(state, value) {
            state.role = value
        },
        setStatus(state, value) {
            state.status = value
        }
    },
    getters: {
        getCurrentUser(state) {
            return state.currentUser
        },
        getRole(state) {
            return state.role
        },
        getStatus(state) {
            return state.status
        }
    },
    actions: {
        setCurrentUser(context, value) {
            context.commit('setCurrentUser', value)
        },
        setRole(context, value) {
            context.commit('setRole', value)
        },
        setStatus(context, value) {
            context.commit('setStatus', value)
        }
    },
});