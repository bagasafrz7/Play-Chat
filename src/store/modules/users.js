import axios from 'axios'

export default {
  state: {
    dataUsers: {},
    dataUser: {},
    search: '',
    limit: 50
  },
  mutations: {
    setDataUsers(state, payload) {
      state.dataUsers = payload
      // console.log(payload)
    },
    setDataUser(state, payload) {
      state.dataUser = payload
    },
    searchUsers(state, payload) {
      state.search = payload.data.result
    }
  },
  actions: {
    updateUsers(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_URL}users/${payload.user_id}`, payload.form)
          .then(response => {
            console.log(response)
            resolve(response.data)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
          })
      })
    },
    addUsersForm(context, payload) {
      console.log(payload)
      context.commit('setDataUser', payload)
    },
    deleteUsers(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}users/${payload.user_id}`)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error.response)
          })
      })
    },
    searcinghUsers(context, payload) {
      // console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}users/search?search=${payload}&limit=${context.state.limit}`
          )
          .then(response => {
            context.commit('searchUsers', response.data)
            resolve(response.data)
            // console.log(response.data)
          })
          .catch(error => {
            reject(error.response)
            console.log(error.data.msg)
          })
      })
    }
  },
  getters: {
    getSearchUsers(state) {
      // console.log(state.search)
      return state.search
    }
  }
}
