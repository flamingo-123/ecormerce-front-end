import Api from './Api'
export default {
  getCollects(params) {
    return Api().get(`/collect/get/?limit=${params.limit}&page=${params.page}&id=${params.id}` )
  },
  clearCollect(data) {
    return Api().put(`/collect/clearCollect`,data)
  },
  addCollect(data) {
    return Api().post(`/collect`,data)
  },
  clearCollects(data){
    return Api().put(`/collect/clearCollects`,data)
  }
}