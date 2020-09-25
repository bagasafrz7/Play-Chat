<template>
  <div class="sidebar">
    <b-row class="title">
      <b-col cols="12" md="12" sm="12" class="text-center">
        <h4>@user_name</h4>
        <b-icon icon="arrow-left-circle" @click="back"></b-icon>
      </b-col>
    </b-row>
    <b-form>
      <b-row>
        <b-col cols="12" md="12" sm="12" class="text-center">
          <div class="profile-image">
            <img src="../../assets/img/luis.jpg" alt="" srcset="" />
            <p class="h4 mb-2" style="color: grey">
              <!-- @change="browse" -->
              <input v-if="isEdit === true" type="file" />
              <br v-if="isEdit === true" />
              <b-icon
                icon="pencil"
                class="mx-1"
                style="cursor: pointer"
                @click="editImg"
              ></b-icon>
              <span @click="editImg" style="cursor: pointer" class=""
                >Edit</span
              >
            </p>
            <!-- <h6>User Fullname</h6> -->
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                required
                placeholder="Enter Your Full Name"
              ></b-form-input>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="12" sm="12">
          <div class="detail-profile">
            <h6>Account</h6>
            <!-- <p>user_phone</p> -->
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                id="input-1"
                required
                placeholder="Enter Your Number Phone"
              ></b-form-input>
            </b-form-group>
            <hr />
            <!-- <h6>@user_name</h6> -->
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-input
                id="input-3"
                required
                placeholder="Enter Your User Name"
              ></b-form-input>
            </b-form-group>
            <p>Username</p>
            <hr />
            <!-- <h6>user_bio</h6> -->
            <b-form-group id="input-group-4" label-for="input-4">
              <b-form-input
                id="input-4"
                required
                placeholder="Enter Your Bio"
              ></b-form-input>
            </b-form-group>
            <p>Bio</p>
            <button class="btn-update">Update Your Profile</button>
          </div>
        </b-col>
      </b-row>
    </b-form>
    <b-row>
      <b-col cols="12" md="12" sm="12">
        <div class="settings">
          <h5>Setting</h5>
          <b-row>
            <b-col cols="1" md="1" sm="1">
              <b-icon icon="bell" @click="fitur"></b-icon>
              <b-icon icon="lock" @click="fitur"></b-icon>
              <b-icon icon="graph-up" @click="fitur"></b-icon>
              <b-icon icon="chat-left-text" @click="fitur"></b-icon>
              <b-icon icon="laptop" @click="fitur"></b-icon>
            </b-col>
            <b-col cols="10" md="10" sm="10">
              <p @click="fitur">Notification and Sounds</p>
              <p @click="fitur">Privacy and Security</p>
              <p @click="fitur">Data and Stronge</p>
              <p @click="fitur">Chat settings</p>
              <p @click="fitur">Devices</p>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'updateProfile',
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    back() {
      this.$router.push('/')
    },
    editImg() {
      if (this.isEdit === false) {
        this.isEdit = true
      } else {
        this.isEdit = false
      }
    },
    browse(event) {
      this.form.image = event.target.files[0]
      const data = new FormData()
      data.append('image', this.form.image)
      this.profilePicture([data, this.userData.user_id])
      // this.profilePicture([this.form.image, this.userData.user_id])
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
    }
  }
}
</script>

<style scoped>
.form-control {
  width: 80%;
  margin: 0 0 0 10px;
  border: none;
  /* border-bottom: 1px solid black; */
  /* border-radius: 0; */
  outline: none;
}
.sidebar {
  overflow: auto;
  height: 650px;
}
.sidebar .title {
  padding: 10px 0;
  color: #7e98df;
}
.sidebar .profile-image {
  margin: 25px 0;
}
.sidebar .title .b-icon.bi {
  color: #7e98df;
  font-size: 24px;
  position: absolute;
  top: 5px;
  left: 20px;
  cursor: pointer;
}
.sidebar .profile-image img {
  width: 82px;
  height: 82px;
  border-radius: 30px;
  margin: 0 0 25px 0;
}
.sidebar .profile-image h6 {
  color: #000;
}
.sidebar .profile-image p {
  font-size: 16px;
  color: #848484;
}
.sidebar .detail-profile .btn-update {
  width: 100%;
  background: #7e98df;
  border: none;
  border: 1px solid #7e98df;
  padding: 10px 20px;
  color: #fff;
  margin-left: -10px;
}
.sidebar .settings {
  margin: 10px 0;
}
.sidebar .settings h5 {
  margin: 5px 0 10px 0;
}
.sidebar .settings .b-icon.bi {
  color: #000;
  font-size: 24px;
  margin: 0 0 13px 0;
  cursor: pointer;
}
.sidebar .settings p {
  cursor: pointer;
  margin-left: 10px;
}
</style>
