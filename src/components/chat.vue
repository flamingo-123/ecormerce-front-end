<template>
  <v-app id="app">
    <v-container fluid>
      <v-row no-gutters>
        <!-- <v-col cols="12" md="1">
          <SideBar />
        </v-col> -->
        <v-col cols="12" md="3">
          <Firends></Firends>
        </v-col>
        <v-col cols="12" md="6">
          <MainChat></MainChat>
        </v-col>
        <Infor></Infor>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import SideBar from "./siderBar.vue";
import MainChat from "./MainChat.vue";
import Firends from "./firends.vue";
import Infor from "./Infor.vue";

export default {
  data() {
    return {
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: "Ali Connors",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: "me, Scrott, Jennifer",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
          title: "Sandra Adams",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?",
          title: "Trevor Hansen",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
          title: "Britta Holt",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: "Connors",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: " Jennifer",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
          title: "Sandra ",
        },
      ],
    };
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