import Vue from 'vue'
import Vuex from 'vuex'

// services
import BPosDB from '../services/rxdb_service'
import { DB } from '../services/constants'

// modules
import { ui } from './modules/ui'
import { employee } from './modules/employee'
import { customer } from './modules/customer'

Vue.use(Vuex)
// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // strict: debug,
  state: {
    dbObj: null,
    db: null,
    collections: null
  },
  actions: {
    async initiateDb ({ commit, dispatch }) {
      // initialize db
      const dbObj = new BPosDB(DB.NAME, DB.ADAPTER)
      const db = await dbObj.createDB()
      console.log('main store:', dbObj, db)

      commit('setDb', db)
      commit('setDbObj', dbObj)

      await Promise.all([
        dispatch('employee/initCollection', dbObj),
        dispatch('customer/initCollection', dbObj)
      ])
    }
  },
  mutations: {
    setDb (state, payload) {
      state.db = payload
    },
    setDbObj (state, payload) {
      state.dbObj = payload
    }
  },
  modules: {
    ui,
    employee,
    customer
  }
})
