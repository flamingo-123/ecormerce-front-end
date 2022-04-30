<template>
  <div>
    <div v-for="(item, $index) in list" :key="$index">
      <!-- Hacker News item loop -->
     {{item.title}}
    </div>
    <infinite-loading></infinite-loading>
  </div>
</template>
<script>
import InfiniteLoading from "vue-infinite-loading";
import Product from "../../services/product";
export default {
  methods: {
    data() {
      return {
        page: 1,
        list: [],
      };
    },
    infiniteHandler() {
      await Product.loadAllProduct({
        limit: 4,
        page: this.page,
      })
        .then(({ data }) => {
          if (data.hits.length) {
            this.page += 1;
            this.list.push(...data.hits);
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