<template>
    <v-row>
      <v-col cols="12">
        <v-card
          class="pa-2"
          outlined
          tile
          height="82vh"
        >
         聊天内容
        </v-card>
        <v-row no-gutters>
          <v-col
            cols="12"
          >
            <v-card
              class="pa-2"
              outlined
              style="background-color: lightgrey;"
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
              style="height: 10vh;"
            >
            </v-text-field>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>


</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
export default {
  data() {
    return {
      user: this.$store.state.chat.name,
      message: "",
      messages: [],
      benched: 0,
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
      console.log("重新连接");
      this.$socket.emit("conect");
    },
    async message(res) {
      this.messages = res.chats;
      console.log(this.messages);
      console.log("接收数据", res);
    },
  },
  created() {},
  methods: {
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
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 50;
    },
  },
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