import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  key: 'vuexLocal'
});

const store = new Vuex.Store({
  state: {
    pageData: {}
  },
  mutations: {
    SET_PAGEDATA(state, data) {
      state.pageData[data.name] = data.value
    }
  },
  actions: {

  },
  modules: {

  },
  plugins: [vuexLocal.plugin],
  strict: process.env.NODE_ENV !== 'production'
})

export default store