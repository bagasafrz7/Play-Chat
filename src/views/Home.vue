<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="12" sm="12" class="main-sidebar">
          <Sidebar />
        </b-col>
        <!-- <b-col cols="9" md="9" sm="9">
          <MainChat />
        </b-col> -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Sidebar from '../components/_base/Sidebar'
// import MainChat from '../components/_base/MainChat'
export default {
  name: 'Home',
  components: {
    Sidebar
    // MainChat
  }
}
</script>

<style scoped>
/* .main-sidebar {
  border-right: 1px solid #e5e5e5;
} */
</style>
