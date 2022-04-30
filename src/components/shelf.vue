<template>
  <div id="app">
    <v-card class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card class="secondary" dark>
              <v-card-title class="text-h5">我的仓库</v-card-title>
              <v-card-subtitle
                >你的仓库中一共有{{ total }}件商品</v-card-subtitle
              >
               <v-card-actions>
                <v-btn color="error">查看所有未上架物品</v-btn>
                  <v-btn color="error">查看所有已上架物品</v-btn>
                <v-btn color="error"> 下架所有正在上架物品</v-btn>
                  <v-btn color="error">删除所有已售出物品</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col v-for="(item, $index) in list" :key="$index" cols="12">
            <v-card :color="color">
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
                <v-card-text>
                    商品状态(售卖中)
                </v-card-text>

                <v-card-actions>
                  <v-btn class="ml-2 mt-5 text-h10"> 查看商品信息 </v-btn>
                  <v-btn class="ml-2 mt-5 text-h10"> 修改商品信息 </v-btn>
                </v-card-actions>
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
      switch1: "下架",
      switch2: "上架",
      page: 1,
      list: [],
      color: "#FFFFFF",
      colorId: false,
      total: 0,
      // id: this.$store.state.auth.user.id,
      priceList: [],
      totalPrice: 0,
      totalNum: 0,
      repeate: false,
      user: this.$store.state.auth.user,
    };
  },

  methods: {
    async infiniteHandler($state) {
      console.log(this.user.id);
      await Order.loadOrders({
        limit: 4,
        page: this.page,
        id: this.user.id,
      })
        .then((res) => {
          if (res.data.Orders.length > 0) {
            this.page += 1;
            this.list.push(...res.data.Orders);
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
    // 计算数量
    income(price, valueIndex) {
      console.log(this.priceList);
      const infor = this.priceList.forEach((element) => {
        if ((element.valueIndex = valueIndex)) {
          console.log("已经加入了购物车");
        } else {
          return "没有加入购物车";
        }
      });
      this.priceList.push({ price, valueIndex });
      this.totalPrice = this.priceList.reduce((total, item) => {
        total += item.price;
        return total;
      }, 0);
      this.totalNum = this.priceList.length;
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
    async payOrder() {
      await Order.pay()
        .then((res) => {
          console.log(res);
          window.location.href = res.data.result;
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
  },

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