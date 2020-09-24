<template>
  <div>
    <!-- <b-container fluid> -->
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
            <img src="../../assets/img/luis.jpg" alt="" srcset="" />
          </b-col>
          <b-col cols="10" md="10" sm="10">
            <h6>User FullName</h6>
            <p>Online</p>
          </b-col>
          <b-col cols="1" md="1" sm="1">
            <b-icon icon="menu-button-wide"></b-icon>
          </b-col>
        </b-row>
      </header>
      <div class="main-chat">
        <b-row>
          <b-col cols="12" md="12" sm="12" class="text-left">
            <div class="sender">
              <b-row>
                <b-col cols="1" sm="1" md="1">
                  <img src="../../assets/img/luis.jpg" alt="" srcset="" />
                </b-col>
                <b-col cols="11" sm="11" md="11">
                  <div class="content-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptate debitis corrupti voluptatum, iste in perferendis
                      enim temporibus harum error nihil.
                    </p>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="12" md="12" sm="12" class="tex-right">
            <div class="receiver">
              <b-row class="float-right">
                <b-col cols="1" sm="1" md="1">
                  <img src="../../assets/img/luis.jpg" alt="" srcset="" />
                </b-col>
                <b-col cols="11" sm="11" md="11">
                  <div class="content-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptate debitis corrupti voluptatum, iste in perferendis
                      enim temporibus harum error nihil.
                    </p>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="12" md="12" sm="12" class="text-left">
            <div class="sender">
              <b-row>
                <b-col cols="1" sm="1" md="1">
                  <img src="../../assets/img/luis.jpg" alt="" srcset="" />
                </b-col>
                <b-col cols="11" sm="11" md="11">
                  <div class="content-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptate debitis corrupti voluptatum, iste in perferendis
                      enim temporibus harum error nihil.
                    </p>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="12" md="12" sm="12" class="tex-right">
            <div class="receiver">
              <b-row class="float-right">
                <b-col cols="1" sm="1" md="1">
                  <img src="../../assets/img/luis.jpg" alt="" srcset="" />
                </b-col>
                <b-col cols="11" sm="11" md="11">
                  <div class="content-chat">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptate debitis corrupti voluptatum, iste in perferendis
                      enim temporibus harum error nihil.
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
              <input type="text" placeholder="Type your message" />
            </div>
          </b-col>
        </b-row>
      </footer>
    </div>
    <!-- </b-container> -->
  </div>
</template>

<script>
export default {
  name: 'MainChat',
  data() {
    return {
      chat: true
    }
  }
}
</script>

<style scoped>
.no-chat {
  background: #fafafa;
  height: 650px;
  overflow: auto;
}
.chat .no-chat p {
  text-align: center;
  line-height: 500px;
}
header {
  background: #fff;
  padding: 20px;
}
header img {
  width: 64px;
  height: 64px;
  border-radius: 20px;
}
header p {
  color: #7e98df;
}
header .b-icon.bi {
  color: #7e98df;
  font-size: 30px;
  margin: 20px 0;
}
.in-chat .main-chat {
  background: #fafafa;
  height: 450px;
  overflow: auto;
  padding: 20px 40px;
}
.in-chat .main-chat .sender {
  margin: 20px 0;
}
.in-chat .main-chat .sender img {
  width: 54px;
  height: 54px;
  border-radius: 20px;
}
.in-chat .main-chat .sender .content-chat {
  width: 40%;
  background: #7e98df;
  padding: 20px 15px;
  border-radius: 10px 35px 35px 35px;
}
.in-chat .main-chat .sender .content-chat p {
  color: #fff;
}
.in-chat .main-chat .receiver img {
  width: 54px;
  height: 54px;
  border-radius: 20px;
}
.in-chat .main-chat .receiver .content-chat {
  width: 40%;
  background: #7e98df;
  padding: 20px 15px;
  border-radius: 10px 35px 35px 35px;
}
.in-chat .main-chat .receiver .content-chat p {
  color: #fff;
}
footer .send-chat input {
  width: 100%;
  padding: 20px 25px;
  border: 1px solid #fafafa;
  border-radius: 15px;
  background: #fafafa;
  outline: none;
}
footer .send-chat {
  padding: 10px 25px;
}
footer .send-chat .b-icon.bi.plus {
  position: absolute;
  top: 25px;
  right: 200px;
  font-size: 32px;
  color: #7e98df;
}
footer .send-chat .b-icon.bi.emoticon {
  position: absolute;
  top: 25px;
  right: 150px;
  font-size: 32px;
  color: #7e98df;
}
footer .send-chat .b-icon.bi.picture {
  position: absolute;
  top: 25px;
  right: 100px;
  font-size: 32px;
  color: #7e98df;
}
</style>
