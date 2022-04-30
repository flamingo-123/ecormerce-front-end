import Api from './Api'
export default {
    getAllUsers(params) {
        return Api().get(`/?limit=${params.limit}&page=${params.page}`)
      }
}





