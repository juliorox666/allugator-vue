const state = {
  isUsuarioLogado: false,
  usuarioLogado: {},
  token: ''
}

const actions = {
  setIsUsuarioLogado ({commit}, val) {
      commit('SET_IS_USUARIO_LOGADO', val);
  },
  setUsuarioLogado ({commit}, val) {
      commit('SET_USUARIO_LOGADO', val);
  },
  setToken ({commit}, val) {
    commit('SET_TOKEN', val);
},
}

const mutations = {
  SET_IS_USUARIO_LOGADO (state, val) {
      state.isUsuarioLogado = val; // boolean true ou false
  },
  SET_USUARIO_LOGADO (state, val) {
      state.usuarioLogado = val; // objeto usuário logado
  },
  SET_TOKEN (state, val) {
    state.token = val;
},
}

const getters = {
  getIsUsuarioLogado: (state) => state.isUsuarioLogado,
  getUsuarioLogado: (state) => state.usuarioLogado,
  getToken: (state) => state.token,
}

export default {
  state,
  actions,
  mutations,
  getters
}
