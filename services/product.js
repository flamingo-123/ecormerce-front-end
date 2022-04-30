import Api from './Api'
export default {
    loadAllProduct(params) {
        return Api().get(`/product/findAllProduct/?limit=${params.limit}&page=${params.page}`)
      },
    loadTypeProduct(params){
      return Api().get(`/product/findAllProduct/?limit=${params.limit}&page=${params.page}&categories=${params.Type}`)
    },
     createProduct(data){
      return Api().post(`/product`,data)
    },
    deleteProduct(params){
      return Api().post(`/product`,data)
    }
    
}





