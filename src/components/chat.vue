<template>

    <!-- <v-col cols="12" md="1">
          <SideBar />
        </v-col> -->
    <!-- <v-col cols="12" md="3">
          <Firends></Firends>
        </v-col> -->
    <MainChat></MainChat>

    <!-- <Infor></Infor> -->

</template>
<script>
import SideBar from "./siderBar.vue";
import MainChat from "./MainChat.vue";
import Firends from "./firends.vue";
import Infor from "./Infor.vue";

export default {
  data() {
    return {};
  },

  components: {
    SideBar,
    MainChat,
    Firends,
    Infor,
  },
};
</script>
<style scoped>
</style>