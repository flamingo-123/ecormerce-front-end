import Api from './Api'
export default {
    loadAllProduct(params) {
      if (params.status==null) {
        //上传用户获取自己的商品
         return Api().get(`/product/findAllProduct/?limit=${params.limit}&page=${params.page}&id=${params.id}`)
      }else{
         //上传用户获取自己的商品的上架信息
        return Api().get(`/product/findAllProduct/?limit=${params.limit}&page=${params.page}&status=1&condition=${params.condition}&id=${params.id}`)
      }
      },
    loadTypeProduct(params){
      return Api().get(`/product/findAllProduct/?limit=${params.limit}&page=${params.page}&categories=${params.Type}`)
    },
     createProduct(data){
      return Api().post(`/product`,data)
    },
    deleteProduct(params){
      return Api().post(`/product`,data)
    },
    getSpecialProduct(params){
      return Api().get(`/product/getSpecialProduct/?limit=${params.limit}&page=${params.page}&categories=${params.categories}&status=1&condition=1`)
    },
    getProductPrice(params){
      return Api().get(`/product/getSProductPrice/?&categories=${params.categories}&status=1&condition=1`)
    },
    
}





