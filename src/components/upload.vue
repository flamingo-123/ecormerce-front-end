<template>
  <div>
    <v-container fluid class="fill-height">
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="5" lg="4" class="ma-auto">
          <v-card outlined :loading="loading" elevation="8" title>
            <div class="px-8 pt-6 pb-12">
              <v-card-title class="text-center">商品上传</v-card-title>
              <v-card-text>
                <form>
                  <v-text-field
                    v-model="item.title"
                    label="商品名称"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="item.desc"
                    label="商品描述"
                    required
                  ></v-text-field>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark v-bind="attrs" v-on="on" >
                        选择类型
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item v-for="(item, index) in items" :key="index"  @click="cate(item.title)">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <v-text-field
                    v-model="item.price"
                    label="价格"
                    required
                  ></v-text-field>
                  <v-file-input
                    show-size
                    multiple
                    label="上传图片"
                    placeholder="上传图片"
                    ref="myfile"
                    v-model="files"
                  ></v-file-input>
                  <v-btn
                    class="mr-4"
                    @click="submit"
                    :loading="loading"
                    :disabled="loading"
                    color="success"
                  >
                    上传
                  </v-btn>
                </form>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" :multi-line="multiLine">
      商品已经上传,可以继续上传商品
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          知道了
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import Product from "../../services/product";
export default {
  data() {
    return {
      valid: true,
      files: null,
      files: {},
      loading: false,
      snackbar: false,
      multiLine: true,
      item: {
        title: "",
        email: "",
        desc: "",
        price: "",
        categories: "",
        userId: "",
      },
      test: "test",
      user: this.$store.state.auth.user,
      items: [
        { title: "电影" },
        { title: "美妆" },
        { title: "体育" },
        { title: "图书" },
        { title: "交通工具" }
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submit() {
      if (this.files) {
        this.item.userId = this.user.id;
        let formData = new FormData();
        for (let file of this.files) {
          formData.append("files", file, file.name);
        }
        for (let i in this.item) {
          formData.append(i, this.item[i]);
        }
        this.loading = true;
        this.snackbar = true;
        Product.createProduct(formData)
          .then((res) => {
            this.loading = false;
            for (let i in this.item) {
              this.item[i] = "";
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("未上传文件.");
      }
    },
    cate(id){
      this.item.categories=id
    }
  },
};
</script>

<style>
</style>