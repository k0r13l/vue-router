import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn:false,
    emailT:'t'

  },
  getters: {
  },
  methods: {

    login (state, email) {
      state.isLoggedIn = true;
      state.email = email;
    }
  },
  actions: {
  },
  modules: {
  }
})