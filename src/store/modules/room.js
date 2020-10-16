import axios from 'axios'

export default {
  state: {
    dataRoom: {}
  },
  mutations: {
    setDataRoom(state, payload) {
      state.dataRoom = payload
    }
  },
  actions: {
    getRoomList(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}chat/${payload}`)
          .then(response => {
            context.commit('setDataRoom', response.data.data)
            resolve(response.data.data)
            console.log(response.data)
          })
          .catch(error => {
            reject(error.response)
            console.log(error.data)
          })
      })
    },
    postRoom(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}chat/room`, payload)
          .then(response => {
            console.log(response)
            resolve(response.data)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getDataRoomList(state) {
      return state.dataRoom
    }
  }
}
