import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    login (state) {
      state.loggedIn = true
    },
    logout (state) {
      state.loggedIn = false
    }
  },
  actions: {
    login (context) {
      context.commit('login')
    },

    logout (context) {
      context.commit('logout')
    }
  },
  getters: {
    loggedIn: state => {
      return state.loggedIn
    }
  }
})

export default store
