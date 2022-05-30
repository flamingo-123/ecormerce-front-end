<template>
  <div id="app">
    <v-app id="inspire">
      <div>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>我的商品信息</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-col cols="6" class="py-2">
                <v-row align="end">
                  <v-btn value="left" @click="getItem('all')"> 全部商品</v-btn>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on">审核状态</v-btn>
                    </template>
                    <v-list>
                      <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-title @click="getStatus(item.index)">{{
                          item.title
                        }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <v-btn value="left" @click="getItem('left')"> 未上架</v-btn>
                  <v-btn value="center" @click="getItem('center')"
                    >已上架</v-btn
                  >
                  <v-btn value="right" @click="getItem('right')">
                    已售出
                  </v-btn>
                </v-row>
              </v-col>
              <v-spacer></v-spacer>
              <v-dialog max-width="500px" v-model="dialogDelete">
                <v-card>
                  <v-card-title class="text-h5">是否删除商品</v-card-title>
                  <v-card-actions>
                    <v-btn color="error darken-1" @click="auitYes">确认</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogUpdate" max-width="500px">
                <v-card>
                  <v-card-title>
                    <span class="text-h5">修改管理员信息</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="user.username"
                            label="用户名"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="user.schoolName"
                            label="学校名称"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="user.profession"
                            label="专业"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="user.phone"
                            label="电话"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="user.email"
                            label="邮箱"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDialog">
                      取消
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="update">
                      确定
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.img`]="{ item }">
            <img :src="item.img" style="width: 50px; height: 50px" />
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <v-btn v-if="item.status === 0" color="blue-grey"> 未审核</v-btn>
            <v-btn v-else-if="item.status === 1" color="primary"
              >审核通过</v-btn
            >
            <v-btn v-else color="error">审核未通过</v-btn>
          </template>
          <template v-slot:[`item.actions`]="{ item }" v-if="show">
            <v-icon small @click="updateProduct(item)"> 修改 </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> 暂无数据 </v-btn>
          </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-pagination
            v-model="page"
            :length="count"
            @input="initialize"
          ></v-pagination>
        </div>
      </div>
    </v-app>
    <v-btn class="mx-2" fab dark large color="purple" id="bottom" @click="home">
      首页
    </v-btn>
  </div>
</template>
<script>
import Product from "../../services/product";
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      dialogDelete: false,
      dialogUpdate: false,
      editedIndex: "",
      condition: 0,
      text: "center",
      show: true,
      userId: this.$store.state.auth.user,
      status: null,
      count: 0,
      user: {
        username: "",
        schoolName: "",
        profession: "",
        role: "admin",
        phone: "",
        email: "",
        password: "",
      },
      headers: [
        {
          text: "商品名称",
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: "价格", sortable: false, value: "price" },
        { text: "商品图片", sortable: false, value: "img" },
        { text: "描述", sortable: false, value: "desc" },
        { text: "分类", sortable: false, value: "categories" },
        { text: "审核状态", sortable: false, value: "status" },
        { text: "上传时间", sortable: false, value: "updatedAt" },
      ],
      desserts: [],
      items: [
        { title: "未审核", index: 0 },
        { title: "审核通过", index: 1 },
        { title: "审核未通过", index: 2 },
      ],
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    home() {
      this.$router.push({ name: "Home" });
    },
    async initialize() {
      await Product.getUserProduct({
        limit: this.itemsPerPage,
        page: this.page,
        status: this.status,
        condition: this.condition,
        id: this.userId.id,
      })
        .then((res) => {
          this.desserts = res.data.products;
          this.count = res.data.Count;
           
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteItem(item) {
      this.dialogDelete = true;
      this.editedIndex = item;
    },
    updateProduct(item) {
      this.dialogUpdate = true;
      this.editedIndex = item;
    },
    closeDialog(item) {
      this.dialogUpdate = false;
    },
    update() {},
    async auitYes() {
      await Product.updateProduct({
        id: this.editedIndex._id,
        data: { condition: 4, status: 4, delete: true },
      })
        .then((res) => {
          this.dialogDelete = false;
          this.initialize();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //获得上线状态
    getItem(data) {
      this.status = 1;
      if (data === "left") {
        this.condition = 0;
      } else if (data === "center") {
        this.condition = 1;
      } else if (data === "right") {
        this.condition = 2;
      } else if (data === "justify") {
        this.show = false;
        this.condition = 3;
      } else {
        console.log(123);
        this.status = null;
      }
      this.desserts = [];
      this.initialize();
    },
    // 获得商品的审核状态

    getStatus(data) {
      this.condition = null;
      if (data == 0) {
        this.status = 0;
      } else if (data == 1) {
        this.status = 1;
      } else {
        this.status = 2;
      }
      this.desserts = [];
      this.initialize();
    },
  },
};
</script>

<style>
#bottom {
  position: fixed;
  right: 0px;
  bottom: 0px;
}
</style>