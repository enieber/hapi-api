'use strict'

let db = require('../libs/db')

module.exports = db.Model.extend({
  tableName: 'pans',
  uuid: true,
  hasTimestamps: true
})
