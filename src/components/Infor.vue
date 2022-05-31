<template>
  <v-col cols="12" md="3">
    <v-card class="text-center mt-8 mb-3" shaped>
      <v-badge bordered bottom color="green" dot offset-x="11" offset-y="13">
        <v-avatar class="mt-n7" size="60" elevation="10">
          <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
        </v-avatar>
      </v-badge>
      <v-card-title class="layout justify-center">雷俊豪</v-card-title>
      <v-card-subtitle class="layout justify-center"
        >菜鸟程序员</v-card-subtitle
      >
      <v-list> </v-list>
    </v-card>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h3>留言</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content> </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h3>图片</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content> </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h3>文件</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list shaped>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in files" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon" color="green"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h3>收藏</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content> </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </v-col>
</template>
<script>
export default {
  data() {
    return {
      files: [
        { text: "Landing_page.zip", icon: " mdi-cloud-upload" },
        { text: "Requirements.pdf", icon: " mdi-cloud-upload" },
        { text: "Uwagi.docx", icon: " mdi-cloud-upload" },
      ],
    };
  },
};
</script>

<style>
</style>