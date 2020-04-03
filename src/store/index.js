import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../services/axios-auth.js'
import VuexPersist from 'vuex-persist';
import localForage from 'localforage';
import router from '../router'

Vue.use(Vuex)

const vuexStorage = new VuexPersist({
  key: 'sourcelink',
  storage: localForage,
  // You can change this explicitly use 
  // either window.localStorage  or window.sessionStorage
  // However we are going to make use of localForage
})

export default new Vuex.Store({
  plugins: [vuexStorage.plugin],
  state: {
    count: 0,
    token: null,
    username: '',
    info: [],
  },
  getters: {
    /* Partially Implemented not for production use */
    loggedIn: state => !!state.token
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    login(state, userData) {
      state.token = userData.token
      state.username = userData.username
    },
    logout(state) {
      state.token = ''
      state.username = ''
    },
  },
  actions: {
    test() {
      axios.get('/records/').then(response => {
        this.state.info = response.data;
        console.log(response)
      })
    },
    login({ commit }, authData) {
      axios.post('/token-auth/', {
        username: authData.username,
        password: authData.password,
        returnSecureToken: true,
      })
        .then(response => {
          commit('login', {
            token: response.data.token,
            username: authData.username
          });
        })
        .catch(error => {
          console.log(authData)
          console.log(error)
        })
    },
    logout({ commit }) {
      commit('logout')
      router.push('/login');
    }
  },
  modules: {
  }
})
