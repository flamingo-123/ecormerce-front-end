import Api from './Api'
export default {
  //获得所有的商品
  loadAllProduct(params) {
    return Api().post(`/product/findAllProduct/?limit=${params.limit}&page=${params.page}&id=${params.id}`,params.filter)
  },
  // 获得商品类型
  loadTypeProduct(params) {
    return Api().get(`/product/findAllProduct/?limit=${params.limit}&page=${params.page}&categories=${params.Type}`)
  },
  // 上传商品
  createProduct(data) {
    return Api().post(`/product`, data)
  },
  // 获得特定种类的商品
  getSpecialProduct(params) {
    return Api().get(`/product/getSpecialProduct/?limit=${params.limit}&page=${params.page}&categories=${params.categories}&status=1&condition=1`)
  },
  //获得最大最小商品
  getProductPrice(params) {
    return Api().get(`/product/getProductPrice/?&categories=${params.categories}&status=1&condition=1&position=${params.position}`)
  },

  //获得特定价格的商品
  getPriceProduct(data) {
    return Api().post(`/product/getPriceProduct`, data)
  },
  //删除商品
  deleteProduct(data) {
    return Api().delete(`/product/${data.id}`)
  },
  // 更新商品
  updateProduct(data) {
    return Api().put(`/product/${data.id}`, data)
  },
  getUserProduct(params) {
    if (params.status == null) {
      //上传用户获取自己的商品
      return Api().get(`/product/getUserProduct?limit=${params.limit}&page=${params.page}&userId=${params.id}&delete=false`)
    }
    if (params.condition == null) {
      //获取商品上线状态
      return Api().get(`/product/getUserProduct/?limit=${params.limit}&page=${params.page}&status=${params.status}&userId=${params.id}&delete=false`)
    }
    if (params.condition != null) {
      return Api().get(`/product/getUserProduct/?limit=${params.limit}&page=${params.page}&condition=${params.condition}&userId=${params.id}&delete=false`)
    }
  },
// 获得名称
  getProductTitle(){
  return Api().get(`/product/SearchTitle`)
  },
  SearchProduct(params){
    return Api().get(`/product/SearchProduct/${params.id}`)
  },
  // 获得最新商品
  newProduct(data){
    return Api().post(`/product/newProduct`,data)
  }
}