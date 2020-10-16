import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Users from './modules/users'
import Room from './modules/room'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Users,
    Room
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user'],
      storage: window.sessionStorage
    })
  ]
})
