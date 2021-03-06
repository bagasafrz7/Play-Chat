import axios from 'axios'

export default {
  state: {
    dataUsers: {},
    dataUser: {},
    dataFriendId: {},
    dataFriensID: {},
    dataLocation: {},
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
    },
    getFriendId(state, payload) {
      state.dataFriendId = payload
    },
    setFriends(state, payload) {
      state.dataFriensID = payload[0]
      // console.log(payload[0])
    },
    getLocationID(state, paylad) {
      state.dataLocation = paylad[0]
    }
  },
  actions: {
    updateUsers(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_URL}users/${payload.user_id}`, payload.form)
          .then(response => {
            console.log(response)
            context.commit('Msg', response.msg)
            resolve(response.data)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
          })
      })
    },
    updateLocation(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_URL}users/location/${payload.user_id}`, payload)
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
    postFriend(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}list-friend/friend`, payload)
          .then(response => {
            console.log(response)
            resolve(response.data)
            context.commit('Msg', response.msg)
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
    },
    getFriendID(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}list-friend/friends/${payload}`)
          .then(response => {
            context.commit('setFriends', response.data.data)
            resolve(response.data.data)
            console.log(response.data.data[0])
          })
          .catch(error => {
            reject(error.response)
            console.log(error.data)
          })
      })
    },
    getFriendById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}users/${payload}`
          )
          .then(response => {
            context.commit('getFriendId', response.data)
            resolve(response.data)
            console.log(response.data)
          })
          .catch(error => {
            reject(error.response)
            console.log(error.data.msg)
          })
      })
    },
    getLocationUsers(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}users/datalocation/${payload}`
          )
          .then(response => {
            context.commit('getLocationID', response.data.data)
            resolve(response.data.data)
            console.log(response.data.data)
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
    },
    getFriendFriends(state) {
      return state.dataFriendId
    },
    getFriends(state) {
      return state.dataFriensID
    },
    getLoc(state) {
      return state.dataLocation
    }
  }
}
