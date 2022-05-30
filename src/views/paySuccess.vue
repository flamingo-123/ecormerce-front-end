<template>
  <div>
      {{msg}}
  </div>
</template>

<script>
import Order from "../../services/cart";
export default {
  data() {
    return {
        msg:''
    }
  },
 created () { 
    let data={
    out_trade_no : this.$route.query.out_trade_no,
    trade_no :this.$route.query.trade_no
    }
    Order.queryOrder(data).then((res)=>{
      this.msg=res.data.msg
      this.$router.push({ name: "Home" });
    })
},
}
</script>

<style>

</style>