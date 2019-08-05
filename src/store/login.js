export default {
  state:{
    log: []
  },
  mutations:{
    login(state, req){
      localStorage.setItem('login', JSON.stringify(req))
      state.log.unshift(req)
    },
    logout(state){
      localStorage.removeItem('login')
      state.log = []
    }
  },
  getters:{
    User(state){
      if (state.log.length !== 0){
        console.log(state.log)
        return true
      } else {
        if (localStorage.getItem('login')!== null) {
          state.log.unshift(JSON.parse(localStorage.getItem('login')))
          return true
        }else {
          return false
        }
      }
    }
  }
}
