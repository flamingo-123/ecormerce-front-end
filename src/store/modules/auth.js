import AuthenticationService from '../../../services/AuthenticationService'
const state = {
  url: process.env.VUE_APP_URL,
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
  isUserLoggedIn: localStorage.getItem('token') || false,
  count:localStorage.getItem('count') || 0
}

const getters = {
  getUrl: (state) => {
    return state.url
  },
  isAuthenticated: (state) => {
    return state.isUserLoggedIn
  },
  getToken: (state) => {
    return state.token
  },
  currentUser: (state) => {
    return state.user
  },
  OrderCount: (state) => {
    return state.count
  }
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    if (token) {
      state.isUserLoggedIn = true
    } else {
      state.isUserLoggedIn = false
    }
  },
  SET_USER_DATA(state, data) {
    state.user = data.user
    state.count= data.Count
  },
  CLEAR_AUTH(state) {
    state.token = null
    state.user = null
    state.isUserLoggedIn = false
    state.count=0
  },
  SET_COUNT(state){
    state.count++
  },
  DELETE_COUNT(state){
    state.count--
  },
  clearCount(state){
     state.count=0
  }

}

const actions = {
  signUp({ commit }, credentials) {
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
  signIn({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      AuthenticationService.signIn(credentials)
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          commit('SET_TOKEN', data.token)
          resolve(data)
        })
        .catch((err) => reject(err))
    })
  },
  setUserData({ commit }, data) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('user',JSON.stringify(data.user))
      localStorage.setItem('count',data.Count)
      commit('SET_USER_DATA', data)
      resolve(data)
    })
  },
  setUserData1({ commit }, data) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('user',JSON.stringify(data.user))
      localStorage.setItem('count',0)
      resolve(data)
    })
  },
  signOut({ commit }) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('count')
    commit('CLEAR_AUTH')
  },
  count({commit},data) {
    commit('SET_COUNT')
    localStorage.setItem('count',++data)
  },
  DELETE_COUNT({commit,data}){
    commit('DELETE_COUNT')
    localStorage.setItem('count',--data)
  },
  clearCount({commit}){
    commit('clearCount')
    localStorage.setItem('count',0)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
