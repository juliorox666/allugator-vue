import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import base from '@/components/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base
  },
  plugins: [
    createPersistedState({
      key: 'allugatorKey',
      // localStorage
      getState: (key) => {
        return JSON.parse(localStorage.getItem(key));
      },
      setState: (key, state) => {
          //console.log('setState', JSON.parse(localStorage.getItem(key)));
          localStorage.setItem(key, JSON.stringify(state));
      },
    })
  ]
});
