<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col cols="3" md="3" sm="3" class="main-sidebar">
          <updateProfile />
        </b-col>
        <b-col cols="9" md="9" sm="9">
          <MainChat />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import updateProfile from '../components/_module/updateProfile'
import MainChat from '../components/_base/MainChat'

export default {
  name: 'ProfileUser',
  data() {
    return {}
  },
  components: {
    updateProfile,
    MainChat
  }
}
</script>
