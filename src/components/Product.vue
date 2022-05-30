<template>
  <div>
    <v-container>
      <v-row >
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
              <v-img :src="items.img" height="500px" width="500px" />
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="8">
          <h1 class="grey--text text-darken-3 mt-5"></h1>
          <v-row>
            <v-col cols="12" sm="4">
              <v-btn tile color="orange" class="ml-4"> 商品名称 </v-btn>
              <span class="mt-5 grey--text text--darken-3">
                {{ items.title }}
              </span>
            </v-col>
          </v-row>
          <div class="mt-5">
            <v-btn tile color="orange" class="ml-4"> 商品描述</v-btn>
            <span class="mt-5 grey--text text--darken-3">{{ items.desc }}</span>
          </div>
          <div class="mt-5 mb-10">
            <v-btn tile color="orange" class="ml-4"> 商品价格 </v-btn>
            <span class="mt-5 grey--text text--darken-3"
              >{{ items.price }}元</span
            >
          </div>
          <v-dialog v-model="dialog" persistent max-width="800px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="ml-4"
                tile
                color="orange"
                v-bind="attrs"
                v-on="on"
                @click.prevent="openYouTubeModel"
              >
               播放视频
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ items.title }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="">
                      <div class="iframe-container">
                        <img :src="mediaURL" v-if="!isVideo" />
                        <iframe
                          allowfullscreen
                          v-if="isVideo"
                          :src="items.video"
                        ></iframe>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange" text @click="close">关闭</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="warn" max-width="290">
            <v-card>
              <v-card-title class="text-h5"> 加入购车成功 </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="warn = false">
                  确定
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="warn1" max-width="290">
            <v-card>
              <v-card-title class="text-h5"> 加入收藏成功 </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="warn1 = false">
                  确定
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          
          <v-btn tile color="orange" class="ml-2"> 与卖家聊天 </v-btn>
          <v-btn tile color="orange" class="ml-2" @click="createOrders">
            加入购物车
          </v-btn>
          <v-btn tile color="orange" class="ml-2" @click="addCollect">
            加入收藏
          </v-btn>
        </v-col>
      </v-row>
      <v-divider class="mt-2"></v-divider>
       <v-btn class="mx-2" fab dark large color="purple" id="bottom" @click="home">
      首页
      </v-btn>
      <!-- <v-sheet class="mx-auto" elevation="8">
        <v-slide-group v-model="model" class="pa-4" show-arrows>
          <v-slide-item v-for="n in 3" :key="n" >
            <v-card
              height="200"
              width="500"
            > 
              <v-row class="fill-height" align="center" justify="center">
                 <v-img :src="items.img"    :aspect-ratio="9/16" />
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet> -->
    </v-container>
  </div>
</template>

<script>
import Product from "../../services/product";
import Order from "../../services/cart";
import Shelf from "../../services/shelf";
export default {
  data() {
    return {
      items: {},
      isVideo: false,
      mediaURL: "",
      dialog: false,
      user: this.$store.state.auth.user,
      warn: false,
      warn1: false,
      model: null,
    };
  },
  created() {
    this.getProduct();
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
      home(){
        this.$router.push({ name: "Home" });
      },
    async getProduct() {
      await Product.SearchProduct({
        id: this.$route.params.id,
      })
        .then((res) => {
          console.log(res);
          this.items = res.data.products;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async createOrders() {
      console.log(this.items._id);
      if (this.user === null) {
        this.$router.push({ name: "SignIn" });
      }
      await this.$store
        .dispatch("count", this.$store.state.auth.count)
        .catch((err) => console.log(err));

      await Order.createOrder({
        userId: this.user.id,
        productId: this.items._id,
        amount: "1",
      })
        .then((res) => {
          console.log("123");
          this.warn = true;
        })
        .catch((err) => console.log(err));
    },
    async addCollect() {
      await Shelf.addCollect({
        userId: this.user.id,
        collects: this.items._id,
      })
        .then((res) => {
          if (res.status == "201") {
            this.warn1 = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    close() {
      this.$router.go(0);
    },
    openYouTubeModel() {
      this.mediaURL = this.items.video;
      this.isVideo = true;
    },
    openImageModel() {
      this.isVideo = false;
    },
    // youtubeVideo() {
    //   if (!this.movie.videos) return;
    //   return (
    //     "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
    //   );
    // },
  },
};
</script>

<style>
#bottom {
  position: fixed;
  right:0px;
  bottom: 0px;
}
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style> 