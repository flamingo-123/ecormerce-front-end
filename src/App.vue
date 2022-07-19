<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template> 
<script>
import NavBar from "./components/commodityCard.vue";
export default {
  name: "App",
  data: () => ({}),
  components: {
    NavBar,
  },
};
</script>
