<template>
  <div class="sidebar">
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
          <b-dropdown-item-button>
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
          <img :src="urlAPI + getFullUserData[0].user_image" alt="" srcset="" />
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
        <p>+</p>
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
      <b-row>
        <b-col cols="3" md="3" sm="3">
          <img src="../../assets/img/luis.jpg" alt="" srcset="" />
        </b-col>
        <b-col cols="9" md="9" sm="9">
          <b-row>
            <b-col cols="8" md="8" sm="8">
              <h5>User Fullname</h5>
              <p>Content Message</p>
            </b-col>
            <b-col cols="4" md="4" sm="4">
              <h6>15.20</h6>
              <p>
                <b-badge variant="primary">2</b-badge>
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" md="3" sm="3">
          <img src="../../assets/img/luis.jpg" alt="" srcset="" />
        </b-col>
        <b-col cols="9" md="9" sm="9">
          <b-row>
            <b-col cols="8" md="8" sm="8">
              <h5>User Fullname</h5>
              <p>Content Message</p>
            </b-col>
            <b-col cols="4" md="4" sm="4">
              <h6>15.20</h6>
              <p>
                <b-badge variant="primary">2</b-badge>
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" md="3" sm="3">
          <img src="../../assets/img/luis.jpg" alt="" srcset="" />
        </b-col>
        <b-col cols="9" md="9" sm="9">
          <b-row>
            <b-col cols="8" md="8" sm="8">
              <h5>User Fullname</h5>
              <p>Content Message</p>
            </b-col>
            <b-col cols="4" md="4" sm="4">
              <h6>15.20</h6>
              <p>
                <b-badge variant="primary">2</b-badge>
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" md="3" sm="3">
          <img src="../../assets/img/luis.jpg" alt="" srcset="" />
        </b-col>
        <b-col cols="9" md="9" sm="9">
          <b-row>
            <b-col cols="8" md="8" sm="8">
              <h5>User Fullname</h5>
              <p>Content Message</p>
            </b-col>
            <b-col cols="4" md="4" sm="4">
              <h6>15.20</h6>
              <p>
                <b-badge variant="primary">2</b-badge>
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" md="3" sm="3">
          <img src="../../assets/img/luis.jpg" alt="" srcset="" />
        </b-col>
        <b-col cols="9" md="9" sm="9">
          <b-row>
            <b-col cols="8" md="8" sm="8">
              <h5>User Fullname</h5>
              <p>Content Message</p>
            </b-col>
            <b-col cols="4" md="4" sm="4">
              <h6>15.20</h6>
              <p>
                <b-badge variant="primary">2</b-badge>
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" md="3" sm="3">
          <img src="../../assets/img/luis.jpg" alt="" srcset="" />
        </b-col>
        <b-col cols="9" md="9" sm="9">
          <b-row>
            <b-col cols="8" md="8" sm="8">
              <h5>User Fullname</h5>
              <p>Content Message</p>
            </b-col>
            <b-col cols="4" md="4" sm="4">
              <h6>15.20</h6>
              <p>
                <b-badge variant="primary">2</b-badge>
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" md="3" sm="3">
          <img src="../../assets/img/luis.jpg" alt="" srcset="" />
        </b-col>
        <b-col cols="9" md="9" sm="9">
          <b-row>
            <b-col cols="8" md="8" sm="8">
              <h5>User Fullname</h5>
              <p>Content Message</p>
            </b-col>
            <b-col cols="4" md="4" sm="4">
              <h6>15.20</h6>
              <p>
                <b-badge variant="primary">2</b-badge>
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
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
    <b-modal ref="my-modal" size="xl" hide-footer title="Invite Friends">
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
            <b-col cols="12" md="12" sm="12">
              <h3>Hasil Searching</h3>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-modal>
    <!-- Modal Searching -->
    <div></div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Sidebar',
  data() {
    return {
      user_id: '',
      urlAPI: process.env.VUE_APP_URL,
      dataUsers: [],
      form: {
        user_email: ''
      }
    }
  },
  created() {
    this.getDataUsers()
  },
  methods: {
    ...mapActions(['userLoginData', 'logout', 'deleteUsers']),
    ...mapMutations(['searchUsers']),
    getDataUsers() {
      this.userLoginData()
        .then((response) => {
          console.log(response)
          console.log(response.data[0].user_name)
        })
        .catch((error) => {
          console.log(error.data)
        })
      // axios
      //   .get(`${process.env.VUE_APP_URL}users/${this.users.user_id}`)
      //   .then((response) => {
      //     // this.dataUsers = response.data.data
      //     // console.log(this.dataUsers)
      //     console.log(response)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
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
    makeToast(variant = '') {
      this.$bvToast.toast(`${this.inMsg}`, {
        title: `Notification! ${'' || ''}`,
        variant: variant,
        solid: true
      })
    },
    searching(form) {
      this.searchUsers(form)
      console.log(this.searchUsers)
      this.getDataUsers()
      this.$router.push(`?search=${form}`)
      // this.changePage(1)
    },
    handleLogout() {
      this.logout()
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
    linkProfile() {
      this.$router.push('/update-profile')
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    }
  },
  computed: {
    ...mapGetters(['getFullUserData', 'userData'])
  }
}
</script>

<style scoped>
.sidebar .title {
  padding: 10px 0;
  color: #7e98df;
}
.sidebar .profile-image {
  margin: 25px 0;
  cursor: pointer;
}
.sidebar .profile-image img {
  width: 82px;
  height: 82px;
  border-radius: 30px;
  margin: 0 0 10px 0;
}
.sidebar .profile-image h6 {
  color: #000;
}
.sidebar .profile-image p {
  font-size: 16px;
  color: #848484;
}
.sidebar .search {
  padding: 0 0 20px 0;
}
.sidebar .search .b-icon.bi {
  position: absolute;
  top: 14px;
  left: 25px;
  color: #848484;
}
.sidebar .search input {
  padding: 20px 35px;
  background: #fafafa;
  border-radius: 15px;
}
.sidebar .search p {
  font-size: 50px;
  font-weight: bold;
  color: #7e98df;
  position: absolute;
  top: -20px;
  right: 20px;
}
.sidebar .list-chatting {
  height: 300px;
  overflow: auto;
  padding: 20px 0;
}
.sidebar .list-chatting img {
  width: 64px;
  height: 64px;
  border-radius: 20px;
}
</style>
