<template>
  <div id="app">
    <v-card class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-card-title class="text-h5"> 商品 </v-card-title>
              <v-card-subtitle
                >你一共购买{{ total }}件商品</v-card-subtitle
              >
              <v-card-actions>
                <v-btn color="error" @click="clearOrders">清空已购买商品的列表</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col v-for="(item, $index) in list" :key="$index" cols="12">
            <v-card :color="list[$index].color">
              <div
                class="d-flex flex-no-wrap justify-space-between align-center"
              >
                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="item.productId[0].img"></v-img>
                </v-avatar>
                <v-card-text
                  class="text-h10"
                  v-text="item.productId[0].title"
                ></v-card-text>
                <v-card-text class="text-h10"
                  >价格{{ item.productId[0].price }}元</v-card-text
                >
                <div>
                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5 text-h10"
                      @click="deleteItem(item._id)"
                    >
                      删除结算商品
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
    <div></div>
  </div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
import Order from "../../services/cart";
export default {
  data() {
    return {
      page: 1,
      list: [],
      color: "#FFFFFF",
      colorId: false,
      total: 0,
      priceList: [],
      totalPrice: 0,
      totalNum: 0,
      repeate: false,
      user: this.$store.state.auth.user,
    };
  },

  methods: {
    async infiniteHandler($state) {
      await Order.loadOrders({
        limit: 4,
        page: this.page,
        id: this.user.id,
        payed:true
      })
        .then((res) => {
          if (res.data.Orders.length > 0) {
            this.page += 1;
            this.list.push(...res.data.Orders);
            this.list.forEach((element) => {
              element.btn = false;
              element.color = "";
            });
            this.total = res.data.count;
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          console.log(err);
         });
    },
    async clearOrders() {
      await Order.clearOrder()
        .then((res) => {
          (this.list = []),
          (this.priceList = []),
          (this.totalPrice = 0),
          (this.totalNum = 0),
          (this.total = 0);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteItem(id) {
      await Order.deleteOrders({
        id: id,
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
</style>