<template>
  <div id="app">
    <v-card class="mx-auto">
      <v-container>
        <v-row dense justify="end">
          <v-col v-for="(item, $index) in messages" :key="$index" cols="12">
            <v-card height="50" color="#00695C" max-width="300">
              {{ item.name }}:
              {{ item.message }}
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-footer app height="30" inset>
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
        ></v-text-field>
      </v-footer>
    </v-card>
    <!-- <infinite-loading @infinite="infiniteHandler"></infinite-loading> -->
  </div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
export default {
  data() {
    return {
      message: "",
      messages: [],
    };
  },
  created() {
     this.login()
     
  },
  mounted() {
    this.sockets.subscribe("connect",()=>{
      console.log("已连接")
    })
    this.sockets.subscribe("message", (data) => {
      this.messages = data.chats;
    });
  },
  methods: {
    login(){
      this.$socket.connect()
      this.$socket.emit('login',{name:"雷俊豪",UserId:"12345",OtherId:"23456"})
    },
    sendMessage() {
      this.$socket.emit("sendMessage", {
        name: "雷俊豪",
        message: this.message,
      });
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
  components: {
    InfiniteLoading,
  },
};
</script>
<style scoped>
</style>