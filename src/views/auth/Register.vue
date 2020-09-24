<template>
  <div>
    <main>
      <b-container>
        <b-row>
          <b-col cols="12" md="12" sm="12">
            <div class="main-login">
              <h3>Register</h3>
              <b-icon icon="arrow-left-circle" @click="back"></b-icon>
              <!-- <b-col cols="11" md="11" sm="11">
                  <h3>Register</h3>
              </b-col>-->
              <h6>Let's create you account</h6>
              <b-form @submit.prevent="postUser">
                <b-form-group id="input-group-3" label="Name" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    type="text"
                    v-model="form.user_fullname"
                    required
                    placeholder="Enter Your Full Name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-1" label="Email" label-for="input-1">
                  <b-form-input id="input-1" type="email" v-model="form.user_email" required placeholder="Enter Your Email"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    type="password"
                    v-model="form.user_password"
                    required
                    placeholder="Enter Your Password"
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" class="btn-login" variant="primary">Register</b-button>
                <b-row class="my-4">
                  <b-col cols="4" md="4" sm="4">
                    <hr />
                  </b-col>
                  <b-col cols="4" md="4" sm="4" class="text-center">
                    <span>Register with</span>
                  </b-col>
                  <b-col cols="4" md="4" sm="4">
                    <hr />
                  </b-col>
                </b-row>
                <b-button
                  type="button"
                  variant="primary"
                  @click="showMessageGoogle"
                  class="btn-google"
                >Google</b-button>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      inMsg: '',
      form: {
        user_fullname: '',
        user_email: '',
        user_password: ''
      }
    }
  },
  methods: {
    ...mapActions(['addUsers']),
    makeToast(variant = '') {
      this.$bvToast.toast(`${this.inMsg}`, {
        title: `Notice! ${'' || ''}`,
        variant: variant,
        solid: true
      })
    },
    postUser() {
      this.addUsers(this.form)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          this.inMsg = error.data.msg
          this.makeToast(this.inMsg)
          // console.log(error.data.msg)
        })
    },
    back() {
      this.$router.push('/login')
    },
    showMessageGoogle() {
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
main {
  background: #e5e5e5;
}
.main-login {
  width: 50%;
  background: #fff;
  margin: 50px auto 100px;
  padding: 25px 50px;
  border-radius: 30px;
}
.b-icon.bi {
  color: #7e98df;
  font-size: 24px;
  position: absolute;
  top: 85px;
  cursor: pointer;
}
.main-login h3 {
  color: #7e98df;
  text-align: center;
}
.main-login h6 {
  color: #232323;
  margin: 20px 0;
}
label {
  color: #848484;
  margin-top: 25px;
}
.main-login .form-control {
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  outline: none;
}
.main-login .btn-login {
  width: 100%;
  padding: 10px 25px;
  border-radius: 25px;
  background: #7e98df;
  border: 1px solid #7e98df;
}
hr {
  background: #848484;
}
.main-login .btn-google {
  width: 100%;
  border-radius: 25px;
  padding: 10px 25px;
  border: 1px solid #7e98df;
  background: #fff;
  color: #7e98df;
}
</style>
