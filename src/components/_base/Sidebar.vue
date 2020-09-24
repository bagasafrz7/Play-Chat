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
          <b-dropdown-item-button>
            <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
            Settings
          </b-dropdown-item-button>
          <b-dropdown-item-button>
            <b-icon icon="person" aria-hidden="true"></b-icon>
            Contacts
          </b-dropdown-item-button>
          <b-dropdown-item-button>
            <b-icon icon="telephone" aria-hidden="true"></b-icon>
            Calls
          </b-dropdown-item-button>
          <b-dropdown-item-button>
            <b-icon icon="bookmark" aria-hidden="true"></b-icon>
            Save Messages
          </b-dropdown-item-button>
          <b-dropdown-item-button>
            <b-icon icon="person-plus" aria-hidden="true"></b-icon>
            Invite Friends
          </b-dropdown-item-button>
          <b-dropdown-item-button>
            <b-icon icon="question-circle" aria-hidden="true"></b-icon>
            Play Chat FAQ
          </b-dropdown-item-button>
          <b-dropdown-item-button variant="danger">
            <b-icon icon="power" aria-hidden="true"></b-icon>
            Logout
          </b-dropdown-item-button>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="12" sm="12" class="text-center">
        <div class="profile-image" @click="linkProfile">
          <img src="../../assets/img/luis.jpg" alt="" srcset="" />
          <h6>User Fullname</h6>
          <p>@User Name</p>
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
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {}
  },
  methods: {
    linkProfile() {
      this.$router.push('/update-profile')
    }
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
