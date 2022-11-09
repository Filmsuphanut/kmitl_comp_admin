import { createStore } from 'vuex'

export default createStore({
  state: {
    user: ""
  },
  getters: {
    getCurrentUser: state => {
      // if (localStorage.getItem('user') == ""){
      //   console.log(localStorage.getItem('user'))
      console.log(state.user)
      return localStorage.getItem('user')
      // }
      //return state.user
    }
  },
  mutations: {
    changeUserState(state,name){
      state.user = name
    },changeUserStateWithLocal(state,name){
      state.user = name
      localStorage.setItem('user', name)
    },removeStateAndLocal(state){
      state.user = ""
      localStorage.setItem('user', "")
    }
  },
  actions: {
  },
  modules: {
  }
})
