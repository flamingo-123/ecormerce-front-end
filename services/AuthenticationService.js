import Api from './Api'
export default {
  signIn(credentials) {
    return Api().post('/login', credentials)
  },
  signUp(data) {
    return Api().post('/register', data)
  },
  updateUserDetails(data) {
    return Api().put('/updatedetails', data)
  },
  uploadUserAvatar(data) {
    return Api().put('/avatar', data)
  },
  updatePassword(data) {
    return Api().put('/updatepassword', data)
  },
  me(token) {
    return Api().post('auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}





