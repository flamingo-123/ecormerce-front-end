(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},c={app:0},o=[];function i(t){return u.p+"js/"+({signin:"signin",signup:"signup"}[t]||t)+"."+{"chunk-00049b7e":"090f8075","chunk-2d219f98":"a4715f60","chunk-62990877":"00ef204a","chunk-646867a4":"99fe1426","chunk-65486ccb":"6be7889e","chunk-72b52fca":"670b9a8d","chunk-920da228":"cd9affcb","chunk-9d227c28":"def9fb3e",signin:"4d7470e2",signup:"8bd06c68"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-00049b7e":1,"chunk-62990877":1,"chunk-646867a4":1,"chunk-65486ccb":1,"chunk-72b52fca":1,"chunk-920da228":1,"chunk-9d227c28":1,signup:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({signin:"signin",signup:"signup"}[t]||t)+"."+{"chunk-00049b7e":"365b8ac3","chunk-2d219f98":"31d6cfe0","chunk-62990877":"8a59bf5c","chunk-646867a4":"c99739c1","chunk-65486ccb":"ec879752","chunk-72b52fca":"a7a4b5a9","chunk-920da228":"4c871cba","chunk-9d227c28":"3b0272a4",signin:"31d6cfe0",signup:"95d49c6a"}[t]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],p.parentNode.removeChild(p),n(o)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"1c9f":function(t,e,n){"use strict";n("99af"),n("4de4"),n("d3b7");var r=n("a766");e["a"]={loadAllProduct:function(t){return Object(r["a"])().post("/product/findAllProduct/?limit=".concat(t.limit,"&page=").concat(t.page,"&id=").concat(t.id),t.filter)},loadTypeProduct:function(t){return Object(r["a"])().get("/product/findAllProduct/?limit=".concat(t.limit,"&page=").concat(t.page,"&categories=").concat(t.Type))},createProduct:function(t){return Object(r["a"])().post("/product",t)},getSpecialProduct:function(t){return Object(r["a"])().get("/product/getSpecialProduct/?limit=".concat(t.limit,"&page=").concat(t.page,"&categories=").concat(t.categories,"&status=1&condition=1"))},getProductPrice:function(t){return Object(r["a"])().get("/product/getProductPrice/?&categories=".concat(t.categories,"&status=1&condition=1&position=").concat(t.position))},getPriceProduct:function(t){return Object(r["a"])().post("/product/getPriceProduct",t)},deleteProduct:function(t){return Object(r["a"])().delete("/product/".concat(t.id))},updateProduct:function(t){return Object(r["a"])().put("/product/".concat(t.id),t)},getUserProduct:function(t){return null==t.status?Object(r["a"])().get("/product/getUserProduct?limit=".concat(t.limit,"&page=").concat(t.page,"&userId=").concat(t.id,"&delete=false")):null==t.condition?Object(r["a"])().get("/product/getUserProduct/?limit=".concat(t.limit,"&page=").concat(t.page,"&status=").concat(t.status,"&userId=").concat(t.id,"&delete=false")):null!=t.condition?Object(r["a"])().get("/product/getUserProduct/?limit=".concat(t.limit,"&page=").concat(t.page,"&condition=").concat(t.condition,"&userId=").concat(t.id,"&delete=false")):void 0},getProductTitle:function(){return Object(r["a"])().get("/product/SearchTitle")},SearchProduct:function(t){return Object(r["a"])().get("/product/SearchProduct/".concat(t.id))},newProduct:function(t){return Object(r["a"])().post("/product/newProduct",t)}}},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("5530"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ac1f"),n("00b4"),n("2b0e")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view")],1)},o=[],i=n("e85b"),u={name:"App",data:function(){return{}},components:{NavBar:i["a"]}},s=u,l=n("2877"),d=n("6544"),p=n.n(d),f=n("7496"),g=Object(l["a"])(s,c,o,!1,null,null,null),m=g.exports;p()(g,{VApp:f["a"]});n("d3b7"),n("3ca3"),n("ddb0");var h=n("8c4f");a["a"].use(h["a"]);var v=[{path:"/",name:"Home",components:{default:function(){return n.e("chunk-62990877").then(n.bind(null,"bb51"))}}},{path:"/paySuccess",name:"paySuccess",components:{default:function(){return n.e("chunk-2d219f98").then(n.bind(null,"ba14"))}}},{path:"/signin",name:"SignIn",component:function(){return n.e("signin").then(n.bind(null,"afb1"))}},{path:"/signup",name:"SignUp",component:function(){return n.e("signup").then(n.bind(null,"0687"))}},{path:"/categerioy",name:"categerioy",component:function(){return n.e("signup").then(n.bind(null,"7433"))}},{path:"/cart",name:"cart",component:function(){return n.e("signup").then(n.bind(null,"3eaf"))}},{path:"/upload",name:"upload",component:function(){return n.e("chunk-646867a4").then(n.bind(null,"9dac"))}},{path:"/Shelf",name:"shelf",component:function(){return n.e("chunk-00049b7e").then(n.bind(null,"9a7a"))}},{path:"/payed",name:"payed",component:function(){return n.e("chunk-9d227c28").then(n.bind(null,"9d3c"))}},{path:"/myShop",name:"myShop",component:function(){return n.e("chunk-920da228").then(n.bind(null,"3e9c"))}},{path:"/chat",name:"chat",component:function(){return n.e("chunk-72b52fca").then(n.bind(null,"487c"))}},{path:"/product/:id",name:"Product",component:function(){return n.e("chunk-65486ccb").then(n.bind(null,"be6f"))}}],b=new h["a"]({base:"",routes:v});b.beforeEach((function(t,e,n){var r=JSON.parse(window.localStorage.getItem("user"));"/upload"===t.path||"/cart"===t.path||"/Shelf"===t.path||"/payed"===t.path||"/myShop"===t.path?r?n():n("/signin"):n()}));var O=b,k=n("2f62"),w=(n("e9c4"),n("a766")),j={signIn:function(t){return Object(w["a"])().post("/login",t)},signUp:function(t){return Object(w["a"])().post("/register",t)},updateUserDetails:function(t){return Object(w["a"])().put("/updatedetails",t)},uploadUserAvatar:function(t){return Object(w["a"])().put("/avatar",t)},updatePassword:function(t){return Object(w["a"])().put("/updatepassword",t)},me:function(t){return Object(w["a"])().post("auth/me",{headers:{Authorization:"Bearer ".concat(t)}})}},x={url:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_URL,token:localStorage.getItem("token")||null,user:JSON.parse(localStorage.getItem("user"))||null,isUserLoggedIn:localStorage.getItem("token")||!1,count:localStorage.getItem("count")||0},y={getUrl:function(t){return t.url},isAuthenticated:function(t){return t.isUserLoggedIn},getToken:function(t){return t.token},currentUser:function(t){return t.user},OrderCount:function(t){return t.count}},_={SET_TOKEN:function(t,e){t.token=e,t.isUserLoggedIn=!!e},SET_USER_DATA:function(t,e){t.user=e.user,t.count=e.Count},CLEAR_AUTH:function(t){t.token=null,t.user=null,t.isUserLoggedIn=!1,t.count=0},SET_COUNT:function(t){t.count++},DELETE_COUNT:function(t){t.count--},clearCount:function(t){t.count=0}},S={signUp:function(t,e){var n=t.commit;return new Promise((function(t,r){j.signUp(e).then((function(e){var r=e.data;n("SET_TOKEN",r.token),localStorage.setItem("token",r.token),t(r)})).catch((function(t){return r(t)}))}))},signIn:function(t,e){var n=t.commit;return new Promise((function(t,r){j.signIn(e).then((function(e){var r=e.data;localStorage.setItem("token",r.token),n("SET_TOKEN",r.token),t(r)})).catch((function(t){return r(t)}))}))},setUserData:function(t,e){var n=t.commit;return new Promise((function(t,r){localStorage.setItem("user",JSON.stringify(e.user)),localStorage.setItem("count",e.Count),n("SET_USER_DATA",e),t(e)}))},setUserData1:function(t,e){t.commit;return new Promise((function(t,n){localStorage.setItem("user",JSON.stringify(e.user)),localStorage.setItem("count",0),t(e)}))},signOut:function(t){var e=t.commit;localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("count"),e("CLEAR_AUTH")},count:function(t,e){var n=t.commit;n("SET_COUNT"),localStorage.setItem("count",++e)},DELETE_COUNT:function(t){var e=t.commit,n=t.data;e("DELETE_COUNT"),localStorage.setItem("count",--n)},clearCount:function(t){var e=t.commit;e("clearCount"),localStorage.setItem("count",0)}},P={state:x,getters:y,mutations:_,actions:S};a["a"].use(k["a"]);var C=new k["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{auth:P}}),I=(n("15f5"),n("d1e78"),n("f309"));a["a"].use(I["a"]);var E=new I["a"]({theme:{themes:{dark:{background:"#78909C"},light:{background:"#B0BEC5"}}},icons:{iconfont:"mdi"}}),T=n("e166"),U=n.n(T),A=n("5132"),N=n.n(A),V=n("8055"),R=n.n(V),L=n("e508"),D=n("4c93"),B=n("7bb1");a["a"].use(U.a),a["a"].use(L["a"]),Object(B["d"])("eager"),Object(B["c"])("required",Object(r["a"])(Object(r["a"])({},D["f"]),{},{message:"请输入{_field_}!"})),Object(B["c"])("oneOf",Object(r["a"])({},D["d"])),Object(B["c"])("max",Object(r["a"])(Object(r["a"])({},D["b"]),{},{message:"{_field_}至少有{length}个字符 "})),Object(B["c"])("min",Object(r["a"])(Object(r["a"])({},D["c"]),{},{message:"{_field_}至少有{length}个字符！"})),Object(B["c"])("email",Object(r["a"])(Object(r["a"])({},D["a"]),{},{message:"邮箱必须有效！"})),Object(B["c"])("password",{params:["target"],validate:function(t,e){var n=e.target;return t===n},message:"两次密码不匹配!"}),Object(B["c"])("phone",{message:"请输入正确的手机号码！",validate:function(t){return/[1]\d{10}/.test(t)}}),Object(B["c"])("size",Object(r["a"])(Object(r["a"])({},D["g"]),{},{message:"video size should be less than 5 MB!"})),Object(B["c"])("regex",Object(r["a"])(Object(r["a"])({},D["e"]),{},{message:"请输入6-20{_field_}，并且包含字母和特殊字符!"})),a["a"].config.productionTip=!1,a["a"].component("ValidationProvider",B["b"]),a["a"].component("ValidationObserver",B["a"]),a["a"].use(new N.a({debug:!1,options:{autoConnect:!1},connection:R()("http://127.0.0.1:3002"),extraHeaders:{"Access-Control-Allow-Credentials":!0},allowEIO3:!0})),new a["a"]({router:O,store:C,vuetify:E,render:function(t){return t(m)}}).$mount("#app")},"9db3":function(t,e,n){},a766:function(t,e,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r);e["a"]=function(){var t=a.a.create({baseURL:"http://localhost:3002/api"}),e=localStorage.getItem("token");return e&&(t.defaults.headers.common.Authorization="Bearer ".concat(e)),t.interceptors.response.use((function(t){return t}),(function(t){return 401===t.response.status&&(localStorage.removeItem("token"),localStorage.removeItem("user"),location.reload()),Promise.reject(t)})),t}},b6f9:function(t,e,n){"use strict";n("99af");var r=n("a766");e["a"]={getCollects:function(t){return Object(r["a"])().get("/collect/get/?limit=".concat(t.limit,"&page=").concat(t.page,"&id=").concat(t.id))},clearCollect:function(t){return Object(r["a"])().put("/collect/clearCollect",t)},addCollect:function(t){return Object(r["a"])().post("/collect",t)},clearCollects:function(t){return Object(r["a"])().put("/collect/clearCollects",t)}}},ce3c:function(t,e,n){"use strict";n("99af");var r=n("a766");e["a"]={loadOrders:function(t){return Object(r["a"])().get("/order/get/?limit=".concat(t.limit,"&page=").concat(t.page,"&id=").concat(t.id,"&payed=").concat(t.payed))},deleteOrders:function(t){return Object(r["a"])().delete("/order/".concat(t.id))},createOrder:function(t){return Object(r["a"])().post("/order",t)},pay:function(t){return Object(r["a"])().post("/payment",t)},clearOrder:function(){return Object(r["a"])().put("/order/cleared")},queryOrder:function(t){return Object(r["a"])().post("/payment/queryOrder",t)},payOrder:function(t){return Object(r["a"])().post("/payment/payOrder",t)},findOrder:function(t){return console.log(t),Object(r["a"])().post("/order/getOrder",t)}}},e85b:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-3"},[n("v-container",{attrs:{fluid:""}},[n("v-card",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"5"}},[n("v-btn",{attrs:{color:"orange"}},[t._v(" 随便逛逛 ")])],1),n("v-col",{attrs:{cols:"12",sm:"1"}},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{dark:"",color:"primary"}},"v-btn",a,!1),r),[t._v(" 选择价格 ")])]}}])},[n("v-list",[n("v-range-slider",{staticClass:"justify-center",attrs:{vertical:"",max:t.max,min:t.min,"hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticStyle:{width:"60px"},attrs:{value:t.range[1],"single-line":"",type:"number"},on:{change:function(e){return t.$set(t.range,1,e)}}})]},proxy:!0},{key:"prepend",fn:function(){return[n("v-text-field",{staticStyle:{width:"60px"},attrs:{value:t.range[0],type:"number"},on:{change:function(e){return t.$set(t.range,0,e)}}})]},proxy:!0}]),model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1)],1)],1),n("v-col",{attrs:{cols:"12",sm:"2"}},[n("v-select",{attrs:{items:t.items1,label:"区域选择",dense:"",outlined:""},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})],1),n("v-col",{attrs:{cols:"12",sm:"2"}},[n("v-select",{attrs:{items:t.items2,label:"类别选择",dense:"",outlined:""},model:{value:t.categories,callback:function(e){t.categories=e},expression:"categories"}})],1),n("v-col",{attrs:{cols:"12",sm:"1"}},[n("v-btn",{attrs:{dark:"",color:"primary"},on:{click:t.get}},[t._v(" 选择商品 ")])],1)],1),n("v-row",t._l(t.items,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12",sm:"3"}},[n("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(r){var a=r.hover;return[n("v-card",{class:{"on-hover":a},attrs:{elevation:a?16:2}},[n("router-link",{attrs:{to:"/product/"+e._id}},[n("v-img",{attrs:{src:e.img,height:"250"}})],1),n("v-card-title",{staticClass:"subtitle-2"},[t._v(" "+t._s(e.title))]),n("v-card-text",[n("div",{staticClass:"my-4 text-subtitle-1"},[t._v(" "+t._s(e.schoolName)+" ")]),n("div",{staticClass:"my-4 text-subtitle-1"},[t._v(t._s(e.price)+"元")])]),n("v-divider",{staticClass:"mx-4"}),n("v-card-actions",[n("v-btn",{attrs:{elevation:"2",text:"",small:"",color:"primary"},on:{click:function(n){return t.change(e._id)}}},[t._v(" 加入购物车")]),n("v-btn",{attrs:{elevation:"2",text:"",small:"",color:"primary"},on:{click:function(n){return t.chat(e)}}},[t._v(" 买卖聊天")]),n("v-btn",{attrs:{elevation:"2",text:"",small:"",color:"primary"},on:{click:function(n){return t.addCollect(e._id)}}},[t._v(" 加入收藏")])],1)],1)]}}],null,!0)})],1)})),1)],1)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v(" 是否加入购物车? ")]),n("v-card-text",[t._v(" 加入购物车后可以在订单信息中查看和付款。 ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.show=!1}}},[t._v(" 取消 ")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.createOrders}},[t._v(" 加入购物车 ")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.warn,callback:function(e){t.warn=e},expression:"warn"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v(" 已经加入了购物车 ")]),n("v-card-text",[t._v(" 请不要反复加入 ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.warn=!1}}},[t._v(" 取消 ")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.warn1,callback:function(e){t.warn1=e},expression:"warn1"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v(" 已经加入了收藏 ")]),n("v-card-text",[t._v(" 请不要反复收藏 ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.warn=!1}}},[t._v(" 取消 ")])],1)],1)],1),n("infinite-loading",{attrs:{identifier:t.infiniteId},on:{infinite:t.infiniteHandler}},[n("span",{attrs:{slot:"no-more"},slot:"no-more"},[t._v(" 已经到底了 ")])])],1)},a=[],c=n("2909"),o=n("1da1"),i=(n("ac1f"),n("841c"),n("96cf"),n("e166")),u=n.n(i),s=n("1c9f"),l=n("ce3c"),d=n("b6f9"),p={data:function(){return{page:1,items:[],count:0,show:!1,user:this.$store.state.auth.user,productId:"",warn:!1,warn1:!1,min:"",max:"",range:[],search:!1,infiniteId:+new Date,items1:[{text:"本校"},{text:"全部"}],items2:[{text:"全部"},{text:"图书"},{text:"体育"},{text:"服饰"},{text:"美妆"},{text:"电子产品"},{text:"交通工具"}],categories:"全部",position:"全部",schoolName:""}},created:function(){this.getPrice()},mounted:function(){},methods:{getPrice:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"本校"==t.position&&(t.position=t.user.schoolName),e.next=3,s["a"].getProductPrice({categories:t.categories,position:t.position}).then((function(e){e.data[1]==e.data[0]?t.range.push(e.data[1]):(t.range=e.data,t.min=e.data[1],t.max=e.data[0])})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},infiniteHandler:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!=e.search){n.next=5;break}return n.next=3,s["a"].getPriceProduct({limit:4,page:e.page,payed:!1,min:e.min,max:e.max,position:e.position,categories:e.categories}).then((function(n){var r;n.data.products.length>0?(e.page+=1,(r=e.items).push.apply(r,Object(c["a"])(n.data.products)),t.loaded()):t.complete()})).catch((function(t){console.log(t)}));case 3:n.next=8;break;case 5:return"本校"==e.position&&(e.position=e.user.schoolName),n.next=8,s["a"].getPriceProduct({categories:e.categories,min:e.range[1],max:e.range[0],limit:4,page:e.page,position:e.position,payed:!1}).then((function(n){var r;n.data.products.length>0?(e.page+=1,(r=e.items).push.apply(r,Object(c["a"])(n.data.products)),t.loaded()):t.complete()})).catch((function(t){console.log(t)}));case 8:case"end":return n.stop()}}),n)})))()},createOrders:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("count",t.$store.state.auth.count).catch((function(t){return console.log(t)}));case 2:return e.next=4,l["a"].createOrder({userId:t.user.id,productId:t.productId,amount:"1"}).then((function(e){t.show=!1})).catch((function(t){return console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()},change:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return null===e.user&&e.$router.push({name:"SignIn"}),e.productId=t,n.next=4,l["a"].findOrder({userId:e.user.id,productId:e.productId}).then((function(t){null!=t.data?e.warn=!0:e.show=!0})).catch((function(t){return console.log(t)}));case 4:case"end":return n.stop()}}),n)})))()},addCollect:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e.user),null===e.user&&e.$router.push({name:"SignIn"}),n.next=4,d["a"].addCollect({userId:e.user.id,collects:t}).then((function(t){e.warn1=!0})).catch((function(t){console.log(t)}));case 4:case"end":return n.stop()}}),n)})))()},chat:function(t){this.$router.push({name:"chat",params:{username:t}})},get:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.search=!0,t.page=1,t.items=[],t.infiniteId+=1;case 4:case"end":return e.stop()}}),e)})))()}},components:{InfiniteLoading:u.a}},f=p,g=(n("ed7c"),n("2877")),m=n("6544"),h=n.n(m),v=n("8336"),b=n("b0af"),O=n("99d9"),k=n("62ad"),w=n("a523"),j=n("169a"),x=n("ce7e"),y=n("ce87"),_=n("adda"),S=n("8860"),P=n("e449"),C=n("5963"),I=n("0fd9"),E=n("b974"),T=n("2fa4"),U=n("8654"),A=Object(g["a"])(f,r,a,!1,null,null,null);e["a"]=A.exports;h()(A,{VBtn:v["a"],VCard:b["a"],VCardActions:O["a"],VCardText:O["c"],VCardTitle:O["d"],VCol:k["a"],VContainer:w["a"],VDialog:j["a"],VDivider:x["a"],VHover:y["a"],VImg:_["a"],VList:S["a"],VMenu:P["a"],VRangeSlider:C["a"],VRow:I["a"],VSelect:E["a"],VSpacer:T["a"],VTextField:U["a"]})},ed7c:function(t,e,n){"use strict";n("9db3")}});
//# sourceMappingURL=app.5fa7af96.js.map