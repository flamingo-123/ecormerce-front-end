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
      import(/* webpackChunkName: "signup" */ '../components/upload.vue'),
    // meta: { requiresVisitor: true }
  },
  {
    path: '/shelf',
    name: 'shelf',
    component: () =>
      import(/* webpackChunkName: "signup" */ '../components/shelf.vue'),
    // meta: { requiresVisitor: true }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (to.path === '/upload' || to.path === '/cart') {
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
