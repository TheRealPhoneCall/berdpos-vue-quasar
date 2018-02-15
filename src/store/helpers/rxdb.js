import { RxDBCollection } from '../../services/rxdb_collections'

export const rxdb = {
  state: {
    name: '',
    slug: '',
    schema: null,
    api: null,
    colClass: {},
    collection: {},
    query: null,
    doc: {},
    docs: []
  },
  actions: {
    async initCollection ({ state, rootState, commit, dispatch }) {
      // initialize db
      commit('setLoading', true)
      commit('clearError')

      const colClass = new RxDBCollection(
        rootState.db, state.name, state.slug,
        state.schema, state.api)
      commit('setColClass', colClass)

      try {
        const collection = await colClass.initCol()
        commit('setCollection', collection)
        const docs = await colClass.getAllDocs()
        commit('setDocs', docs)

        // set loading
        commit('setLoading', false)
      }
      catch (err) {
        commit('setLoading', false)
        commit('setError', err)
      }
    },
    async addDoc ({ state, rootState, commit, dispatch }, payload) {
      // initialize db
      commit('setLoading', true)
      commit('clearError')

      try {
        // add doc with doc as payload
        let doc = payload
        doc = await state.colClass.addDoc(doc)
        commit('setDoc', doc)

        // set loading
        commit('setLoading', false)
      }
      catch (err) {
        commit('setDoc', {})
        commit('setLoading', false)
        commit('setError', err)
      }
    },
    async getDoc ({ state, commit, dispatch }, payload) {
      // initialize db
      commit('setLoading', true)
      commit('clearError')

      try {
        // get doc with filter as payload
        const filter = payload
        const doc = await state.colClass.getDoc(filter)
        commit('setDoc', doc)

        // set loading
        commit('setLoading', false)
      }
      catch (err) {
        console.log(err)
        commit('setDoc', {})
        commit('setLoading', false)
        commit('setError', err)
      }
    },
    async getDocSync ({ state, commit, dispatch }, payload) {
      // initialize fetching
      commit('setLoading', true)
      commit('clearError')

      try {
        // syncly get doc with filter as payload
        const { key, val } = payload
        for (let doc in state.documents) {
          if (doc[key] === val) {
            console.log('doc: ', doc)
            commit('setDoc', doc)
            break
          }
        }
      }
      catch (err) {
        console.log(err)
        commit('setDoc', {})
        commit('setLoading', false)
        commit('setError', err)
      }
    },
    async updateDoc ({ state, commit, dispatch }, payload) {
      // initialize db
      commit('setLoading', true)
      commit('clearError')

      try {
        // update doc with filter as payload
        const filter = payload
        const doc = await state.colClass.updateDoc(filter)
        commit('setDoc', doc)

        // update documents
        const docs = await state.colClass.getAllDocs()
        commit('setDocs', docs)

        // set loading
        commit('setLoading', false)
      }
      catch (err) {
        commit('setDoc', {})
        commit('setLoading', false)
        commit('setError', err)
      }
    },
    async removeDoc ({ state, commit, dispatch }, payload) {
      // initialize db
      commit('setLoading', true)
      commit('clearError')

      try {
        // remove doc with id as payload
        const id = payload
        await state.colClass.removeDoc(id)
        commit('setDoc', {})

        // update documents
        const docs = await state.colClass.getAllDocs()
        commit('setDocs', docs)

        // set loading
        commit('setLoading', false)
      }
      catch (err) {
        commit('setDoc', {})
        commit('setLoading', false)
        commit('setError', err)
      }
    }
  },
  mutations: {
    setColClass (state, payload) {
      state.colClass = payload
    },
    setCollection (state, payload) {
      state.collection = payload
    },
    setDocs (state, payload) {
      state.docs = payload
    },
    setDoc (state, payload) {
      state.doc = payload
    },
    removeDoc (state, payload) {
      state.doc = null
    }
  }
}
