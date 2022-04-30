import cart from '../../../services/cart'
const state = {
    cartList: [],//加入购物车商品
    showCart: false
}

const getters = {
}

const mutations = {
  
}

const actions = {
  addCart({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      AuthenticationService.signUp(credentials)
        .then(({ data }) => {
          commit('SET_TOKEN', data.token)
          localStorage.setItem('token', data.token)
          resolve(data)
        })
        .catch((err) => reject(err))
    })
  },
  getOrders({ commit }, credentials) {
      return new Promise((resolve, reject) => {
      AuthenticationService.signUp(credentials)
        .then(({ data }) => {
          commit('SET_TOKEN', data.token)
          localStorage.setItem('token', data.token)
          resolve(data)
        })
        .catch((err) => reject(err))
    })
  },

}

export default {
  state,
  getters,
  mutations,
  actions
}
