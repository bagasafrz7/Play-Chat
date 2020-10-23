<template>
  <div>
    <main>
      <b-container>
        <b-row>
          <b-col cols="12" md="12" sm="12">
            <div class="main-login">
              <h3>Login</h3>
              <h6>Hi, Wellcome back!</h6>
              <b-form @submit.prevent="onSubmit">
                <b-form-group
                  id="input-group-1"
                  label="Email"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    type="email"
                    v-model="form.user_email"
                    required
                    placeholder="Enter Your Email"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Password"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    type="password"
                    v-model="form.user_password"
                    required
                    placeholder="Enter Your Password"
                  ></b-form-input>
                </b-form-group>

                <router-link to="/forgot-password">
                  <p class="text-right">Forgot password?</p>
                </router-link>

                <b-button type="submit" class="btn-login" variant="primary"
                  >Login</b-button
                >
                <b-row class="my-4">
                  <b-col cols="4" md="4" sm="4">
                    <hr />
                  </b-col>
                  <b-col cols="4" md="4" sm="4" class="text-center">
                    <span>Login with</span>
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
                  >Google</b-button
                >
                <p class="text-center my-2">
                  Don't have an account?
                  <router-link to="/register">Sign Up</router-link>
                </p>
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
  name: 'Login',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    makeToast(variant = '') {
      this.$bvToast.toast(`${this.inMsg}`, {
        title: `Notice! ${'' || ''}`,
        variant: variant,
        solid: true
      })
    },
    onSubmit() {
      // console.log(this.form)
      this.login(this.form)
        .then((result) => {
          // console.log(result)
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: result.msg,
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            this.$router.push('/')
          }, 1000)
        })
        .catch((error) => {
          // this.inMsg = error.data.msg
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: error.data.msg,
            showConfirmButton: false,
            timer: 1500
          })
          // this.makeToast(this.inMsg)
          // console.log(error)
        })
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

@media (max-width: 768px) {
  .main-login {
    width: 75%;
  }
}
@media (max-width: 576px) {
  .main-login {
    width: 100%;
  }
}
</style>
