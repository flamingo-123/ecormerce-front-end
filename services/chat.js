import Api from './Api'
export default {
   getChats(data){
    return Api().post(`/chat`,data)
   }
}






