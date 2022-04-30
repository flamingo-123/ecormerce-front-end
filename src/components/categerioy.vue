<template>
  <div>
    <div class="mx-3">
    <h2 class="mt-2 grey--text">全部商品</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3"  v-for="(item, $index) in list" :key="$index">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
              <v-img
                height="250"
               :src="item.img"
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