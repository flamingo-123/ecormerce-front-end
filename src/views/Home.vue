<template>
  <v-app app flat>
    <v-container fluid class="py-0 fill-height">
      <v-app-bar flat class="mt-4" elevation="24">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="3">
            <v-btn color="orange" outlined dark @click="drawer = true">
              旧淘
            </v-btn>
          </v-col>
          <v-col cols="12" sm="5">
            <v-text-field
              flat
              hide-details
              append-icon="mdi-magnify"
              placeholder="淘点喜欢的吧...."
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2">
            <v-menu color="primary">
              <template v-slot:activator="{ on, attrs }">
                <span
                  class="mx-5 mr-10"
                  style="cursor: pointer"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-store</v-icon>
                </span>
              </template>
              <v-list rounded>
                <v-subheader>商品管理</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item
                    v-for="(item, i) in itemManage"
                    :key="i"
                    :to="item.route"
                  >
                    <v-list-item-icon>
                      <v-icon class="black--text" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        class="black--text"
                        v-text="item.text"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-col>

          <v-col cols="12" sm="1">
            <v-menu color="primary">
              <template v-slot:activator="{ on, attrs }">
                <span
                  class="mx-5 mr-10"
                  style="cursor: pointer"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-badge
                    :content="$store.state.auth.count"
                    color="red"
                    :value="count"
                    overlap
                    offset-y="10"
                    offset-x="10"
                  >
                    <v-icon class="black--text">mdi-cart-outline</v-icon>
                  </v-badge>
                </span>
              </template>
              <v-list rounded>
                <v-subheader>订单管理</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item
                    v-for="(item, i) in orderManage"
                    :key="i"
                    :to="item.route"
                  >
                    <v-list-item-icon>
                      <v-icon class="black--text" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        class="black--text"
                        v-text="item.text"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="1">
            <v-menu color="primary">
              <template v-slot:activator="{ on, attrs }">
                <span
                  class="mx-5 mr-10"
                  style="cursor: pointer"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-account</v-icon>
                </span>
              </template>
              <v-list rounded align="center" justify="center" >
                 <v-avatar color="orange" size="36">
                    <span class="white--text text-h5">{{username}}</span>
                  </v-avatar>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item
                    v-for="(item, i) in settings"
                    :key="i"
                    :to="item.route"
                    v-show="!item.show"
                  >
                    <v-list-item-icon>
                      <v-icon class="black--text" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        class="black--text"
                        v-text="item.text"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="singOut">
                    <v-list-item-icon>
                      <v-icon class="black--text">mdi-logout-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="black--text"
                        >退出</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-app-bar>
    </v-container>
    <!-- 侧边导出栏 -->

    <v-main>
      <v-container :fluid="true">
        <div>
          <v-carousel v-model="model" cycle>
            <v-carousel-item v-for="(color, i) in colors" :key="i">
              <v-sheet height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <v-img :src="color.href" aspect-ratio="2"></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
        <div>
          <v-breadcrumbs :items="items">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item
                :to="{ name: 'categerioy', params: { type: item.text } }"
                :disabled="item.disabled"
              >
                {{ item.text.toUpperCase() }}
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
        </div>
      </v-container>
    </v-main>
    <Commodity />
  </v-app>
</template>
<script>
import Commodity from "../components/commodityCard.vue";
export default {
  data() {
    return {
      model: 0,
      bandge: false,
      count: this.$store.state.auth.count,
      username:this.$store.state.auth.user.username,
      colors: [
        {
          href: "http://localhost:3002/uploads/VHS-Scotch-tape-Sony-video-tape-1720227-wallhere.com.jpg",
        },
        {
          href: "http://localhost:3002/uploads/VHS-Scotch-tape-Sony-video-tape-1720227-wallhere.com.jpg",
        },
        {
          href: "http://localhost:3002/uploads/VHS-Scotch-tape-Sony-video-tape-1720227-wallhere.com.jpg",
        },
      ],
      page: 1,
      items: [
        {
          text: "商品分类",
          disabled: false,
          href: "breadcrumbs_dashboard",
        },
        {
          text: "美妆",
          disabled: false,
          route: "/signin",
        },
        {
          text: "电影",
          disabled: false,
          href: "breadcrumbs_link_2",
        },
        {
          text: "体育",
          disabled: false,
          href: "breadcrumbs_link_2",
        },
        {
          text: "图书",
          disabled: false,
          href: "breadcrumbs_link_2",
        },
        {
          text: "交通工具",
          disabled: false,
          href: "breadcrumbs_link_2",
        },
      ],
      selectedItem: 0,
      settings: [
        {
          text: "登录",
          icon: "mdi-clock",
          route: "/signin",
          show: this.$store.state.auth.isUserLoggedIn,
        },
        {
          text: "注册",
          icon: "mdi-account",
          route: "/signup",
          show: this.$store.state.auth.isUserLoggedIn,
        },
      ],
      orderManage: [
        { text: "未付款订单", icon: "mdi-archive-lock-open", route: "/cart" },
        { text: "已付款订单", icon: "mdi-archive-lock", route: "/payed" },
      ],
      itemManage: [
        { text: "上传商品", icon: "mdi-cloud-upload", route: "/upload" },
        { text: "我的商品", icon: "mdi-cart-arrow-down", route: "/myShop" },
        { text: "我的收藏", icon: "mdi-star-check-outline", route: "/Shelf" },
      ],
      drawer: false,
      group: null,
    };
  },
  components: {
    Commodity,
  },
  methods: {
    singOut() {
      this.$store.dispatch("signOut").catch((err) => {
        console.log(err);
      });
      this.$router.go(0);
    },
  },
};
</script>
<style scoped>
.v-breadcrumbs >>> a {
  color: black;
}
</style>