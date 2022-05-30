<template>
  <div id="app">
    <v-card class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-card-title class="text-h5"> 商品 </v-card-title>
              <v-card-subtitle
                >你一共收藏了{{ total }}件商品</v-card-subtitle
              >
              <v-card-actions>
                <v-btn color="error" @click="clearCollects">清空收藏列表</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col v-for="(item, $index) in list" :key="$index" cols="12">
            <v-card :color="list[$index].color">
              <div
                class="d-flex flex-no-wrap justify-space-between align-center"
              >
                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="item.noteDocs1[0].img"></v-img>
                </v-avatar>
                <v-card-text
                  class="text-h10"
                >名称: {{item.noteDocs1[0].title}}</v-card-text>
                <v-card-text class="text-h10"
                  >价格:{{ item.noteDocs1[0].price }}元</v-card-text
                >
                 <v-card-text class="text-h10" 
                  >
                  <span v-if="item.noteDocs1[0].condition=1">在售状态:未出售</span>
                  <span v-else-if="item.noteDocs1[0].condition=2">在售状态:已出售</span>
                  <span v-else-if="item.noteDocs1[0].condition=3">在售状态:已下架</span>
                  <span v-else>在售状态:商品已删除</span>
                  </v-card-text
                >
                <div>
                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5 text-h10"
                      @click="clearCollect(item.noteDocs1[0]._id)"
                    >
                      删除收藏的商品
                    </v-btn></v-card-actions
                  >
                   <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5 text-h10"
                     @click="createOrders(item.nid)"
                    >
                      商品加入购物车
                    </v-btn></v-card-actions
                  >
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    <v-btn class="mx-2" fab dark large color="purple" id="bottom" @click="home">
          首页
        </v-btn>
  </div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
import Shelf from "../../services/shelf";
import Product from "../../services/product";
import Order from "../../services/cart";
export default {
  data() {
    return {
      page: 1,
      list: [],
      color: "#FFFFFF",
      colorId: false,
      total: 0,
      repeate: false,
      user: this.$store.state.auth.user,
      warn:false
    };
  },

  methods: {
       home(){
        this.$router.push({ name: "Home" });
      },
    async infiniteHandler($state) {
      await  Shelf.getCollects({
        limit: 4,
        page: this.page,
        id: this.user.id,
      })
        .then((res) => {
          console.log(res)
          if (res.data.length > 0) {
            this.page += 1;
            this.list.push(...res.data);
            this.list.forEach((element) => {
              element.btn = false;
              element.color = "";
            });
            this.total = res.data.length;
         
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
  
    async clearCollect(id) {
      await Shelf.clearCollect({
        userId: this.user.id,
        collect: id,
      })
        .then((res) => {
          this.page = 1;
          this.list = [];
          this.infiniteHandler();
        })
        .catch((err) => {
          console.log(err);
        });
    },

   async clearCollects(){
        await Shelf.clearCollects({
            userId: this.user.id,
            collects:[]
        }).then((res)=>{
           this.list = [];
        }).catch((err)=>{
          console.log("123")
           this.warn=true
        })
    },

     async createOrders(id) {
      if (this.user === null) {
        this.$router.push({ name: "SignIn" });
      }
      await this.$store
        .dispatch("count", this.$store.state.auth.count)
        .catch((err) => console.log(err));

      await Order.createOrder({
        userId: this.user.id,
        productId: id,
        amount: "1",
      })
        .then((res) => {
          console.log(res)
          this.warn=true
        })
        .catch((err) => console.log(err));
    },
  },
  watch: {},
  components: {
    InfiniteLoading,
  },
};
</script>
<style scoped>
#top {
  position: fixed;
  bottom: 0px;
}
#bottom {
  position: fixed;
  right:0px;
  bottom: 0px;
}
</style>