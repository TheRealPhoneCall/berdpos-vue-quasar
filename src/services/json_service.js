export const ProfileAPI = {
  profiles () {
    const object = require('./json/profiles.json')
    console.log(object)
    return object
  },
  all () {
    return this.profiles()
  },
  get (id) {
    const isProfile = p => p.id === id
    return this.profiles().find(isProfile)
  }
}

export const CustomerAPI = {
  customers () {
    const object = require('./json/customers.json')
    console.log(object)
    return object
  },
  all () {
    return this.customers()
  },
  get (id) {
    const isCustomer = p => p.id === id
    return this.customers().find(isCustomer)
  }
}

export const EmployeeAPI = {
  employees () {
    const object = require('./json/employees.json')
    console.log(object)
    return object
  },
  all () {
    return this.employees()
  },
  get (id) {
    const isEmployee = p => p.id === id
    return this.employees().find(isEmployee)
  }
}
