<template>
  <div class="mx-3">
    <h2 class="mt-2 grey--text">热门推荐</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" :key="item.id" v-for="item in items">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
              <v-img height="250" :src="item.img"></v-img>
              <v-card-title class="subtitle-2"> {{ item.title }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                  <div class="grey--text ms-4">4.5 (413)</div>
                </v-row>
                <div class="my-4 text-subtitle-1">{{ item.price }}￥</div>
                <div class="my-4 text-subtitle-1">{{ item.desc }}</div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  elevation="2"
                  text
                  small
                  color="primary"
                  @click="change(item._id)"
                >
                  加入购物车</v-btn
                >

                <v-btn elevation="2" text small color="primary">
                  买卖聊天</v-btn
                >

                <v-btn elevation="2" text small color="primary"   @click="addCollect(item._id)">
                  加入收藏</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="max-width">
      <v-row justify="center">
        <v-col cols="8">
          <v-pagination
            v-model="page"
            class="my-4"
            :total-visible="10"
            :length="count"
            @input="loadProduct"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="show" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> 是否加入购物车? </v-card-title>
        <v-card-text> 加入购物车后可以在订单信息中查看和付款。 </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="show = false">
            取消
          </v-btn>
          <v-btn color="green darken-1" text @click="createOrders">
            加入购物车
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      <v-dialog v-model="warn" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> 已经加入了购物车 </v-card-title>
        <v-card-text> 请不要反复加入 </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="warn = false">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import Product from "../../services/product";
import Order from "../../services/cart";
import Shelf from "../../services/shelf";

export default {
  data() {
    return {
      page: 1,
      items: [],
      count: 0,
      show: false,
      user: this.$store.state.auth.user,
      productId: "",
      warn:false
    };
  },
  created() {
    this.loadProduct();
  },
  methods: {
    async loadProduct() {
      await Product.loadAllProduct({
        limit: 4,
        page: this.page,
        condition: 1,
      })
        .then((res) => {
          (this.items = res.data.data), (this.count = res.data.totalPage);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async createOrders() {
      if (this.user === null) {
        this.$router.push({ name: "SignIn" });
      }
      await this.$store
        .dispatch("count", this.$store.state.auth.count)
        .catch((err) => console.log(err));
        
      await Order.createOrder({
        userId: this.user.id,
        productId: this.productId,
        amount: "1",
      })
        .then((res) => {
          this.show = false;
        })
        .catch((err) => console.log(err));
    },
    async change(id) {
      this.productId = id;
      await Order.findOrder({
        userId: this.user.id,
        productId: this.productId,
      })
        .then((res) => {
          if (res.data != null) {
            this.warn=true;
          } else {
            this.show = true;
          }
        })
       .catch((err) => console.log(err));
    },
    async addCollect(id){
        await Shelf.addCollect({
            userId: this.user.id,
            collects:id
        }).then((res)=>{
          if(res.status=="201"){
             this.warn=true
          }
        }).catch((err)=>{
           console.log(err)
        })
    },
      
  },
};
</script>

<style></style>
