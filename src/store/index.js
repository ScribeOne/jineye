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
    records: [],
    user: [],
    userprofile:[],
    userdevices: [],
    devicerecords: [],
  },
  getters: {
    /* Partially Implemented not for production use */
    loggedIn(state) {
      return !!state.token
    }
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
    getRecords(state, data) {
      state.records = data.records
    },
    clearRecords(state) {
      state.records = []
    },
    getuser(state, data) {
      state.user = data.user
      state.userprofile = data.user.profile
    },
    getuserdevices(state, data) {
      state.userdevices = data.devices
    },
    devicerecords(state, data) {
      state.devicerecords = data.devicerecords
    }


  },
  actions: {

    /** 
     * API calls
     */

    getdevicerecords({ commit }, deviceid) {
      axios.get('/devicerecord/' + deviceid + '/').then(response => {
        commit('devicerecords', {
          devicerecords: response.data
        })
        console.log(response)
      })
        .catch(error => console.log(error))
    },


    getuserdevices({ commit }) {
      axios.get('/userdevice/', {
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }
      ).then(response => {
        commit('getuserdevices', {
          devices: response.data
        })
        console.log(response)
      })
        .catch(error => console.log(error))
    },

    getuserdetails({ commit }) {
      axios.get('/user/', {
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }
      ).then(response => {
        commit('getuser', {
          user: response.data
        })
        console.log(response)
      })
        .catch(error => console.log(error))
    },

    getRecords({ commit }) {
      axios.get('/records/').then(response => {
        commit('getRecords', {
          records: response.data
        })
        console.log(response)
      })
        .catch(error => console.log(error))
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

    /** routing */
    logout({ commit }) {
      commit('logout')
      router.push('/login');
    }
  },
  modules: {
  }
})
