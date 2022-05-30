import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: () => import('../views/Home.vue')
    }
  },
  {
    path: "/paySuccess",
    name: "paySuccess",
    components: {
      default: () => import('../views/paySuccess.vue')
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () =>
      import(/* webpackChunkName: "signin" */ '../views/Auth/SignIn.vue'),
    // meta: { requiresVisitor: true }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () =>
      import(/* webpackChunkName: "signup" */ '../views/Auth/SignUp.vue'),
    // meta: { requiresVisitor: true }
  },
  {
    path: '/categerioy',
    name: 'categerioy',
    component: () =>
      import(/* webpackChunkName: "signup" */ '../components/categerioy.vue'),
    // meta: { requiresVisitor: true }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () =>
      import(/* webpackChunkName: "signup" */ '../components/cart.vue'),
    // meta: { requiresVisitor: true }
  },
  {
    path: '/upload',
    name: 'upload',
    component: () =>
      import('../components/upload.vue'),
  },
  {
    path: '/Shelf',
    name: 'shelf',
    component: () =>
      import('../components/shelf.vue'),

  },
  {
    path: '/payed',
    name: 'payed',
    component: () =>
      import('../components/payed.vue'),

  },
  {
    path: '/myShop',
    name: 'myShop',
    component: () =>
      import('../components/myShop.vue'),

  },
  {
    path: '/chat',
    name: 'chat',
    component: () =>
      import('../components/chat.vue'),

  },
  {
    path:"/product/:id",
    name: 'Home',
    component: () =>
    import('../components/Product.vue'),

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (to.path === '/upload' || to.path === '/cart' || to.path === '/Shelf' || to.path === '/payed'  || to.path === '/myShop') {
    if (user) {
      next()
    } else {
      next('/signin')
    }
  } else {
    next()
  }
})


export default router
