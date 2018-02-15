import 'babel-polyfill'

console.log('hostname: ' + window.location.hostname)
const syncURL = 'http://' + window.location.hostname + ':10102/'

export class RxDBCollection {
  constructor (db, name, slug, schema, api) {
    this.db = db
    this.name = name
    this.slug = slug
    this.schema = schema
    this.api = api
    this.collection = null
    this.documents = null
    this.query = null
    this.document = null
    this.defaultDocs = null
  }

  async initCol () {
    console.log('Initialize RxDBCollection for ' + this.name)
    try {
      this.collection = await this.db.collection({
        name: this.name,
        schema: this.schema
      })

      // initialize default collection docs:
      this.getDefaultDocsJSON(this.api)
      this.addDefaultDocs()
    }
    catch (err) {
      console.log(`Error in ${this.name} creation: ${err}`)
    }
    return this.collection
  }

  async getCol () {
    console.log('RxDBCollection.getCol()')
    try {
      this.collection = this.db.collections[this.name]
      if (!this.collection) { // if null
        this.collection = await this.initCol()
      }
    }
    catch (err) {
      console.log('Error retrieving collection object:', err)
      this.collection = await this.initCol()
      console.log('Collection has been newly created:',
        this.collection)
    }

    return this.collection
  }

  async syncCol () {
    try {
      console.log(`Started syncing for ${this.name}`)
      await this.collection.sync({
        remote: syncURL + this.slug + '/'
      })
    }
    catch (err) {
      console.log(`Error in syncing ${this.collection}`)
    }
  }

  async getAllDocs () {
    console.log(`Finding all documents for ${this.name}`)
    try {
      this.documents = await this.collection.find().exec()
    }
    catch (err) {
      console.log(`Error in ${this.name} document fetching: ${err}`)
    }
    return this.documents
  }

  async getQuery (rxQueryObject) {
    console.log(`Querying docs in ${this.name} by this rxQuery:`, rxQueryObject)
    try {
      this.query = await rxQueryObject.exec()
    }
    catch (err) {
      console.log(`Error in ${this.name} document fetching: ${err}`)
    }
    return this.query
  }

  async getDocs (filter) {
    console.log(`Finding filtered collections for ${this.name}`)
    try {
      this.documents = await this.collection.find(filter).exec()
    }
    catch (err) {
      console.log(`Error in ${this.name} document fetching: ${err}`)
    }
    return this.documents
  }

  async getDoc (filter) {
    console.log(`Finding filtered collections for ${this.name}`)
    try {
      this.document = await this.collection.findOne(filter).exec()
    }
    catch (err) {
      console.log(`Error in ${this.name} document fetching: ${err}`)
    }
    return this.document
  }

  async addDoc (doc) {
    try {
      this.document = await this.collection.upsert(doc)
      console.log(`Successfully added a ${this.slug}`)
      console.log('doc=', this.document, 'collection=', this.collection)
    }
    catch (err) {
      if (err.status !== 409) { // 409 - duplicate document
        console.log(`Error in adding the ${this.slug}:`, err)
      }
    }
    return this.document
  }

  async updateDoc (doc) { // same as insert
    try {
      this.document = await this.collection.upsert(doc)
      console.log(`Successfully updated a ${this.slug}`)
      console.log('document=', this.document, 'collection=', this.collection)
    }
    catch (err) {
      console.log(`Error in updating the ${this.slug}:`, err)
    }
    return this.document
  }

  async removeDoc (id) {
    try {
      this.document = await this.collection.findOne().where('id').eq(id).exec()
      this.document.remove()
    }
    catch (err) {
      console.log('Error in removing document from collection:', err)
    }
  }

  getDefaultDocsJSON (CollectionAPI) {
    this.defaultDocs = CollectionAPI.all()
    console.log(this.defaultDocs)
    return this.defaultDocs
  }

  async addDefaultDocs () {
    for (let doc of this.defaultDocs) {
      try {
        let insertPromise = await this.collection.insert(doc)
        console.log('Adding document:', insertPromise, doc)
      }
      catch (err) {
        if (err.status === 409) { // 409 - document is already added
          // console.log('Document already added...', err)
        }
        else {
          console.log('Error in adding doc', err)
        }
      }
    }
  }
}
