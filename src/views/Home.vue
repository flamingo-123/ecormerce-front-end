<template>
  <v-app app flat >
   <v-container fluid  class="py-0 fill-height"  >
    <v-app-bar  flat class="mt-4" elevation="24">
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
          <v-btn class="ma-1" color="primary" dark>
            <v-menu color="primary">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on"> 我的商品 </v-btn>
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
          </v-btn>
        </v-col>

        <v-col cols="12" sm="1">
          <v-btn color="red" dark>
            <v-menu color="primary">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on"> 我的订单 </v-btn>
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
          </v-btn>
        </v-col>

        <v-col cols="12" sm="1">
          <v-btn color="red" dark>
            <v-menu color="primary">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on"> 登录 </v-btn>
              </template>
              <v-list rounded>
                <v-subheader>设置</v-subheader>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item
                    v-for="(item, i) in settings"
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
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
   </v-container>

    <!-- 侧边导出栏 -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      :style="{ background: $vuetify.theme.themes.dark.background }"
    >
      <v-treeview activatable :items="shops" class="dark--text"></v-treeview>
    </v-navigation-drawer>
    <v-main>
      <v-container :fluid="true">
        <div>
          <v-carousel v-model="model" cycle>
            <v-carousel-item v-for="(color, i) in colors" :key="i">
              <v-sheet height="100%" tile >
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
  data: () => ({
    model: 0,
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
      { text: "登录", icon: "mdi-clock", route: "/signin" },
      { text: "注册", icon: "mdi-account", route: "/signup" },
      { text: "聊天组件开发", icon: "mdi-flag", route: "/Chat" },
      { text: "后台设计", icon: "mdi-flag", route: "/BackEnd" },
    ],
    orderManage: [
      { text: "未付款订单", icon: "mdi-clock", route: "/cart" },
      { text: "已付款订单", icon: "mdi-account", route: "/" },
    ],
    itemManage: [
      { text: "上传商品", icon: "mdi-clock", route: "/upload" },
      { text: "我的商品", icon: "mdi-account", route: "/Shelf" },
    ],

    drawer: false,
    group: null,
    shops: [
      {
        id: 1,
        name: "电子产品 :",
        children: [
          { id: 2, name: "Calendar : app" },
          { id: 3, name: "Chrome : app" },
          { id: 4, name: "Webstorm : app" },
        ],
      },
      {
        id: 5,
        name: "书籍 :",
        children: [
          {
            id: 6,
            name: "vuetify :",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts" },
                  { id: 9, name: "bootstrap : ts" },
                ],
              },
            ],
          },
          {
            id: 10,
            name: "material2 :",
            children: [
              {
                id: 11,
                name: "src :",
                children: [
                  { id: 12, name: "v-btn : ts" },
                  { id: 13, name: "v-card : ts" },
                  { id: 14, name: "v-window : ts" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: "美食 :",
        children: [
          { id: 16, name: "October : pdf" },
          { id: 17, name: "November : pdf" },
          { id: 18, name: "Tutorial : html" },
        ],
      },
      {
        id: 19,
        name: "体育用品:",
        children: [
          {
            id: 20,
            name: "Tutorials :",
            children: [
              { id: 21, name: "Basic layouts : mp4" },
              { id: 22, name: "Advanced techniques : mp4" },
              { id: 23, name: "All about app : dir" },
            ],
          },
          { id: 24, name: "Intro : mov" },
          { id: 25, name: "Conference introduction : avi" },
        ],
      },
    ],
  }),
  components: {
    Commodity,
  },
  methods: {
    cart() {
      console.log("123");
      this.$router.push("/cart");
    },
  },
};
</script>
<style scoped>
.v-breadcrumbs >>> a {
  color: black;
}
</style>