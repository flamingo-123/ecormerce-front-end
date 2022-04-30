import { updateOrder } from '../../ecormerce-back-end/controllers/order'
import Api from './Api'
export default {
    loadOrders(params) {
        return Api().get(`/order/get/?limit=${params.limit}&page=${params.page}&id=${params.id}`)
    },
    deleteOrders(params) {
        return Api().delete(`/order/${params.id}`)
    },
    createOrder(data) {
        return Api().post('/order',data)
    },
    pay(){
        return Api().post('/payment')
    },
    clearOrder(){
        return Api().put(`/order/cleared`)
    }
}






