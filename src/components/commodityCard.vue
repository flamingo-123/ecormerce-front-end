<template>
  <div class="mx-3">
    <v-container fluid>
      <v-card>
        <v-row>
          <v-col cols="12" sm="5">
            <v-btn color="orange"> 随便逛逛 </v-btn>
          </v-col>
          <v-col cols="12" sm="1">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark color="primary" v-bind="attrs" v-on="on">
                  选择价格
                </v-btn>
              </template>
              <v-list>
                <v-range-slider
                  vertical
                  v-model="range"
                  :max="max"
                  :min="min"
                  hide-details
                  class="justify-center"
                >
                    <template v-slot:append>
                    <v-text-field
                      :value="range[1]"
                      single-line
                      type="number"
                      style="width: 60px"
                      @change="$set(range, 1, $event)"
                    ></v-text-field>
                  </template>
                  <template v-slot:prepend>
                    <v-text-field
                      :value="range[0]"
                      type="number"
                      style="width: 60px"
                      @change="$set(range, 0, $event)"
                    ></v-text-field>
                  </template>
              
                </v-range-slider>
              </v-list>
            </v-menu>
          </v-col>

          <v-col cols="12" sm="2">
            <v-select
              :items="items1"
              label="区域选择"
              dense
              outlined
              v-model="position"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="2">
            <v-select
              :items="items2"
              label="类别选择"
              dense
              outlined
              v-model="categories"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="1">
            <v-btn dark color="primary" @click="get"> 选择商品 </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="3" v-for="(item, $index) in items" :key="$index">
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
                    {{ item.schoolName }}
                  </div>
                  <div class="my-4 text-subtitle-1">{{ item.price }}元</div>
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

                  <v-btn
                    elevation="2"
                    text
                    small
                    color="primary"
                    @click="chat(item)"
                  >
                    买卖聊天</v-btn
                  >

                  <v-btn
                    elevation="2"
                    text
                    small
                    color="primary"
                    @click="addCollect(item._id)"
                  >
                    加入收藏</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-card>
      
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
    <v-dialog v-model="warn1" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> 已经加入了收藏 </v-card-title>
        <v-card-text> 请不要反复收藏 </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="warn = false">
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <infinite-loading @infinite="infiniteHandler" :identifier="infiniteId">
      <span slot="no-more"> 已经到底了 </span>
    </infinite-loading>
    
  </div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
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
      warn: false,
      warn1: false,
      min: '',
      max: '',
      range: [],
      search: false,
      infiniteId: +new Date(),
      items1: [
        { text: "本校" },
        { text: "全部" }
        ],
      items2: [
        {
          text: "全部",
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
          text: "美妆",
        },
        {
          text: "电子产品",
        },
        {
          text: "交通工具",
        },
      ],
      categories:"全部",
      position: "全部",
      schoolName:""
    };
  },
  created() {
    this.getPrice();
  },
  mounted() {},
  methods: {
    // 获得最大最小价格
    async getPrice() {
      if (this.position == "本校") {
        this.position = this.user.schoolName;
      }
      await Product.getProductPrice({
        categories: this.categories,
        position: this.position,
      })
        .then((res) => {
          if (res.data[1] == res.data[0]) {
            this.range.push(res.data[1]);
          } else {
            this.range = res.data;
            this.min = res.data[1],
             this.max = res.data[0];
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async infiniteHandler($state) {
      if (this.search == false) {
        await Product.getPriceProduct({
          limit: 4,
          page: this.page,
          payed: false,
          min: this.min,
          max: this.max,
          position:this.position,
          categories:this.categories
        })
          .then((res) => {
            if (res.data.products.length > 0) {
              this.page += 1;
              this.items.push(...res.data.products);
              $state.loaded();
            } else {
              $state.complete();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        if (this.position == "本校") {
          this.position = this.user.schoolName;
        }
        await Product.getPriceProduct({
          categories: this.categories,
          min: this.range[1],
          max: this.range[0],
          limit: 4,
          page: this.page,
          position: this.position,
          payed: false,
        })
          .then((res) => {
            if (res.data.products.length > 0) {
              this.page += 1;
              this.items.push(...res.data.products);
              $state.loaded();
            } else {
              $state.complete();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    async createOrders() {
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
      if (this.user === null) {
        this.$router.push({ name: "SignIn" });
      }
      this.productId = id;
      await Order.findOrder({
        userId: this.user.id,
        productId: this.productId,
      })
        .then((res) => {
          if (res.data != null) {
            this.warn = true;
          } else {
            this.show = true;
          }
        })
        .catch((err) => console.log(err));
    },
    async addCollect(id) {
      console.log(this.user);
      if (this.user === null) {
        this.$router.push({ name: "SignIn" });
      }
      await Shelf.addCollect({
        userId: this.user.id,
        collects: id,
      })
        .then((res) => {
          this.warn1 = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    chat(item) {
      this.$router.push({ name: "chat" ,params: { username: item }});
    },
    async get() {
      this.search = true;
      this.page = 1;
      this.items = [];
      this.infiniteId += 1;
    },
  },
  components: {
    InfiniteLoading,
  },
};
</script>

<style>
#bottom {
  position: fixed;
  right:0px;
  bottom: 0px;
}
</style>
