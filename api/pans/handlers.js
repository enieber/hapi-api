'use strict'

const Pans = require('../../models/pans')

module.exports.createPan = {
  handler: (request, reply) => {
    Pans.forge(request.payload)
      .save()
      .then((pan) => reply(pan), (err) => reply(err))
  }
}

module.exports.pans = {
  handler: (request, reply) => {
    Pans.fetchAll()
      .then((pan) => reply(pan), (err) => reply(err))
  }
}

module.exports.panById = {
  handler: (request, reply) => {
    Pans.where({'id': request.params.id})
      .fetch()
      .then((pan) => reply(pan), (err) => reply(err))
  }
}

module.exports.updatePan = {
  handler: (request, reply) => {
    let req = request.payload

    Pans.where({id: request.params.id})
      .save({address: req.address, fone: req.fone}, {patch: true})
      .then((pan) => reply(pan), (err) => reply(err))
  }
}
module.exports.deletePan = {
  handler: (request, reply) => {
    Pans.where({'id': request.params.id})
      .destroy()
      .then((pan) => reply({user: request.params.id, status: 'deleted'}), (err) => reply({user: request.params.id, status: err}))
   }
}
