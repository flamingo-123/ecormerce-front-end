import Api from './Api'
export default {
    loadOrders(params) {
        return Api().get(`/order/get/?limit=${params.limit}&page=${params.page}&id=${params.id}&payed=${params.payed}`)
    },
    deleteOrders(params) {
        return Api().delete(`/order/${params.id}`)
    },
    createOrder(data) {
        return Api().post('/order',data)
    },
    pay(data){
        return Api().post('/payment',data)
    },
    clearOrder(){
        return Api().put(`/order/cleared`)
    },
    queryOrder(data){
        return Api().post('/payment/queryOrder',data)
    },
    payOrder(data){
        return Api().post('/payment/payOrder',data)
    },
    findOrder(data){
        console.log(data)
        return Api().post('/order/getOrder',data)
    }
}






