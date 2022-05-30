<template>
  <v-app app flat>
    <v-container fluid class="py-0 fill-height">
      <v-app-bar flat class="mt-4" elevation="24">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="3">
            <v-btn color="orange" outlined dark @click="drawer = true">
              校园二手交易平台
            </v-btn>
          </v-col>
          <v-col cols="12" sm="5">
            <v-autocomplete
              :loading="loading"
              :items="states"
              :search-input.sync="search"
              append-icon="mdi-magnify"
              class="mx-4"
              flat
              hide-no-data
              hide-details
              placeholder="淘点喜欢的吧...."
              solo-inverted
              item-text="title"
              item-value="id"
              @change="search = ''"
            >
              <template v-slot:item="{ item }">
                <v-btn text :to="`/product/${item._id}`">{{
                  item.title
                }}</v-btn>
              </template>
            </v-autocomplete>
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
              <v-list rounded align="center" justify="center">
                <v-avatar color="orange" size="36" v-show="show">
                  <span class="white--text text-h5" >{{ username }}</span>
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
          <v-card>
            <v-tabs color="orange accent-4" left>
              <v-tab
                v-for="(item, i) in items"
                :key="i"
                @click="get(item.text)"
                >{{ item.text.toUpperCase() }}</v-tab
              >
              <v-tab-item v-for="n in items.length" :key="n">
                <v-container fluid>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="3"
                      v-for="(item, i) in items1"
                      :key="i"
                    >
                      <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card
                          :elevation="hover ? 16 : 2"
                          :class="{ 'on-hover': hover }"
                        >
                          <router-link :to="`/product/${item._id}`">
                            <v-img :src="item.img" height="250" />
                          </router-link>
                          <v-card-title class="subtitle-2">
                            {{ item.title }}</v-card-title
                          >
                          <v-card-text>
                            <div class="my-4 text-subtitle-1">
                              {{ item.userId.schoolName }}
                            </div>
                            <div class="my-4 text-subtitle-1">
                              {{ item.price }}元
                            </div>
                          </v-card-text>
                          <v-divider class="mx-4"></v-divider>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </div>
      </v-container>
    </v-main>
    <Commodity />
  </v-app>
</template>
<script>
import Product from "../../services/product";
import Commodity from "../components/commodityCard.vue";
export default {
  data() {
    return {
      model: 0,
      bandge: false,
      username: "",
      count: "",
      // count: this.$store.state.auth.count,
      // username:this.$store.state.auth.user.count,
      show: false,
      loading: false,
      products: [],
      search: null,
      select: null,
      states: [],
      items1: [],
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
          text: "最新商品",
        },
        {
          text: "图书",
        },
        {
          text: "体育",
        },
        {
          text: "服饰",
        },
        {
          text: "电子产品",
         
        },
          {
          text: "交通工具",
         
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
  created() {
    this.SearchTitle();
    this.getAll();
  },
  mounted () {
    this.show = this.$store.state.auth.isUserLoggedIn;
    this.count = this.$store.state.auth.count;
    this.username = this.$store.state.auth.user.username;;
  },
  watch: {
    count:function (newQuestion, oldQuestion) {
     this.count= this.$store.state.auth.count
    },
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    singOut() {
      this.$store.dispatch("signOut").catch((err) => {
        console.log(err);
      });
      this.$router.go(0);
    },
    async SearchTitle() {
      await Product.getProductTitle()
        .then((res) => {
          this.products.push(...res.data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.states = this.products.filter((e) => {
          return (
            (e.title || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
          );
        });
        this.loading = false;
      }, 500);
    },
    async getAll() {
      await Product.newProduct({
        data: {
          status: 1,
          condition: 1,
        },
      })
        .then((res) => {
          this.items1.push(...res.data.products);
          console.log(this.items1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async get(data) {
      this.items1 = [];
      if (data == "最新商品") {
        data = { status: 1, condition: 1 };
      } else {
        data = {
          categories: data,
          status: 1,
          condition: 1,
        };
      }
      await Product.newProduct({
        data,
      })
        .then((res) => {
          this.items1.push(...res.data.products);
          console.log(this.items1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    Commodity,
  },
};
</script>
<style scoped>
.v-breadcrumbs >>> a {
  color: black;
}
</style>