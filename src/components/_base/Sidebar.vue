<template>
  <div class="sidebar">
    <b-row>
      <b-col cols="12" md="3" class="sidebar-main">
        <b-row class="title">
          <b-col cols="6" md="6" sm="6">
            <h4>Play Chat</h4>
          </b-col>
          <b-col cols="6" md="6" sm="6" class="text-right">
            <b-dropdown right variant="outline-primary">
              <template v-slot:button-content>
                <b-icon icon="text-left" aria-hidden="true"></b-icon>
              </template>
              <b-dropdown-item-button @click="fitur">
                <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
                Settings
              </b-dropdown-item-button>
              <b-dropdown-item-button
                @click="$bvModal.show('modal-list-friend')"
              >
                <b-icon icon="person" aria-hidden="true"></b-icon>
                Contacts
              </b-dropdown-item-button>
              <b-dropdown-item-button @click="fitur">
                <b-icon icon="telephone" aria-hidden="true"></b-icon>
                Calls
              </b-dropdown-item-button>
              <b-dropdown-item-button @click="fitur">
                <b-icon icon="bookmark" aria-hidden="true"></b-icon>
                Save Messages
              </b-dropdown-item-button>
              <b-dropdown-item-button @click="showModal">
                <b-icon icon="person-plus" aria-hidden="true"></b-icon>
                Invite Friends
              </b-dropdown-item-button>
              <b-dropdown-item-button @click="fitur">
                <b-icon icon="question-circle" aria-hidden="true"></b-icon>
                Play Chat FAQ
              </b-dropdown-item-button>
              <b-dropdown-item-button
                variant="danger"
                @click="$bvModal.show('modal-delete')"
              >
                <b-icon icon="trash" aria-hidden="true"></b-icon>
                Delete Account
              </b-dropdown-item-button>
              <b-dropdown-item-button
                variant="danger"
                @click="$bvModal.show('modal-logout')"
              >
                <b-icon icon="power" aria-hidden="true"></b-icon>
                Logout
              </b-dropdown-item-button>
            </b-dropdown>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="12" sm="12" class="text-center">
            <div class="profile-image" @click="linkProfile">
              <img
                :src="urlAPI + getFullUserData[0].user_image"
                alt=""
                srcset=""
              />
              <h6>{{ getFullUserData[0].user_fullname }}</h6>
              <p>@{{ getFullUserData[0].user_name }}</p>
            </div>
          </b-col>
        </b-row>
        <b-row class="search">
          <b-col cols="10" md="10" sm="10">
            <b-form-input placeholder="Type your message..."></b-form-input>
            <b-icon icon="search"></b-icon>
          </b-col>
          <b-col cols="2" md="2" sm="2">
            <p
              @click="$bvModal.show('modal-list-friend')"
              style="cursor: pointer"
            >
              +
            </p>
          </b-col>
        </b-row>
        <b-row class="detail-akses">
          <b-col cols="4" md="4" sm="4" class="all">
            <h6>All</h6>
          </b-col>
          <b-col cols="4" md="4" sm="4" class="read">
            <h6>Read</h6>
          </b-col>
          <b-col cols="4" md="4" sm="4" class="unread">
            <h6>Unread</h6>
          </b-col>
        </b-row>
        <div class="list-chatting">
          <b-row
            v-for="(value, index) in getDataRoomList"
            :key="index"
            @click="getRoomMessage(value)"
          >
            <b-col cols="3" md="3" sm="3">
              <img :src="urlAPI + value.user_image" alt="" srcset="" />
            </b-col>
            <b-col cols="9" md="9" sm="9" class="select-room">
              <b-row>
                <b-col cols="8" md="8" sm="8">
                  <h5>{{ value.user_fullname }}</h5>
                  <p>Content Message</p>
                </b-col>
                <b-col cols="4" md="4" sm="4">
                  <h6>{{ value.roomchat_crated_at.slice(12, 16) }}</h6>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col cols="12" md="9">
        <b-row class="chat">
          <b-col cols="12" md="12" sm="12">
            <div class="no-chat" v-show="chat === false">
              <p>Please select a chat to start messaging</p>
            </div>
          </b-col>
        </b-row>
        <div class="in-chat" v-show="chat">
          <header>
            <b-row>
              <b-col cols="1" md="1" sm="1">
                <!-- <img
                  :src="urlAPI + getDataMessage[0].user_image"
                  alt=""
                  srcset=""
                /> -->
              </b-col>
              <b-col cols="10" md="10" sm="10">
                <!-- <h6>{{ getDataMessage[0].user_fullname }}</h6> -->
                <p>Online</p>
              </b-col>
              <b-col cols="1" md="1" sm="1">
                <b-icon icon="menu-button-wide"></b-icon>
              </b-col>
            </b-row>
          </header>
          <div class="main-chat">
            <b-row>
              <b-col
                cols="12"
                md="12"
                sm="12"
                class="text-left"
                v-for="(value, index) in getDataMessage"
                :key="index"
              >
                <div
                  class="receiver"
                  v-if="value.receiver_id != getFullUserData[0].user_id"
                >
                  <b-row>
                    <!-- <b-col cols="1" sm="1" md="1">
                    </b-col> -->
                    <b-col cols="12" sm="12" md="12">
                      <!-- <div class="float-right">
                        <img
                          :src="urlAPI + value.user_image"
                          alt=""
                          srcset=""
                        />
                      </div> -->
                      <div class="content-chat float-right">
                        <p>
                          {{ value.message }}
                        </p>
                      </div>
                    </b-col>
                  </b-row>
                </div>
                <div
                  class="sender"
                  v-if="value.receiver_id === getFullUserData[0].user_id"
                >
                  <b-row>
                    <!-- <b-col cols="1" sm="1" md="1">
                      <img :src="urlAPI + value.user_image" alt="" srcset="" />
                    </b-col> -->
                    <b-col cols="11" sm="11" md="11">
                      <div class="content-chat">
                        <p>
                          {{ value.message }}
                        </p>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </div>
          <footer>
            <b-row>
              <b-col cols="12" md="12" sm="12">
                <div class="send-chat">
                  <b-icon icon="plus" class="plus"></b-icon>
                  <b-icon icon="emoji-laughing" class="emoticon"></b-icon>
                  <b-icon icon="dice1-fill" class="picture"></b-icon>
                  <input
                    type="text"
                    v-model="forms.message"
                    placeholder="Type your message"
                    v-on:keyup.enter="submit"
                  />
                </div>
              </b-col>
            </b-row>
          </footer>
        </div>
      </b-col>
    </b-row>
    <!-- Modal Logout -->
    <div>
      <b-modal id="modal-logout" centered>
        <template v-slot:modal-header="{ close }">
          <!-- Emulate built in modal header close button action -->
          <h5>Notice</h5>
          <b-button size="sm" variant="outline" @click="close()">X</b-button>
        </template>

        <h6>Are You Sure to Quit?</h6>

        <template v-slot:modal-footer="{ cancel }">
          <b-button size="sm" variant="success" @click="handleLogout"
            >OK</b-button
          >
          <b-button size="sm" variant="danger" @click="cancel()"
            >Cancel</b-button
          >
        </template>
      </b-modal>
    </div>
    <!-- Modal Logout -->
    <!-- Modal Delete Account -->
    <div>
      <b-modal id="modal-delete" centered>
        <template v-slot:modal-header="{ close }">
          <!-- Emulate built in modal header close button action -->
          <h5 style="color: red">Notice</h5>
          <b-button size="sm" variant="outline" @click="close()">X</b-button>
        </template>

        <h6>Are you sure you want to permanently delete your account?</h6>

        <template v-slot:modal-footer="{ cancel }">
          <b-button size="sm" variant="success" @click="deletePermanent()"
            >OK</b-button
          >
          <b-button size="sm" variant="danger" @click="cancel()"
            >Cancel</b-button
          >
        </template>
      </b-modal>
    </div>
    <!-- Modal Delete Account -->
    <!-- Modal Searching -->
    <b-modal
      ref="my-modal"
      size="xl"
      scrollable
      hide-footer
      title="Invite Friends"
    >
      <div class="d-block">
        <h3>Find your friend</h3>
        <div class="search-friend my-4">
          <b-row>
            <b-col cols="12" sm="12" md="12">
              <input
                type="text"
                placeholder="Search your friend by email"
                style="
                  width: 100%;
                  padding: 15px;
                  border-radius: 10px;
                  border: none;
                  border: 1px solid black;
                  outline: none;
                "
                v-model="form.user_email"
                v-on:keyup.enter="searching(form.user_email)"
              />
            </b-col>
          </b-row>
        </div>
        <div class="show-friend my-4">
          <b-row>
            <h3 class="my-4 pl-4 ml-4">Hasil Searching</h3>
            <b-col
              cols="12"
              md="12"
              sm="12"
              v-for="(item, index) in getSearchUsers"
              :key="index"
            >
              <hr />
              <b-row style="padding: 0 50px">
                <b-col cols="2" md="2" sm="2">
                  <img
                    :src="urlAPI + item.user_image"
                    alt=""
                    srcset=""
                    style="width: 150px; height: 150px; border-radius: 20px"
                  />
                </b-col>
                <b-col cols="4" md="4" sm="4">
                  <h4 class="mb-2">{{ item.user_fullname }}</h4>
                  <p>@{{ item.user_name }}</p>
                  <p>{{ item.user_email }}</p>
                  <p>{{ item.user_phone }}</p>
                </b-col>
                <b-col cols="6" md="6" sm="6" class="text-right">
                  <b-icon
                    icon="person-plus"
                    aria-hidden="true"
                    font-scale="3"
                    variant="primary"
                    style="cursor: pointer"
                    @click="addFriend(item)"
                  ></b-icon>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-modal>
    <!-- Modal Searching -->
    <!-- Modal List Friend -->
    <div>
      <b-modal
        id="modal-list-friend"
        ref="modal-list-friend"
        scrollable
        size="xl"
      >
        <template v-slot:modal-header="{ close }">
          <!-- Emulate built in modal header close button action -->
          <h5>Notice</h5>
          <b-button size="sm" variant="outline" @click="close()">X</b-button>
        </template>

        <h2 class="ml-4 pl-4">List Your Friend</h2>
        <b-row>
          <b-col
            cols="12"
            md="12"
            sm="12"
            v-for="(item, index) in getDataFriend"
            :key="index"
            class="my-4"
          >
            <b-row style="padding: 0 50px">
              <b-col cols="2" md="2" sm="2">
                <img
                  v-b-toggle.sidebar-right
                  @click="profileFriend(item)"
                  :src="urlAPI + item.user_image"
                  alt=""
                  srcset=""
                  style="
                    width: 150px;
                    height: 150px;
                    border-radius: 20px;
                    cursor: pointer;
                    outline: none;
                  "
                />
              </b-col>
              <b-col
                cols="4"
                md="4"
                sm="4"
                v-b-toggle.sidebar-right
                @click="profileFriend(item)"
                style="cursor: pointer; outline: none"
              >
                <h4 class="mb-2">{{ item.user_fullname }}</h4>
                <p>@{{ item.user_name }}</p>
                <p>{{ item.user_email }}</p>
                <p>{{ item.user_phone }}</p>
                <p>{{ item.user_bio }}</p>
                <!-- <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button> -->
              </b-col>
              <b-col cols="6" md="6" sm="6" class="text-right">
                <b-icon
                  icon="chat-dots"
                  aria-hidden="true"
                  font-scale="3"
                  variant="primary"
                  style="cursor: pointer"
                  @click="addRoom(item)"
                ></b-icon>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <template v-slot:modal-footer="{ cancel }">
          <b-button size="sm" variant="danger" @click="cancel()"
            >Close</b-button
          >
        </template>
      </b-modal>
    </div>
    <!-- Modal List Friend -->
    <!-- Sidebar Profile Friend -->
    <b-sidebar id="sidebar-right" right shadow>
      <div class="px-3 py-2">
        <h4 class="mb-4 text-center">@{{ getFriends.user_name }}</h4>
        <div class="img-friend text-center mb-2">
          <b-img
            :src="urlAPI + getFriends.user_image"
            style="width: 100px; height: 100px; border-radius: 20px"
            fluid
            thumbnail
          ></b-img>
        </div>
        <h4>{{ getFriends.user_fullname }}</h4>
        <p>Online</p>
        <h4>Phone Number</h4>
        <p>{{ getFriends.user_phone }}</p>
        <hr />
        <h4>Location</h4>
        <p>Maps</p>
        <b-col cols="12" md="12" sm="12">
          <div class="maps">
            <GmapMap
              :center="coordinate"
              :zoom="15"
              map-type-id="terrain"
              style="width: 250px; height: 250px"
            >
              <GmapMarker
                :position="coordinate"
                :clickable="true"
                :draggable="true"
                @click="clickMarker"
                icon="https://img.icons8.com/color/48/000000/map-pin.png"
              />
            </GmapMap>
          </div>
        </b-col>
      </div>
    </b-sidebar>
    <!-- Sidebar Profile Friend -->
    <div></div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import io from 'socket.io-client'

export default {
  name: 'Sidebar',
  data() {
    return {
      user_id: '',
      urlAPI: process.env.VUE_APP_URL,
      socket: io('http://127.0.0.1:3001'),
      dataUsers: [],
      form: {
        user_email: ''
      },
      forms: {
        message: ''
      },
      inMsg: '',
      chat: false,
      coordinate: {
        lat: 0,
        lng: 0
      },
      receiver_id: '',
      oldRoom: ''
    }
  },
  created() {
    this.getLocationss()
    this.getDataUsers()
    this.getListFriend()
    this.getDataRoom()
    this.getMessage()
    this.getLocationss()
    this.$getLocation()
      .then((coordinates) => {
        this.coordinate = {
          lat: this.coordinate.lat,
          lng: this.coordinate.lng
        }
        console.log(this.coordinate)
      })
      .catch((error) => {
        alert(error)
      })
  },
  computed: {
    ...mapGetters([
      'getFullUserData',
      'userData',
      'getSearchUsers',
      'getDataFriend',
      'getDataRoomList',
      'getFriends',
      'getDataMessage',
      'getLoc'
    ])
  },
  mounted() {
    this.socket.on('chatMessage', (data) => {
      this.getDataMessage.push(data)
      console.log(this.getDataMessage)
    })
  },
  methods: {
    ...mapActions([
      'userLoginData',
      'logout',
      'deleteUsers',
      'searcinghUsers',
      'getListFriend',
      'postFriend',
      'getFriendById',
      'getRoomList',
      'postRoom',
      'getFriendID',
      'postRoomMessage',
      'postDataMessage',
      'updateLocation',
      'getLocationUsers'
    ]),
    ...mapMutations(['searchUsers']),
    getFriend() {
      this.getListFriend()
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error.data)
        })
    },
    getDataUsers() {
      this.userLoginData()
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error.data)
        })
    },
    deletePermanent() {
      const setData = {
        user_id: this.getFullUserData[0].user_id
      }
      this.deleteUsers(setData)
        .then((response) => {
          this.inMsg = response.msg
          this.makeToast(this.inMsg)
          // this.$refs['modal-delete'].hide()
          this.logout()
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addFriend(data) {
      this.form = {
        friend_id: data.user_id
      }
      const setData = {
        user_id: this.getFullUserData[0].user_id,
        friend_id: this.form.friend_id
      }
      console.log(setData)
      this.postFriend(setData)
        .then((response) => {
          this.inMsg = response.msg
          this.makeToast(this.inMsg)
          this.$refs['my-modal'].hide()
          this.getListFriend()
          console.log(response)
        })
        .catch((error) => {
          this.inMsg = error.data.msg
          this.makeToast(this.inMsg)
          this.$refs['my-modal'].hide()
          this.getListFriend()
          console.log(error)
        })
    },
    addRoom(data) {
      this.form = {
        friend_id: data.friend_id
      }
      const setData = {
        sender_id: this.getFullUserData[0].user_id,
        friend_id: this.form.friend_id
      }
      // console.log(setData)
      this.postRoom(setData)
        .then((response) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: response.msg,
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            this.$refs['modal-list-friend'].hide()
          }, 1)
          this.getDataRoom()
        })
        .catch((error) => {
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: error.data.msg,
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            this.$refs['modal-list-friend'].hide()
          }, 1)
          this.getDataRoom()
        })
    },
    getDataRoom() {
      const setData = {
        user_id: this.getFullUserData[0].user_id
      }
      // console.log(setData)
      this.getRoomList(setData.user_id)
    },
    getMessage() {
      const setData = {
        room_id: this.getDataMessage[0].room_id
      }
      this.postRoomMessage(setData)
    },
    getRoomMessage(data) {
      this.receiver_id = data.user_id
      this.chat = true
      const setData = {
        room_id: data.room_id
      }
      if (this.oldRoom) {
        // console.log('sudah pernah klik room' + this.oldRoom)
        // console.log('dan akan masuk room' + data.room_id)
        this.socket.emit('changeRoom', {
          oldRoom: this.oldRoom,
          newRoom: setData
        })
        this.oldRoom = setData
      } else {
        // console.log('belum pernah klik room')
        // console.log('dan akan masuk ke room' + data.room_id)
        this.socket.emit('setRoom', setData)
        this.oldRoom = setData
      }
      this.postRoomMessage(setData)
      // console.log(setData)
    },
    // postMessage(data) {
    //   // this.receiver_id = data.user_id
    //   // console.log(this.receiver_id)
    // },
    submit() {
      // const data = new FormData()
      // data.append('message', this.forms.message)
      const setData = {
        room_id: this.getDataMessage[0].room_id,
        sender_id: this.getFullUserData[0].user_id,
        receiver_id: this.receiver_id,
        message: this.forms.message
      }
      // console.log(setData)
      this.postDataMessage(setData)
      this.postRoomMessage(setData)
      // this.getRoomMessage(setData.room_id)
      this.socket.emit('privateMessage', setData)
      this.forms.message = ''
    },
    getLocationss() {
      const setData = {
        user_id: this.getFriends.friend_id
      }
      this.getLocationUsers(setData.user_id)
        .then((response) => {
          this.coordinate.lat = parseInt(response[0].user_lat)
          this.coordinate.lng = parseInt(response[0].user_lng)
          console.log(response)
          console.log(typeof this.coordinate.lat)
        })
        .catch((error) => {
          console.log(error.data)
        })
    },
    makeToast(variant = '') {
      this.$bvToast.toast(`${this.inMsg}`, {
        title: `Notification! ${'' || ''}`,
        variant: variant,
        solid: true
      })
    },
    searching(form) {
      console.log(form)
      this.searcinghUsers(form)
      // console.log(this.searchUsers(form))
      // this.getDataUsers()
      this.$router.push(`?search=${form}`)
      // this.changePage(1)
    },
    clickMarker(position) {
      console.log('clicked')
      console.log(position)
      console.log(position.latLng.lat())
      console.log(position.latLng.lng())
      this.coordinate = {
        lat: position.latLng.lat(),
        lng: position.latLng.lng()
      }
    },
    handleLogout() {
      this.$swal
        .fire({
          title: 'Logout Account?',
          icon: 'warning',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: 'Cancel'
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire('See you again!', '', 'success')
            this.logout()
          }
        })
    },
    fitur() {
      this.boxTwo = ''
      this.$bvModal.msgBoxOk('Sorry, Fitur is Coming Soon :)', {
        title: 'Confirmation',
        size: 'md',
        buttonSize: 'md',
        okVariant: 'success',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
    },
    profileFriend(data) {
      this.$refs['modal-list-friend'].hide()
      const setData = {
        friend_id: data.friend_id
      }
      // console.log(setData)
      this.getFriendID(setData.friend_id)
    },
    linkProfile() {
      this.$router.push('/update-profile')
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>

<style scoped src="../../assets/css/main.css"></style>
