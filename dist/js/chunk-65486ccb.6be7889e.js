(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65486ccb"],{"3f3b":function(t,e,a){},be6f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{class:{"on-hover":r},attrs:{elevation:r?16:2}},[a("v-img",{attrs:{src:t.items.img,height:"500px",width:"500px"}})],1)]}}])})],1),a("v-col",{attrs:{cols:"12",sm:"8"}},[a("h1",{staticClass:"grey--text text-darken-3 mt-5"}),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-btn",{staticClass:"ml-4",attrs:{tile:"",color:"orange"}},[t._v(" 商品名称 ")]),a("span",{staticClass:"mt-5 grey--text text--darken-3"},[t._v(" "+t._s(t.items.title)+" ")])],1)],1),a("div",{staticClass:"mt-5"},[a("v-btn",{staticClass:"ml-4",attrs:{tile:"",color:"orange"}},[t._v(" 商品描述")]),a("span",{staticClass:"mt-5 grey--text text--darken-3"},[t._v(t._s(t.items.desc))])],1),a("div",{staticClass:"mt-5 mb-10"},[a("v-btn",{staticClass:"ml-4",attrs:{tile:"",color:"orange"}},[t._v(" 商品价格 ")]),a("span",{staticClass:"mt-5 grey--text text--darken-3"},[t._v(t._s(t.items.price)+"元")])],1),a("v-dialog",{attrs:{persistent:"","max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"ml-4",attrs:{tile:"",color:"orange"},on:{click:function(e){return e.preventDefault(),t.openYouTubeModel.apply(null,arguments)}}},"v-btn",n,!1),r),[t._v(" 播放视频 ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.items.title))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:""}},[a("div",{staticClass:"iframe-container"},[t.isVideo?t._e():a("img",{attrs:{src:t.mediaURL}}),t.isVideo?a("iframe",{attrs:{allowfullscreen:"",src:t.items.video}}):t._e()])])],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"orange",text:""},on:{click:t.close}},[t._v("关闭")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.warn,callback:function(e){t.warn=e},expression:"warn"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" 加入购车成功 ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.warn=!1}}},[t._v(" 确定 ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.warn1,callback:function(e){t.warn1=e},expression:"warn1"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" 加入收藏成功 ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.warn1=!1}}},[t._v(" 确定 ")])],1)],1)],1),a("v-btn",{staticClass:"ml-2",attrs:{tile:"",color:"orange"}},[t._v(" 与卖家聊天 ")]),a("v-btn",{staticClass:"ml-2",attrs:{tile:"",color:"orange"},on:{click:t.createOrders}},[t._v(" 加入购物车 ")]),a("v-btn",{staticClass:"ml-2",attrs:{tile:"",color:"orange"},on:{click:t.addCollect}},[t._v(" 加入收藏 ")])],1)],1),a("v-divider",{staticClass:"mt-2"}),a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",color:"purple",id:"bottom"},on:{click:t.home}},[t._v(" 首页 ")])],1)],1)},n=[],s=a("1da1"),o=(a("96cf"),a("1c9f")),c=a("ce3c"),i=a("b6f9"),l={data:function(){return{items:{},isVideo:!1,mediaURL:"",dialog:!1,user:this.$store.state.auth.user,warn:!1,warn1:!1,model:null}},created:function(){this.getProduct()},mounted:function(){},watch:{},computed:{},methods:{home:function(){this.$router.push({name:"Home"})},getProduct:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].SearchProduct({id:t.$route.params.id}).then((function(e){console.log(e),t.items=e.data.products})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},createOrders:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.items._id),null===t.user&&t.$router.push({name:"SignIn"}),e.next=4,t.$store.dispatch("count",t.$store.state.auth.count).catch((function(t){return console.log(t)}));case 4:return e.next=6,c["a"].createOrder({userId:t.user.id,productId:t.items._id,amount:"1"}).then((function(e){console.log("123"),t.warn=!0})).catch((function(t){return console.log(t)}));case 6:case"end":return e.stop()}}),e)})))()},addCollect:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].addCollect({userId:t.user.id,collects:t.items._id}).then((function(e){"201"==e.status&&(t.warn1=!0)})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},close:function(){this.$router.go(0)},openYouTubeModel:function(){this.mediaURL=this.items.video,this.isVideo=!0},openImageModel:function(){this.isVideo=!1}}},u=l,d=(a("e903"),a("2877")),v=a("6544"),m=a.n(v),f=a("8336"),h=a("b0af"),p=a("99d9"),g=a("62ad"),w=a("a523"),b=a("169a"),x=a("ce7e"),_=a("ce87"),C=a("adda"),k=a("0fd9"),V=a("2fa4"),R=Object(d["a"])(u,r,n,!1,null,null,null);e["default"]=R.exports;m()(R,{VBtn:f["a"],VCard:h["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VCol:g["a"],VContainer:w["a"],VDialog:b["a"],VDivider:x["a"],VHover:_["a"],VImg:C["a"],VRow:k["a"],VSpacer:V["a"]})},e903:function(t,e,a){"use strict";a("3f3b")}}]);
//# sourceMappingURL=chunk-65486ccb.6be7889e.js.map