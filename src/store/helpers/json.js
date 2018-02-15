// use loading helper for this

export const json = {
  state: {
    // use api at helper.rxdb
    jsonDocs: [],
    jsonDoc: {},
    jsonDocIdx: null
  },
  actions: {
    async initJsonDocs ({ state, rootState, commit, dispatch }) {
      // initialize db
      commit('setLoading', true)
      commit('clearError')

      try {
        const jsonDocs = state.api.all()
        commit('setJsonDocs', jsonDocs)

        // set loading
        commit('setLoading', false)
      }
      catch (err) {
        commit('setLoading', false)
        commit('setError', err)
      }
    },
    setJsonDoc ({ state, rootState, commit, dispatch }, payload) {
      commit('setLoading', true)
      commit('clearError')

      try {
        commit('setJsonDocIdx', payload)
        commit('setJsonDoc')

        // set loading
        commit('setLoading', false)
      }
      catch (err) {
        console.log(err)
        commit('setLoading', false)
        commit('setError', err)
      }
    }
  },
  mutations: {
    setJsonDocs (state, payload) {
      state.jsonDocs = payload
    },
    setJsonDoc (state) {
      state.jsonDoc = state.jsonDocs[state.jsonDocIdx]
    },
    setJsonDocIdx (state, payload) {
      state.jsonDocIdx = payload
    }
  }
}
