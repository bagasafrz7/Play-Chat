<template>
  <div>
    <main>
      <b-container>
        <b-row>
          <b-col cols="12" md="12" sm="12">
            <div class="main-login">
              <h3>Forgot Password</h3>
              <b-icon icon="arrow-left-circle" @click="back"></b-icon>
              <!-- <b-col cols="11" md="11" sm="11">
                  <h3>Register</h3>
              </b-col>-->
              <h6>You'll get messages soon on your e-mail</h6>
              <b-form>
                <b-form-group id="input-group-1" label="Email" label-for="input-1">
                  <b-form-input id="input-1" type="email" required placeholder="Enter Your Email"></b-form-input>
                </b-form-group>

                <b-button type="submit" class="btn-login" variant="primary">Send</b-button>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {}
  },
  methods: {
    back() {
      this.$router.push('/login')
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
  padding: 25px 50px 300px 50px;
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
</style>
