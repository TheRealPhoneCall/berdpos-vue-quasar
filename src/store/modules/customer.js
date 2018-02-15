import { customerSchema } from '../../services/rxdb_schema'
import { CustomerAPI } from '../../services/json_service'
import { CUSTOMER_COL } from '../../services/constants'
import { rxdb } from '../helpers/rxdb'
import { loading } from '../helpers/loading'

export const customer = {
  namespaced: true,
  state: {
    ...rxdb.state,
    ...loading.state,
    name: CUSTOMER_COL.NAME,
    slug: CUSTOMER_COL.SLUG,
    schema: customerSchema,
    api: CustomerAPI
  },
  actions: {
    ...rxdb.actions
  },
  mutations: {
    ...rxdb.mutations,
    ...loading.mutations
  },
  getters: {
    customers (state) {
      return state.docs
    },
    customer (state) {
      return state.doc
    }
  }
}
