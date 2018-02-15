import { profileSchema } from '../../services/rxdb_schema'
import { ProfileAPI } from '../../services/json_service'
import { PROFILE_COL } from '../../services/constants'
import { rxdb } from '../helpers/rxdb'
import { loading } from '../helpers/loading'

export const profile = {
  namespaced: true,
  state: {
    ...rxdb.state,
    ...loading.state,
    name: PROFILE_COL.NAME,
    slug: PROFILE_COL.SLUG,
    schema: profileSchema,
    api: ProfileAPI
  },
  actions: {
    ...rxdb.actions
  },
  mutations: {
    ...rxdb.mutations,
    ...loading.mutations
  },
  getters: {
    profiles (state) {
      return state.docs
    },
    profile (state) {
      return state.doc
    }
  }
}
