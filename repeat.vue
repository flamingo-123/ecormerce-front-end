<template>
  <div class="mx-3" id="All">
    <h2 class="mt-2 grey--text">{{Type}}</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" :key="item.id" v-for="item in items">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
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
                <v-btn elevation="2" text small color="primary">
                  加入购物车</v-btn
                >

                <v-btn elevation="2" text small color="primary">
                  买卖聊天</v-btn
                >

                <v-btn elevation="2" text small color="primary">
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
  </div>
</template>
<script>
import Product from "../../services/product";
export default {
  data() {
    return {
      page: 1,
      items: [],
      count:0,
      Type:''
    };
  },
  created() {
    this.loadProduct();
  },
  methods: {
    async loadProduct() {
      await Product.loadTypeProduct({
        limit: 8,
        page: this.page,
        Type: this.$route.params.type
      })
        .then((res) => {
          this.items = res.data.data,
          this.count=res.data.filterPage,
          console.log(this.count)
          this.Type=this.$route.params.type
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>





<template>
  <div>
    <div class="mx-3">
    <h2 class="mt-2 grey--text">全部商品</h2>
    <v-container fluid>
      <v-row  align="center" justify="center">
        <v-col cols="12"   v-for="(item, $index) in list" :key="$index"      >
          <v-hover v-slot="{ hover }" open-delay="200" >
            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }"  > 
              <v-img
                height="250"
                width="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
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
              <v-card-actions align="center">
                <v-btn elevation="2" text small color="primary">
                  加入购物车</v-btn
                >

                <v-btn elevation="2" text small color="primary">
                  买卖聊天</v-btn
                >

                <v-btn elevation="2" text small color="primary">
                  加入收藏</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
  
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
import Product from "../../services/product";
export default {
  data() {
    return {
      page: 1,
      list: [],
    };
  },
  methods: {
    async infiniteHandler($state) {
      await Product.loadAllProduct({
        limit: 4,
        page: this.page,
      })
        .then((res) => {
          if (res.data.data.length > 0) {
            this.page += 1;
            this.list.push(...res.data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
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




购车的内容
<template>
  <div id="app">
    <v-card class="mx-auto">
       <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-card-title class="text-h5"> Unlimited music now </v-card-title>

              <v-card-subtitle
                >Listen to your favorite artists and albums whenever and
                wherever, online and offline.</v-card-subtitle
              >

              <v-card-actions>
                <v-btn text> Listen Now </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col v-for="(item, i) in items" :key="i" cols="12">
            <v-card :color="item.color" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="item.src"></v-img>
                </v-avatar>
                <div>
                  <v-card-title
                    class="text-h5"
                    v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      v-if="item.artist === 'Ellie Goulding'"
                      class="ml-2 mt-3"
                      fab
                      icon
                      height="40px"
                      right
                      width="40px"
                    >
                      <v-icon>mdi-play</v-icon>
                    </v-btn>

                    <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                      START RADIO
                    </v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <div style="position:fixed; bottom:0" >底部栏</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
};
</script>

<style>
</style>