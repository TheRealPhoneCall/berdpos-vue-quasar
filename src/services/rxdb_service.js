import RxDB from 'rxdb'
import 'babel-polyfill'
import { dbPassword } from '../settings/.keys/passwords'

// activate pouchdb adapters
RxDB.plugin(require('pouchdb-adapter-websql'))
RxDB.plugin(require('pouchdb-adapter-http'))

export default class BPosDB {
  constructor (dbName, adapter) {
    this.dbName = dbName
    this.apadter = adapter
    this.db = null
    this.collection = null
  }

  async createDB () {
    // create if not yet created
    try {
      console.log('Creating DB...')
      this.db = await RxDB.create({
        name: this.dbName,
        adapter: this.apadter,
        password: dbPassword,
        ignoreDuplicate: true
      })
    }
    catch (err) {
      console.log('error in db creation:', err)
    }

    console.log('db and collection created:', this.db)
    return this.db
  }

  getDB () {
    return this.db
  }
}
