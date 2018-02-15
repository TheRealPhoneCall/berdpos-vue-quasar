import { PROFILE_COL } from './constants'

export const profileSchema = {
  title: 'profile schema',
  description: 'profile data',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true
    },
    first_name: {
      type: 'string'
    },
    last_name: {
      type: 'string'
    },
    birth_date: {
      format: 'date-time',
      type: 'string'
    },
    date_joined: {
      format: 'date-time',
      type: 'string'
    },
    mobile_number: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    is_user: {
      type: 'boolean'
    },
    is_active: {
      type: 'boolean'
    },
    is_admin: {
      type: 'boolean'
    },
    is_test: {
      type: 'boolean'
    },
    is_dev: {
      type: 'boolean'
    }
  },
  required: ['id', 'first_name', 'last_name', 'date_joined']
}

export const customerSchema = {
  title: 'customer schema',
  description: 'customer data',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true
    },
    profile: {
      type: 'string',
      ref: PROFILE_COL.NAME
    }
  },
  required: ['id', 'profile']
}

export const employeeSchema = {
  title: 'employee schema',
  description: 'employee data',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true
    },
    profile: {
      type: 'string',
      ref: PROFILE_COL.NAME
    }
  },
  required: ['id', 'profile']
}
