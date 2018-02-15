import { employeeSchema } from '../../services/rxdb_schema'
import { EmployeeAPI } from '../../services/json_service'
import { EMPLOYEE_COL } from '../../services/constants'
import { rxdb } from '../helpers/rxdb'
import { loading } from '../helpers/loading'

export const employee = {
  namespaced: true,
  state: {
    ...rxdb.state,
    ...loading.state,
    name: EMPLOYEE_COL.NAME,
    slug: EMPLOYEE_COL.SLUG,
    schema: employeeSchema,
    api: EmployeeAPI
  },
  actions: {
    ...rxdb.actions
  },
  mutations: {
    ...rxdb.mutations,
    ...loading.mutations
  },
  getters: {
    employees (state) {
      return state.docs
    },
    employee (state) {
      return state.doc
    }
  }
}
