<template>
  <div id="app">
    <v-app id="app" app>
      <v-container class="fill-height">
        <v-row class="fill-height pb-14" align="end">
          <v-col>
            <div
              v-for="(item, index) in items"
              :key="index"
              :class="[
                'd-flex flex-row align-center my-2',
                item.user == username ? 'justify-end' : null,
              ]"
            >
              <span v-if="item.user == username" class="blue--text mr-3">{{
                item.message
              }}</span>
              <v-avatar
                :color="item.user == username ? 'indigo' : 'red'"
                size="36"
              >
                <span class="white--text">{{ item.user }}</span>
              </v-avatar>
              <span v-if="item.user != username" class="blue--text ml-3">{{
                item.message
              }}</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- <v-footer fixed>
        <v-container class="ma-0 pa-0">
          <v-row no-gutters>
            <v-col cols="12">
              <v-card
                class="pa-2"
                outlined
                style="background-color: lightgrey"
                tile
              >
                <v-text-field
                  v-model="message"
                  append-icon="mdi-emoticon"
                  :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
                  filled
                  clear-icon="mdi-close-circle"
                  clearable
                  label="请输入信息！"
                  type="text"
                  @click:append-outer="sendMessage"
                  @click:clear="clearMessage"
                  @keypress.enter="sendMessage"
                >
                </v-text-field>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-footer> -->
      <v-footer fixed>
        <v-container class="ma-0 pa-0">
          <v-row no-gutters>
            <v-col>
              <div class="d-flex flex-row align-center">
                <v-text-field
                  v-model="message"
                  placeholder="Type Something"
                  @keypress.enter="sendMessage"
                ></v-text-field>
                <v-btn icon class="ml-4" @click="sendMessage"
                  ><v-icon>mdi-send</v-icon></v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
import Chat from "../../services/chat";
export default {
  data() {
    return {
      message: "",
      messages: [],
      benched: 0,
      username: this.$store.state.auth.user.username,
      items: [],
    };
  },
  mounted() {
    this.$socket.open();
  },
  sockets: {
    connect: function () {
      console.log("socket 连接成功");
    },
    disconnect: function () {
      alert("断开连接");
    },
    reconnect: function () {
      this.$socket.emit("conect");
    },
    message:function(data){
      console.log(data)
    }
  },
  created() {
    this.getChat();
  },
  methods: {
    async getChat() {
      await Chat.getChats({
        one: this.username,
        two: this.$route.params.username.username,
      })
        .then((res) => {
          this.items.push(...res.data[0].chats);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendMessage() {
      this.$socket.emit("sendMessage", {
        one: this.username,
        two: this.$route.params.username.username,
        chats: { user: this.username, message: this.message },
      });
      this.items.push({ user: this.username, message: this.message });
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
  },
  watch: {},
  beforeDestroy() {
    this.$socket.close();
  },

  components: {
    InfiniteLoading,
  },
};
</script>

<style>
</style>