<template>
  <div id="app">
    <v-card class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-card-title class="text-h5"> 商品 </v-card-title>
              <v-card-subtitle
                >你的购物车中一共有{{ total }}件商品</v-card-subtitle
              >
              <v-card-actions>
                <v-btn color="error" @click="clearOrders">清空购物车列表</v-btn>
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
                >名称:{{item.productId[0].title}}</v-card-text>
                <v-card-text class="text-h10"
                  >价格:{{ item.productId[0].price }}元</v-card-text
                >
                 
                 <v-card-text class="text-h10" 
                  >
                  <span v-if="item.productId[0].condition=1">在售状态:未出售</span>
                  <span v-else>在售状态:已出售</span>
                  </v-card-text
                >
                <div>
                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5 text-h10"
                      @click="deleteItem(item._id)"
                    >
                      删除商品
                    </v-btn></v-card-actions
                  >
                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5 text-h10"
                      @click="income(item.productId[0].price, $index, item)"
                      :disabled="item.btn"
                    >
                      加入结算
                    </v-btn></v-card-actions
                  >
                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5 text-h10"
                      @click="cancleIncome($index, item)"
                    >
                      取消结算
                    </v-btn></v-card-actions
                  >
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-footer bottom fixed padless>
          <v-row>
            <v-col cols="12">
              <v-card>
                <div
                  class="d-flex flex-no-wrap justify-space-between align-center"
                >
                  <v-card-text class="text-h10"
                    >选中商品{{ totalNum }}</v-card-text
                  >
                  <v-card-text class="text-h10"
                    >总价{{ totalPrice }}</v-card-text
                  >
                  <v-card-actions>
                    <v-btn class="ml-2 mt-5 text-h10 error" @click="payOrder">
                      结算
                    </v-btn></v-card-actions
                  >
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-footer>
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
      OrderId: "",
      shopList: []
    };
  },

  methods: {
    async infiniteHandler($state) {
      await Order.loadOrders({
        limit: 4,
        page: this.page,
        id: this.user.id,
        payed: false,
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
    sum() {
      this.totalPrice = this.priceList.reduce((total, item) => {
        total += item.price;
        return total;
      }, 0);
      this.totalNum = this.priceList.length;
    },
    // 计算数量
    income(price, valueIndex, item) {
      item.color = "grey";
      item.btn = true;
      this.priceList.push({ price, valueIndex });
      this.shopList.push(item._id);
      this.priceList.forEach((element) => {
        if (element.valueIndex === valueIndex) {
          console.log("已经加入了购物车");
        } else {
          console.log("加入了购物车");
        }
      });
      this.sum();
    },
    cancleIncome(valueIndex, item) {
      item.color = "";
      item.btn = false;
      this.priceList.forEach((element) => {
        if (element.valueIndex === valueIndex) {
          this.priceList.splice(valueIndex, 1);
          console.log("已经取消了购物车");
        } else {
          console.log("未加入了购物车");
        }
        this.sum();
      });
    },

    async deleteItem(id) {
      await this.$store
        .dispatch("DELETE_COUNT",this.$store.state.auth.count)
        .catch((err) => console.log(err));
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
      await Order.payOrder({ userId: this.user, products: this.shopList })
        .then((res) => {
          console.log(this.shopList)
          this.OrderId = res.data._id;
        })
        .catch((err) => {
          console.log(err);
        });
      await Order.pay({
        totalPrice: this.totalPrice,
        OrderId: this.OrderId,
        priceList: this.priceList,
      })
        .then((res) => {
          window.location.href = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async clearOrders() {

      await this.$store
        .dispatch("clearCount")
        .catch((err) => console.log(err));
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