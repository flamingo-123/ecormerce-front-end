<template>
  <v-app app flat>
    <v-container fluid class="py-0 fill-height">
      <v-app-bar flat class="mt-4" elevation="24">
        <v-row align="center" justify="start">
          <v-col cols="12" sm="3">
            <v-btn color="orange" outlined dark @click="drawer = true">
              {{ title }}
            </v-btn>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              flat
              hide-details
              append-icon="mdi-magnify"
              placeholder="淘点喜欢的吧...."
              outlined
              dense
            ></v-text-field>
          </v-col>
          <!-- <v-subheader>选择价格区间</v-subheader> -->
          <v-col class="px-4" cols="12" sm="5">
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              hide-details
              class="align-center"
            >
              <template v-slot:prepend>
                <v-text-field
                  :value="range[0]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field
                  :value="range[1]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </template>
            </v-range-slider>
          </v-col>
          <v-col class="px-4" cols="12" sm="1">
            <v-btn color="primary" dark @click="price"> 选择价格 </v-btn>
          </v-col>
        </v-row>
      </v-app-bar>
      <v-row>
        <v-col cols="12" sm="3" v-for="(item, $index) in list" :key="$index">
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
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </v-app>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
import Product from "../../services/product";
export default {
  data() {
    return {
      page: 1,
      list: [],
      title: "",
      min: -50,
      max: 90,
      range: [],
    };
  },
  created() {
    this.title = this.$route.params.type;
    this.getPrice();
  },
  methods: {
    price() {
      console.log(this.range[0]);
    },
    async getPrice() {
      await Product.getProductPrice({
        categories: this.title,
      })
        .then((res) => {
          console.log(res.data);
          if (res.data[1] == res.data[0]) {
            this.range.push(res.data[1]);
          } else {
            this.range = res.data;
            (this.min = res.data[1]), (this.max = res.data[0]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async infiniteHandler($state) {
      await Product.getSpecialProduct({
        limit: 4,
        page: this.page,
        categories: this.title,
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