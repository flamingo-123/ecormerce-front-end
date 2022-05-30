import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import InfiniteLoading from 'vue-infinite-loading';
Vue.use(InfiniteLoading);
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import { required, email, max, min, size, oneOf ,regex} from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'
setInteractionMode('eager')
extend('required', {
  ...required,
  message: '请输入{_field_}!'
})

extend('oneOf', {
  ...oneOf
})

extend('max', {
  ...max,
  message: '{_field_}至少有{length}个字符 '
})
extend('min', {
  ...min,
  message: '{_field_}至少有{length}个字符！'
})
extend('email', {
  ...email,
  message: '邮箱必须有效！'
})
extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: '两次密码不匹配!'
})
extend('phone',{ 
   message:'请输入正确的手机号码！', 
   validate:(value)=>{  
   return /[1]\d{10}/.test(value);}  
});

extend('size', {
  ...size,
  message: 'video size should be less than 5 MB!'
})

extend('regex', {
  ...regex,
  message: '请输入6-20{_field_}，并且包含字母和特殊字符!' ,
})



Vue.config.productionTip = false



Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// Vue.use(InfiniteLoading, {
//   props: {
//     distance: null
//     /* other props need to configure */
//   }
// })

// Vue.component('InfiniteLoading', InfiniteLoading)

Vue.use(
  new VueSocketIO({
    debug: false, // debug调试，生产建议关闭
    options: {     //Optional options, 
      autoConnect:false, //关闭自动连接，在用户登录后在连接。
    },
    connection: SocketIO('http://127.0.0.1:3002'),//服务端地址
    extraHeaders: {
      'Access-Control-Allow-Credentials': true
    },
    allowEIO3: true,
    // vuex: {
    //   store,
    //   actionPrefix: 'SOCKET_',
    //   mutationPrefix: 'SOCKET_'
    // },
   
  })
);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
