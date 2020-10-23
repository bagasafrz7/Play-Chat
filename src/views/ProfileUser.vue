<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="5" lg="4" xl="3" class="main-sidebar">
          <updateProfile />
        </b-col>
        <b-col cols="12" md="7" lg="8" xl="9">
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
