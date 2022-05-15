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
                  <v-btn @click="getItem('center1')">审核状态</v-btn>
                  <v-btn value="left" @click="getItem('left')"> 未上架</v-btn>

                  <v-btn value="center" @click="getItem('center')"
                    >已上架</v-btn
                  >
                  <v-btn value="right" @click="getItem('right')">
                    已售出
                  </v-btn>
                  <v-btn value="justify" @click="getItem('justify')">
                    强制下架
                  </v-btn>
                </v-row>
              </v-col>
              <v-spacer></v-spacer>
              <v-dialog max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">是否删除商品</v-card-title>
                  <v-card-actions>
                    <v-btn color="error darken-1" @click="auitYes">确认</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.img`]="{ item }">
            <img :src="item.img" style="width: 50px; height: 50px" />
          </template>
           <template v-slot:[`item.status`]="{ item }">
            <span v-if="item.status==0">未审核</span>
            <span v-else-if="item.status==1">审核通过</span>
            <span v-else>审核未通过</span>
          </template>
          <template v-slot:[`item.actions`]="{ item }" v-if="show">
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> 暂无数据 </v-btn>
          </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="count" @input="initialize"></v-pagination>
        </div>
      </div>
    </v-app>
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
      editedIndex: "",
      condition: 0,
      text: "center",
      show: true,
      user: this.$store.state.auth.user,
      status:null,
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
        { text: "操作", value: "actions", sortable: false },
      ],
      desserts: [],
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      await Product.loadAllProduct({
        limit: this.itemsPerPage,
        page: this.page,
        status: this.status,
        condition: this.condition,
        id: this.user.id,
      })
        .then((res) => {
          this.desserts = res.data.data;
          this.count = res.data.totalPage;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteItem(item) {
      this.dialogDelete = true;
      this.editedIndex = item;
    },
    async auitYes() {
      await Product.UpdateProduct({
        id: this.editedIndex._id,
        condition: { condition: 3 },
      })
        .then((res) => {
          this.dialogDelete = false;
          this.initialize();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getItem(data) {
        this.status=1
      if (data === "left") {
         (this.condition = 0),
          this.initialize();
      } else if (data === "center") {
        (this.condition = 1),
          this.initialize();
      } else if (data === "right") {
        (this.condition = 2), 
         this.initialize();
      } else if(data==="justify"){
        this.show = false;
        this.headers.splice(7, 1);
        this.condition = 3, 
        this.initialize();
      }else {
         this.status=null,
         this.initialize()
      }
    },
  },
};
</script>

<style>
</style>